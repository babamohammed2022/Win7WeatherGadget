'use strict';
////////////////////////////////////////////////////////////////////////////////
// Shared helpers for the JavaScript tests.
//
// The gadget runs in the Windows Sidebar (Trident/JScript). These helpers load
// the REAL gadget files into a Node.js "vm" sandbox that imitates the parts of
// that environment the gadget uses: a minimal DOM, System.Gadget.Settings,
// System.Debug, timers and ActiveXObject (Msxml2.ServerXMLHTTP).
//
// Network access is simulated by a "responder" function (url -> response),
// so the tests are deterministic and work offline. The integration test can
// switch to real HTTPS requests with --online.
//
// Gadget folder: reconstructed dist/source by default after a build (UTF-8),
// or an explicit folder via --gadget / GADGET_DIR.
////////////////////////////////////////////////////////////////////////////////

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const REPO = path.resolve(__dirname, '..', '..');

const LOCALES = [
  'en-US', 'it-IT', 'de-DE', 'fr-FR', 'es-ES', 'pt-BR', 'nl-NL', 'pl-PL',
  'ru-RU', 'ja-JP', 'ko-KR', 'zh-CN', 'zh-TW', 'tr-TR', 'sv-SE', 'nb-NO',
  'da-DK', 'fi-FI', 'cs-CZ', 'hu-HU'
];
const ROOT_LOCALE = 'en-US';

function argValue(name) {
  const i = process.argv.indexOf(name);
  return i >= 0 ? process.argv[i + 1] : undefined;
}

function gadgetDir() {
  const assembled = path.join(REPO, 'dist', 'source', 'Weather.gadget');
  const fallback = fs.existsSync(assembled) ? assembled : path.join(REPO, 'src', 'Weather.gadget');
  return path.resolve(argValue('--gadget') || process.env.GADGET_DIR || fallback);
}

// Reads a gadget text file in either repository (UTF-8) or packaged
// (UTF-16LE + BOM) format.
function readText(file) {
  const buf = fs.readFileSync(file);
  if (buf[0] === 0xFF && buf[1] === 0xFE) return buf.slice(2).toString('utf16le');
  if (buf[0] === 0xEF && buf[1] === 0xBB && buf[2] === 0xBF) return buf.slice(3).toString('utf8');
  return buf.toString('utf8');
}

function fixture(name) {
  return fs.readFileSync(path.join(REPO, 'tests', 'fixtures', name), 'utf8');
}

// Returns the localizedStrings.js the Sidebar would pick for a locale: the
// locale folder first, then the gadget root (English).
function localizedStringsPath(dir, locale) {
  if (locale && locale !== ROOT_LOCALE) {
    const p = path.join(dir, locale, 'js', 'localizedStrings.js');
    if (fs.existsSync(p)) return p;
  }
  return path.join(dir, 'js', 'localizedStrings.js');
}

// Default offline responder: answers the three services from the fixtures.
function fixtureResponder(url) {
  if (url.indexOf('https://api.open-meteo.com/v1/forecast?') === 0) {
    return { status: 200, body: fixture('open-meteo-forecast.json') };
  }
  if (url.indexOf('https://geocoding-api.open-meteo.com/v1/search?') === 0) {
    return /name=Xqzvbnmw/.test(url)
      ? { status: 200, body: fixture('open-meteo-geocoding-empty.json') }
      : { status: 200, body: fixture('open-meteo-geocoding.json') };
  }
  if (url.indexOf('https://api.bigdatacloud.net/data/reverse-geocode-client?') === 0) {
    return { status: 200, body: fixture('bigdatacloud-reverse.json') };
  }
  return { status: 404, body: '' };
}

// Real HTTPS responder (used by the integration test with --online).
function onlineResponder(url, done) {
  require('https').get(url, { headers: { 'User-Agent': 'Windows-Gadget-Meteo' } }, (res) => {
    let body = '';
    res.setEncoding('utf8');
    res.on('data', (c) => { body += c; });
    res.on('end', () => done({ status: res.statusCode, body }));
  }).on('error', () => done(null));
}

// Minimal element used by the fake DOM.
function makeElement(id, tag) {
  return {
    id: id || '', tagName: String(tag || 'div').toUpperCase(),
    style: {}, children: [], childNodes: [], attributes: {},
    innerText: '', innerHTML: '', value: '', className: '', alt: '', href: '',
    title: '', src: '', width: 0, height: 0, offsetWidth: 0, offsetHeight: 0,
    checked: false, disabled: false, options: [], selectedIndex: -1,
    appendChild(c) { this.children.push(c); this.childNodes.push(c); return c; },
    removeChild(c) { return c; }, blur() {}, focus() {}, select() {},
    setAttribute(k, v) { this.attributes[k] = v; },
    getAttribute(k) { return this.attributes[k]; },
    insertBefore(c) { this.children.push(c); return c; },
    contains() { return false; }, attachEvent() {}, detachEvent() {},
    // IE TextRange (used by settings.js to move the caret)
    createTextRange() { return { collapse() {}, moveStart() {}, moveEnd() {}, select() {} }; }
  };
}

// Creates a sandbox and loads the given gadget scripts.
//   options.locale     locale whose localizedStrings.js is loaded (default en-US)
//   options.responder  url -> {status, body} | null  (null = network error),
//                      or (url, done) when options.async is true
//   options.scripts    list of gadget-relative script paths after localizedStrings.js
//   options.html       page whose element ids are exposed as globals (IE behavior)
//   options.strings    function (L_localizedStrings_Text) to alter the strings
function createGadget(options) {
  options = options || {};
  const dir = options.dir || gadgetDir();
  const requests = [];
  const settings = Object.assign({}, options.settings || {});
  const debug = [];
  const elements = new Map();
  const responder = options.responder || fixtureResponder;

  function FakeXHR() { this.readyState = 0; this.status = 0; this.onreadystatechange = null; this.headers = {}; }
  FakeXHR.prototype.open = function (method, url) { this.method = method; this.url = url; };
  FakeXHR.prototype.setRequestHeader = function (k, v) { this.headers[k] = v; };
  FakeXHR.prototype.setTimeouts = function () {};
  FakeXHR.prototype.send = function () {
    const self = this;
    requests.push({ url: this.url, headers: this.headers });
    const finish = (r) => {
      self.readyState = 4;
      self.status = r ? r.status : 0;
      self.responseText = r ? r.body : '';
      if (self.onreadystatechange) self.onreadystatechange();
    };
    if (options.async) responder(this.url, finish);
    else setImmediate(() => finish(responder(this.url)));
  };

  const document = {
    dir: 'ltr', title: '', body: makeElement('body', 'body'), documentElement: makeElement('html', 'html'),
    getElementById(id) {
      if (!elements.has(id)) elements.set(id, makeElement(id));
      const el = elements.get(id);
      if (!(id in sandbox)) sandbox[id] = el;
      return el;
    },
    createElement(tag) { return makeElement(null, tag); },
    createTextNode(t) { return { nodeValue: t }; },
    getElementsByTagName() { return []; },
    attachEvent() {}
  };

  const timers = [];
  const sandbox = {
    console, document,
    navigator: { userAgent: 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.1)' },
    screen: { deviceXDPI: 96, logicalXDPI: 96 },
    event: {},
    ActiveXObject: function (progId) {
      if (options.noActiveX) throw new Error('Automation server can\'t create object');
      if (/xmlhttp/i.test(progId)) return new FakeXHR();
      throw new Error('Automation server can\'t create object: ' + progId);
    },
    setTimeout: (fn, ms) => { timers.push({ fn, ms }); return timers.length; },
    clearTimeout: () => {},
    setInterval: () => 1, clearInterval: () => {},
    alert: () => {},
    System: {
      Debug: { outputString: (s) => { debug.push(String(s)); } },
      Gadget: {
        docked: true, visible: true, name: 'Weather', path: dir, settingsUI: 'settings.html',
        onDock: null, onUndock: null, onSettingsClosed: null, onShowSettings: null,
        beginTransition() {}, endTransition() {},
        document: { parentWindow: null },
        Settings: {
          write: (k, v) => { settings[k] = String(v); },
          writeString: (k, v) => { settings[k] = String(v); },
          read: (k) => (k in settings ? settings[k] : ''),
          readString: (k) => (k in settings ? settings[k] : '')
        },
        Flyout: { show: false, file: '', document: null }
      },
      Environment: { getEnvironmentVariable: () => '' },
      Machine: {},
      Network: {},
      Time: {}
    }
  };
  sandbox.window = sandbox;
  sandbox.self = sandbox;
  sandbox.System.Gadget.document.parentWindow = sandbox;
  // Extra globals, e.g. vbsGetLocale (the VBScript helper of weather.html).
  Object.assign(sandbox, options.globals || {});

  if (options.html) {
    const html = readText(path.join(dir, options.html));
    const re = /id\s*=\s*["']([^"']+)["']/gi;
    let m;
    while ((m = re.exec(html)) !== null) document.getElementById(m[1]);
  }

  const ctx = vm.createContext(sandbox);
  const stringsFile = localizedStringsPath(dir, options.locale);
  vm.runInContext(readText(stringsFile), ctx, { filename: path.relative(dir, stringsFile) });
  if (options.strings) options.strings(sandbox.L_localizedStrings_Text);
  for (const s of (options.scripts || ['js/wlservices_shim.js'])) {
    vm.runInContext(readText(path.join(dir, s)), ctx, { filename: s });
  }

  return {
    dir, ctx, sandbox, document, requests, settings, debug, timers,
    run(code) { return vm.runInContext(code, ctx); },
    // Runs a shim search and resolves with the object passed to OnDataReady.
    search(method, arg, timeoutMs) {
      return new Promise((resolve, reject) => {
        const t = setTimeout(() => reject(new Error(method + ' timed out')), timeoutMs || 30000);
        sandbox.__done = (d) => { clearTimeout(t); resolve(d); };
        vm.runInContext('(function(){ var s = new WLServicesShim().GetService("weather");' +
          ' s.OnDataReady = function (d) { __done(d); };' +
          ' s.' + method + '(' + JSON.stringify(arg) + '); })()', ctx);
      });
    }
  };
}

// Tiny test runner: collects results and prints a TAP-like summary.
function createRunner(title) {
  let failures = 0;
  let passes = 0;
  console.log('\n# ' + title);
  function check(name, cond, detail) {
    if (cond) { passes++; console.log('  ok   ' + name); }
    else { failures++; console.log('  FAIL ' + name + (detail !== undefined ? '  -> ' + detail : '')); }
    return !!cond;
  }
  function done() {
    console.log('  ' + passes + ' passed, ' + failures + ' failed');
    process.exitCode = failures ? 1 : (process.exitCode || 0);
    return failures;
  }
  return { check, done };
}

module.exports = {
  REPO, LOCALES, ROOT_LOCALE, gadgetDir, readText, fixture, localizedStringsPath,
  fixtureResponder, onlineResponder, createGadget, createRunner, makeElement
};

'use strict';
////////////////////////////////////////////////////////////////////////////////
// JavaScript validation for the Windows Sidebar engine (JScript 5.x, ES3).
//
// For every gadget script (js/*.js, <locale>/js/*.js and the inline scripts
// of weather.html / settings.html):
//   * parses it as ECMAScript 3 (acorn, ecmaVersion 3);
//   * rejects constructs that ES3 parsers accept but old JScript does not:
//     trailing commas in object/array literals, reserved words used as
//     property names (o.class, { default: 1 });
//   * for the project's own code (js/wlservices_shim.js) also rejects ES5
//     library methods that JScript 5.x does not have (trim, forEach, ...).
// It also checks that every <script src> exists and that the shim is loaded
// after localizedStrings.js and library.js and before weather.js/settings.js.
//
// The checker is first run against known-bad snippets, so a checker that
// silently accepts everything cannot pass.
////////////////////////////////////////////////////////////////////////////////

const fs = require('fs');
const path = require('path');
const acorn = require('acorn');
const walk = require('acorn-walk');
const { gadgetDir, readText, createRunner, LOCALES, ROOT_LOCALE } = require('./helpers.cjs');

const RESERVED = ('break case catch continue default delete do else finally for function if in ' +
  'instanceof new return switch this throw try typeof var void while with abstract boolean byte ' +
  'char class const debugger double enum export extends final float goto implements import int ' +
  'interface long native package private protected public short static super synchronized throws ' +
  'transient volatile null true false').split(' ');

const ES5_METHODS = /\.(trim|forEach|map|filter|reduce|some|every|bind)\s*\(|Object\.(keys|create|defineProperty)\s*\(|Array\.isArray\s*\(/;

function checkSource(code, name, strictProjectCode) {
  const problems = [];
  // JScript event-handler syntax used by Microsoft: function factory::StatusChanged(...)
  const src = code.replace(/function\s+([A-Za-z_$][\w$]*)::([A-Za-z_$][\w$]*)/g, 'function $1__$2');
  let ast;
  try {
    ast = acorn.parse(src, { ecmaVersion: 3, locations: true, allowReserved: true });
  } catch (e) {
    problems.push(name + ': ES3 syntax error: ' + e.message);
    return problems;
  }
  // Trailing commas
  const tokens = [];
  try {
    for (const t of acorn.tokenizer(src, { ecmaVersion: 3, locations: true })) tokens.push(t);
  } catch (e) { /* already parsed successfully */ }
  for (let i = 0; i + 1 < tokens.length; i++) {
    if (tokens[i].type.label === ',' && (tokens[i + 1].type.label === '}' || tokens[i + 1].type.label === ']')) {
      problems.push(name + ':' + tokens[i].loc.start.line + ': trailing comma (JScript error / extra array element)');
    }
  }
  // Reserved words as property names
  walk.full(ast, (node) => {
    if (node.type === 'MemberExpression' && !node.computed && RESERVED.indexOf(node.property.name) >= 0) {
      problems.push(name + ':' + node.loc.start.line + ': reserved word used as property ".' + node.property.name + '"');
    }
    if (node.type === 'Property' && node.key.type === 'Identifier' && RESERVED.indexOf(node.key.name) >= 0) {
      problems.push(name + ':' + node.loc.start.line + ': reserved word used as object key "' + node.key.name + '"');
    }
  });
  if (strictProjectCode) {
    src.split(/\r?\n/).forEach((line, i) => {
      const codeOnly = line.replace(/\/\/.*$/, '');
      if (ES5_METHODS.test(codeOnly)) problems.push(name + ':' + (i + 1) + ': ES5 method not available in JScript 5.x');
    });
  }
  return problems;
}

const r = createRunner('JavaScript validation (ES3 / JScript)');

// --- the checker itself must reject invalid code ------------------------------
const bad = {
  'syntax error': 'function (a { return a; }',
  'ES5+ syntax (let)': 'let a = 1;',
  'trailing comma in object': 'var o = { a: 1, };',
  'trailing comma in array': 'var a = [1, 2,];',
  'reserved word property': 'var c = o.class;',
  'reserved word key': 'var o = { default: 1 };'
};
for (const [label, snippet] of Object.entries(bad)) {
  r.check('checker rejects ' + label, checkSource(snippet, 'snippet').length > 0);
}
r.check('checker rejects ES5 methods in project code', checkSource('var s = " a ".trim();', 'snippet', true).length > 0);
r.check('checker accepts valid ES3', checkSource('var o = { a: 1 }; o["class"] = [1, 2];', 'snippet').length === 0);

// --- gadget files ----------------------------------------------------------
const dir = gadgetDir();
const files = [];
for (const f of fs.readdirSync(path.join(dir, 'js'))) if (f.endsWith('.js')) files.push('js/' + f);
for (const loc of LOCALES) {
  if (loc === ROOT_LOCALE) continue;
  const jsDir = path.join(dir, loc, 'js');
  if (fs.existsSync(jsDir)) for (const f of fs.readdirSync(jsDir)) if (f.endsWith('.js')) files.push(loc + '/js/' + f);
}
r.check('found the 6 gadget scripts and 19 localized string tables', files.length === 25, files.length);
for (const f of files) {
  const problems = checkSource(readText(path.join(dir, f)), f, f === 'js/wlservices_shim.js');
  r.check('valid ES3/JScript: ' + f, problems.length === 0, problems.join('; '));
}

for (const page of ['weather.html', 'settings.html']) {
  const html = readText(path.join(dir, page));
  const srcs = [];
  const tagRe = /<script([^>]*)>([\s\S]*?)<\/script>/gi;
  let m;
  let inline = 0;
  while ((m = tagRe.exec(html)) !== null) {
    const attrs = m[1];
    const s = /src\s*=\s*"([^"]+)"/i.exec(attrs);
    if (s) { srcs.push(s[1]); continue; }
    if (/language\s*=\s*"?vbscript/i.test(attrs)) continue;
    inline++;
    const problems = checkSource(m[2], page + ' inline script ' + inline, false);
    r.check('valid ES3/JScript: ' + page + ' inline script ' + inline, problems.length === 0, problems.join('; '));
  }
  for (const s of srcs) r.check(page + ' references existing ' + s, fs.existsSync(path.join(dir, s)));
  const pos = (n) => srcs.indexOf(n);
  const main = page === 'weather.html' ? 'js/weather.js' : 'js/settings.js';
  r.check(page + ' loads the shim after localizedStrings.js and library.js, before ' + main,
    pos('js/localizedStrings.js') >= 0 && pos('js/library.js') >= 0 &&
    pos('js/wlservices_shim.js') > pos('js/localizedStrings.js') &&
    pos('js/wlservices_shim.js') > pos('js/library.js') &&
    pos(main) > pos('js/wlservices_shim.js'), srcs.join(', '));
}

// The original ActiveX object must not be created any more (its service is gone).
for (const f of ['js/weather.js', 'js/settings.js']) {
  const code = readText(path.join(dir, f)).replace(/\/\/.*$/gm, '');
  r.check(f + ' no longer instantiates wlsrvc.WLServices', !/ActiveXObject\(\s*["']wlsrvc\.WLServices/.test(code));
  r.check(f + ' uses WLServicesShim', /new WLServicesShim\(\)/.test(code));
}

r.done();

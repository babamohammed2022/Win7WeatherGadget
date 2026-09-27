'use strict';
// Runs every offline JavaScript test in its own Node.js process and fails if
// any of them fails. Usage: node tests/js/run_all.cjs [--gadget <dir>]
const { spawnSync } = require('child_process');
const path = require('path');

const tests = ['test_syntax.cjs', 'test_localization.cjs', 'test_shim.cjs', 'test_gadget_integration.cjs'];
const extra = process.argv.slice(2);
let failed = [];
for (const t of tests) {
  const res = spawnSync(process.execPath, [path.join(__dirname, t)].concat(extra), { stdio: 'inherit' });
  if (res.status !== 0) failed.push(t);
}
console.log('\n' + (failed.length ? 'FAILED: ' + failed.join(', ') : 'All JavaScript test files passed (' + tests.length + ').'));
process.exit(failed.length ? 1 : 0);

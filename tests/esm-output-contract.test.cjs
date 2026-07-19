/* eslint-disable @typescript-eslint/no-require-imports */
/* global __dirname, process, require */
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { spawnSync } = require("node:child_process");
const test = require("node:test");

const root = path.resolve(__dirname, "..");
const walk = (directory) => fs.readdirSync(directory, { withFileTypes: true }).sort((a, b) => a.name.localeCompare(b.name)).flatMap((entry) => {
  const absolute = path.join(directory, entry.name);
  return entry.isDirectory() ? walk(absolute) : [absolute];
});

test("native ESM output has a module marker and explicit runtime specifiers", () => {
  assert.deepEqual(JSON.parse(fs.readFileSync(path.join(root, "esm/package.json"), "utf8")), { type: "module" });
  for (const file of walk(path.join(root, "esm")).filter((candidate) => candidate.endsWith(".js"))) {
    const source = fs.readFileSync(file, "utf8");
    assert.doesNotMatch(source, /\brequire\s*\(/, `${file} contains raw require()`);
    assert.doesNotMatch(source, /(?:from\s*|import\s*\()["']\.{1,2}\/[^"']*(?<!\.js)["']/, `${file} has an extensionless relative edge`);
    assert.doesNotMatch(source, /(?:from\s*|import\s*\()["'][^"']+\.json["']/, `${file} has a runtime JSON edge`);
  }
});

test("Node directly executes the native ESM root and it matches CJS exports", () => {
  const script = "import{createRequire}from'node:module';const require=createRequire(import.meta.url);const esm=await import('./esm/index.js');const cjs=require('./lib/index.js');console.log(JSON.stringify({esm:Object.keys(esm).sort(),cjs:Object.keys(cjs).sort(),url:import.meta.resolve('./esm/index.js'),separate:esm.Models.registry!==cjs.Models.registry}))";
  const result = spawnSync(process.execPath, ["--input-type=module", "--eval", script], { cwd: root, encoding: "utf8" });
  assert.equal(result.status, 0, result.stderr);
  const value = JSON.parse(result.stdout);
  assert.deepEqual(value.esm, value.cjs);
  assert.match(value.url, /\/esm\/index\.js$/);
  assert.equal(value.separate, true, "CJS and ESM registries are intentionally separate; consumers must not mix formats");
});

test("ESM finalization rewrites only actual module specifiers", () => {
  const { rewriteSource } = require("../scripts/finalize-esm.cjs");
  const source = `const documentation = "import('./not-a-module')";
import value from "./index";
const lazy = import("./index", { with: {} });
export { value, lazy };
`;
  const rewritten = rewriteSource(path.join(root, "esm/example.js"), source);
  assert.match(rewritten, /import value from "\.\/index\.js"/);
  assert.match(rewritten, /import\("\.\/index\.js", \{ with: \{\} \}\)/);
  assert.match(rewritten, /import\('\.\/not-a-module'\)/);
});

test("authored TypeScript contains no raw CommonJS require", () => {
  const offenders = walk(path.join(root, "src")).filter((file) => file.endsWith(".ts") && /\brequire\s*\(/.test(fs.readFileSync(file, "utf8")));
  assert.deepEqual(offenders, []);
});

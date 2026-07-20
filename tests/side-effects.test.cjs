/* eslint-disable @typescript-eslint/no-require-imports */
/* global __dirname, process, require */
const assert = require("node:assert/strict");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const { spawnSync } = require("node:child_process");
const test = require("node:test");

const root = path.resolve(__dirname, "..");

function runAudit(sourceRoot) {
  return spawnSync(process.execPath, [
    path.join(root, "scripts/audit-side-effects.cjs"),
    "--report",
    "--source-root",
    sourceRoot,
  ], { cwd: root, encoding: "utf8" });
}

test("sideEffects metadata is backed by a fail-closed source audit", () => {
  const result = spawnSync(process.execPath, [path.join(root, "scripts/audit-side-effects.cjs")], {
    cwd: root,
    encoding: "utf8",
  });
  assert.equal(result.status, 0, result.stderr || result.stdout);
  assert.match(result.stdout, /verified no package side-effect entrypoints/);
});

test("side-effect audit rejects eager and dependency-loading top-level forms", () => {
  const sourceRoot = fs.mkdtempSync(path.join(os.tmpdir(), "carbon-side-effects-"));
  try {
    fs.writeFileSync(path.join(sourceRoot, "fixture.ts"), `
import {} from "./dependency";
export {} from "./re-exported-dependency";
import runtimeDependency = require("./runtime-dependency");
const eager = register();
enum EagerEnum { Value = register() }
namespace EagerNamespace { export const value = register(); }
@decorate
class Example {
  static eager = register();
  static { register(); }
}
class Throwing { static { throw "boom"; } }
class Hanging { static { while (true) {} } }
switch (register()) { default: break; }
void eager;
`);
    const result = runAudit(sourceRoot);
    assert.equal(result.status, 1, result.stderr || result.stdout);
    const report = JSON.parse(result.stdout);
    for (const expected of [
      "empty-binding import",
      "empty re-export",
      "import runtimeDependency = require",
      "const eager = register()",
      "enum EagerEnum",
      "namespace EagerNamespace",
      "decorator",
      "static eager = register()",
      "static { register(); }",
      "static { throw",
      "static { while",
      "switch (register())",
    ]) {
      assert.ok(report.violations.some((value) => value.includes(expected)), `missing ${expected}`);
    }
  } finally {
    fs.rmSync(sourceRoot, { recursive: true, force: true });
  }
});

test("generated Long fingerprints preserve duplicate exact occurrences", () => {
  const sourceRoot = fs.mkdtempSync(path.join(os.tmpdir(), "carbon-side-effects-long-"));
  const codecRoot = path.join(sourceRoot, "codec");
  const fixture = path.join(codecRoot, "fixture.ts");
  const initializer = `if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}`;
  const report = () => {
    const result = runAudit(sourceRoot);
    assert.equal(result.status, 0, result.stderr || result.stdout);
    return JSON.parse(result.stdout);
  };
  try {
    fs.mkdirSync(codecRoot, { recursive: true });
    fs.writeFileSync(fixture, `${initializer}\n${initializer}\n`);
    const duplicate = report();
    assert.equal(duplicate.generatedLongInitializerEntries, 2);
    fs.writeFileSync(fixture, `${initializer}\n`);
    const single = report();
    assert.equal(single.generatedLongInitializerEntries, 1);
    assert.notEqual(duplicate.generatedLongInitializerDigest, single.generatedLongInitializerDigest);
  } finally {
    fs.rmSync(sourceRoot, { recursive: true, force: true });
  }
});

test("side-effect audit rejects parse errors", () => {
  const sourceRoot = fs.mkdtempSync(path.join(os.tmpdir(), "carbon-side-effects-parse-"));
  try {
    fs.writeFileSync(path.join(sourceRoot, "invalid.ts"), "const = ;\n");
    const result = runAudit(sourceRoot);
    assert.equal(result.status, 1, result.stderr || result.stdout);
    const report = JSON.parse(result.stdout);
    assert.ok(report.violations.some((value) => value.includes("parse error TS")));
  } finally {
    fs.rmSync(sourceRoot, { recursive: true, force: true });
  }
});

test("eager initializer fingerprints preserve exact text and duplicate occurrences", () => {
  const sourceRoot = fs.mkdtempSync(path.join(os.tmpdir(), "carbon-side-effects-fingerprint-"));
  const fixture = path.join(sourceRoot, "fixture.ts");
  const report = () => {
    const result = runAudit(sourceRoot);
    assert.equal(result.status, 1, result.stderr || result.stdout);
    return JSON.parse(result.stdout);
  };
  try {
    fs.writeFileSync(fixture, 'const first = register("x  y");\nconst second = register("x y");\nconst third = register("x y");\n');
    const withDuplicate = report();
    assert.equal(withDuplicate.eagerInitializerEntries, 3);
    fs.writeFileSync(fixture, 'const first = register("x y");\nconst second = register("x y");\n');
    const withoutDuplicate = report();
    assert.equal(withoutDuplicate.eagerInitializerEntries, 2);
    assert.notEqual(withDuplicate.eagerInitializerDigest, withoutDuplicate.eagerInitializerDigest);
  } finally {
    fs.rmSync(sourceRoot, { recursive: true, force: true });
  }
});

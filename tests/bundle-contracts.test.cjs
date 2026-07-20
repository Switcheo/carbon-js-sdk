/* eslint-disable @typescript-eslint/no-require-imports */
/* global __dirname, process, require */
const assert = require("node:assert/strict");
const os = require("node:os");
const path = require("node:path");
const { spawnSync } = require("node:child_process");
const test = require("node:test");
const contract = require("./fixtures/bundle-contracts.json");

const root = path.resolve(__dirname, "..");

test("Rollup and webpack bundle budgets exclude registry code from stable imports", () => {
  const result = spawnSync(process.execPath, [path.join(root, "scripts/measure-bundles.cjs")], {
    cwd: root,
    encoding: "utf8",
    env: { ...process.env, HOME: path.join(os.tmpdir(), `carbon-bundle-home-${process.pid}`) },
  });
  assert.equal(result.status, 0, result.stderr || result.stdout);
  const measurements = JSON.parse(result.stdout);
  for (const caseName of ["stable-number", "stable-model", "provider", "wallet", "sdk", "registry", "root-number", "order-feature"]) {
    assert.ok(measurements[caseName], `missing required bundle fixture: ${caseName}`);
    for (const bundler of ["rollup", "webpack"]) {
      assert.equal(measurements[caseName][bundler].runtimeSmoke, true, `${caseName}/${bundler} runtime smoke`);
      assert.deepEqual(measurements[caseName][bundler].warnings, [], `${caseName}/${bundler} warnings`);
      assert.ok(Array.isArray(measurements[caseName][bundler].owners), `${caseName}/${bundler} owner inventory`);
    }
  }
  for (const [caseName, bundlers] of Object.entries(contract.targets)) {
    for (const [bundler, target] of Object.entries(bundlers)) {
      const actual = measurements[caseName][bundler];
      assert.ok(actual.raw <= target.raw, `${caseName}/${bundler} raw ${actual.raw} > ${target.raw}`);
      assert.ok(actual.gzip <= target.gzip, `${caseName}/${bundler} gzip ${actual.gzip} > ${target.gzip}`);
      assert.equal(actual.containsRegistry, target.containsRegistry, `${caseName}/${bundler} registry marker`);
      assert.deepEqual(actual.owners, target.owners, `${caseName}/${bundler} owner families`);
      assert.deepEqual(actual.ignoredWarnings, target.ignoredWarnings, `${caseName}/${bundler} ignored warning policy`);
    }
  }
  assert.ok(
    measurements["stable-number"].webpack.raw * 100 < measurements["root-number"].webpack.raw,
    "stable webpack utility import must be at least 100x smaller than the compatibility root namespace",
  );
  assert.ok(measurements["root-number"].webpack.raw < contract.recordedBaseline.raw);
  assert.equal(measurements.provider.rollup.containsRegistry, false);
  assert.equal(measurements.provider.webpack.containsRegistry, false);
  for (const bundler of ["rollup", "webpack"]) {
    assert.equal(measurements["order-feature"][bundler].containsRegistry, false);
    assert.ok(
      measurements["order-feature"][bundler].raw * 4 < measurements.sdk[bundler].raw,
      `focused order feature must be at least 4x smaller than full SDK under ${bundler}`,
    );
  }
});

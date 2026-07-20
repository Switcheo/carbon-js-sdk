/* eslint-disable @typescript-eslint/no-require-imports */
/* global __dirname, process, require */
const assert = require("node:assert/strict");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const { spawnSync } = require("node:child_process");
const test = require("node:test");

const root = path.resolve(__dirname, "..");

test("package smoke resolves public subpaths from the configured artifact", () => {
  const workspace = fs.mkdtempSync(path.join(os.tmpdir(), "carbon-package-smoke-target-"));
  try {
    const packageRoot = path.join(workspace, "node_modules/configured-carbon-sdk");
    fs.mkdirSync(packageRoot, { recursive: true });
    fs.writeFileSync(path.join(packageRoot, "package.json"), JSON.stringify({
      main: "index.js",
      name: "configured-carbon-sdk",
      types: "index.d.ts",
      version: "1.0.0",
    }));
    fs.writeFileSync(path.join(packageRoot, "index.js"), "exports.CarbonSDK = class CarbonSDK {};\n");
    fs.writeFileSync(path.join(packageRoot, "index.d.ts"), "export declare class CarbonSDK {}\n");

    for (const modulePath of [
      "lib/clients/GrpcQueryClient.js",
      "lib/provider/keplr/KeplrAccount.js",
      "lib/provider/leap/LeapAccount.js",
      "lib/wallet/CarbonSigningClient.js",
    ]) {
      const target = path.join(packageRoot, modulePath);
      fs.mkdirSync(path.dirname(target), { recursive: true });
      fs.writeFileSync(target, "exports.loaded = true;\n");
    }

    const childEnv = { ...process.env, CARBON_SDK_PACKAGE: "configured-carbon-sdk" };
    delete childEnv.NODE_TEST_CONTEXT;
    const result = spawnSync(process.execPath, ["--test", path.join(root, "tests/package-smoke.test.cjs")], {
      cwd: workspace,
      encoding: "utf8",
      env: childEnv,
    });

    assert.notEqual(
      result.status,
      0,
      `smoke test must not fall back to the repository package\n${result.stdout}\n${result.stderr}`,
    );
    assert.match(`${result.stdout}\n${result.stderr}`, /configured-carbon-sdk.*compose|compose.*configured-carbon-sdk/s);
  } finally {
    fs.rmSync(workspace, { force: true, recursive: true });
  }
});

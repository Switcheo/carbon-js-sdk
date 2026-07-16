/* eslint-disable @typescript-eslint/no-require-imports */
/* global __dirname, require */
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const projectRoot = path.resolve(__dirname, "..");
const packageJson = require(path.join(projectRoot, "package.json"));

const directCosmjsPackages = [
  "@cosmjs/amino",
  "@cosmjs/cosmwasm-stargate",
  "@cosmjs/crypto",
  "@cosmjs/encoding",
  "@cosmjs/json-rpc",
  "@cosmjs/math",
  "@cosmjs/proto-signing",
  "@cosmjs/stargate",
  "@cosmjs/tendermint-rpc",
  "@cosmjs/utils",
];

function installedVersion(packageName) {
  const packagePath = path.join(projectRoot, "node_modules", ...packageName.split("/"), "package.json");
  return JSON.parse(fs.readFileSync(packagePath, "utf8")).version;
}

function collectTypeScriptFiles(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) return collectTypeScriptFiles(entryPath);
    return entry.isFile() && entry.name.endsWith(".ts") ? [entryPath] : [];
  });
}

test("Carbon declares and installs one coherent direct CosmJS 0.38.1 family", () => {
  for (const packageName of directCosmjsPackages) {
    assert.equal(packageJson.dependencies[packageName], "0.38.1", `${packageName} manifest version`);
    assert.equal(installedVersion(packageName), "0.38.1", `${packageName} installed version`);
  }
  assert.equal(packageJson.dependencies["cosmjs-types"], "0.11.0");
  assert.equal(installedVersion("cosmjs-types"), "0.11.0");
  assert.equal(packageJson.dependencies["@bufbuild/protobuf"], "2.10.2");
  assert.equal(installedVersion("@bufbuild/protobuf"), "2.10.2");

  assert.equal(packageJson.dependencies["bignumber.js"], "9.1.2");
  assert.equal(installedVersion("bignumber.js"), "9.1.2");
});

test("Carbon consumes only CosmJS 0.38 public APIs", () => {
  const sourceRoot = path.join(projectRoot, "src");
  const source = collectTypeScriptFiles(sourceRoot)
    .map((sourcePath) => fs.readFileSync(sourcePath, "utf8"))
    .join("\n");

  assert.doesNotMatch(source, /@cosmjs\/[^"/]+\/build(?:\/[^"/]*)?/);
  assert.match(
    fs.readFileSync(path.join(sourceRoot, "CarbonSDK.ts"), "utf8"),
    /Tendermint37Client\.create\(new clients\.BatchQueryClient\(networkConfig\.tmRpcUrl\)\)/,
  );
  assert.match(
    fs.readFileSync(path.join(sourceRoot, "clients/BatchQueryClient.ts"), "utf8"),
    /HttpBatchClient/,
  );
  assert.doesNotMatch(
    fs.readFileSync(path.join(sourceRoot, "wallet/CarbonWallet.ts"), "utf8"),
    /\bas\s+(?:DeliverTxResponse|BroadcastTx(?:Sync|Async)Response)\b/,
  );
});

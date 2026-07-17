/* eslint-disable @typescript-eslint/no-require-imports */
/* global __dirname, require */
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const projectRoot = path.resolve(__dirname, "..");
const manifest = require(path.join(projectRoot, "package.json"));
const lockfile = fs.readFileSync(path.join(projectRoot, "yarn.lock"), "utf8");

function lockedVersions(packageName) {
  const escaped = packageName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const stanza = new RegExp(`^"?${escaped}@[^\n]+:\\n(?:[ ]{2}[^\n]*\\n|[ ]{4}[^\n]*\\n)*`, "gm");
  return [...lockfile.matchAll(stanza)]
    .map((match) => match[0].match(/^[ ]{2}version "([^"]+)"$/m)?.[1])
    .filter(Boolean)
    .sort();
}

function dependencyOwners(dependencyName, nodeModules) {
  const owners = [];
  const visitPackage = (packageDirectory) => {
    const manifestPath = path.join(packageDirectory, "package.json");
    if (!fs.existsSync(manifestPath)) return;
    const packageManifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
    if (
      packageManifest.dependencies?.[dependencyName] ||
      packageManifest.optionalDependencies?.[dependencyName]
    ) {
      owners.push(`${packageManifest.name}@${packageManifest.version}`);
    }
    visitNodeModules(path.join(packageDirectory, "node_modules"));
  };
  const visitNodeModules = (directory) => {
    if (!fs.existsSync(directory)) return;
    for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
      if (!entry.isDirectory() || entry.name === ".bin") continue;
      const entryPath = path.join(directory, entry.name);
      if (entry.name.startsWith("@")) {
        for (const scopedEntry of fs.readdirSync(entryPath, { withFileTypes: true })) {
          if (scopedEntry.isDirectory()) visitPackage(path.join(entryPath, scopedEntry.name));
        }
      } else {
        visitPackage(entryPath);
      }
    }
  };
  visitNodeModules(nodeModules);
  return owners.sort();
}

test("Cosmos Kit roots and their transitive owner family are absent", () => {
  const removedPackages = [
    "@chain-registry/client",
    "@chain-registry/keplr",
    "@chain-registry/types",
    "@chain-registry/utils",
    "@cosmos-kit/core",
    "@cosmos-kit/leap-extension",
    "@dao-dao/cosmiframe",
    "@keplr-wallet/common",
    "@keplr-wallet/cosmos",
    "@keplr-wallet/crypto",
    "@keplr-wallet/proto-types",
    "@keplr-wallet/simple-fetch",
    "@keplr-wallet/unit",
  ];

  for (const packageName of removedPackages) {
    assert.equal(manifest.dependencies[packageName], undefined, `${packageName} remains direct`);
    assert.deepEqual(lockedVersions(packageName), [], `${packageName} remains locked`);
  }
});

test("the removed Cosmos Kit family leaves only the audited MetaMask uuid owner", () => {
  assert.equal(manifest.resolutions.uuid, "11.1.1");
  assert.deepEqual(lockedVersions("uuid"), ["11.1.1"]);
  assert.deepEqual(dependencyOwners("uuid", path.join(projectRoot, "node_modules")), [
    "@metamask/utils@11.11.0",
  ]);
});

test("remaining elliptic owners exclude the Cosmos Kit Keplr family", () => {
  assert.deepEqual(dependencyOwners("elliptic", path.join(projectRoot, "node_modules")), [
    "@ethersproject/signing-key@5.8.0",
  ]);
});

test("Leap's public sendTx declaration uses Carbon's exact structural broadcast modes", () => {
  const declarations = fs.readFileSync(
    path.join(projectRoot, "lib/provider/leap/types.d.ts"),
    "utf8",
  );

  assert.match(
    declarations,
    /export type BroadcastMode = "block" \| "sync" \| "async";/,
  );
  assert.match(
    declarations,
    /sendTx\(chainId: string, tx: Uint8Array, mode: BroadcastMode\): Promise<Uint8Array>;/,
  );
  assert.doesNotMatch(declarations, /@cosmos-kit/);
});

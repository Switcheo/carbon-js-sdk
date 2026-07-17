/* eslint-disable @typescript-eslint/no-require-imports */
/* global __dirname, process, require */
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const repositoryRoot = path.resolve(__dirname, "..");
const consumerPackage = process.env.CARBON_SDK_PACKAGE;
const graphRoot = consumerPackage ? process.cwd() : repositoryRoot;
const packageRoot = consumerPackage
  ? path.dirname(require.resolve(`${consumerPackage}/package.json`, { paths: [graphRoot] }))
  : repositoryRoot;
const manifest = JSON.parse(fs.readFileSync(path.join(packageRoot, "package.json"), "utf8"));
const lockPath = path.join(repositoryRoot, "yarn.lock");
const lockfile = fs.existsSync(lockPath) ? fs.readFileSync(lockPath, "utf8") : null;

function lockedVersions(packageName) {
  if (!lockfile) return [];
  const escaped = packageName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const stanza = new RegExp(`^"?${escaped}@[^\n]+:\\n(?:[ ]{2}[^\n]*\\n|[ ]{4}[^\n]*\\n)*`, "gm");
  return [...lockfile.matchAll(stanza)]
    .map((match) => match[0].match(/^[ ]{2}version "([^"]+)"$/m)?.[1])
    .filter(Boolean)
    .sort();
}

function dependencyOwners(dependencyName) {
  const owners = [];
  const visited = new Set();

  const visitPackage = (packageDirectory) => {
    const manifestPath = path.join(packageDirectory, "package.json");
    if (!fs.existsSync(manifestPath)) return;

    const realDirectory = fs.realpathSync(packageDirectory);
    if (visited.has(realDirectory)) return;
    visited.add(realDirectory);

    const packageManifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
    const requested = packageManifest.dependencies?.[dependencyName]
      ?? packageManifest.optionalDependencies?.[dependencyName];
    if (requested) {
      const dependencyManifestPath = require.resolve(`${dependencyName}/package.json`, {
        paths: [packageDirectory],
      });
      const dependencyManifest = JSON.parse(fs.readFileSync(dependencyManifestPath, "utf8"));
      owners.push({
        owner: packageManifest.name,
        ownerVersion: packageManifest.version,
        requested,
        resolved: dependencyManifest.version,
      });
    }
    visitNodeModules(path.join(packageDirectory, "node_modules"));
  };

  const visitNodeModules = (directory) => {
    if (!fs.existsSync(directory)) return;
    for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
      if ((!entry.isDirectory() && !entry.isSymbolicLink()) || entry.name === ".bin") continue;
      const entryPath = path.join(directory, entry.name);
      if (entry.name.startsWith("@")) {
        for (const scopedEntry of fs.readdirSync(entryPath, { withFileTypes: true })) {
          if (scopedEntry.isDirectory() || scopedEntry.isSymbolicLink()) {
            visitPackage(path.join(entryPath, scopedEntry.name));
          }
        }
      } else {
        visitPackage(entryPath);
      }
    }
  };

  visitNodeModules(path.join(graphRoot, "node_modules"));
  return owners.sort((left, right) => JSON.stringify(left).localeCompare(JSON.stringify(right)));
}

test("only the explicitly deferred Ethers 5 signing-key path owns elliptic", () => {
  assert.deepEqual(dependencyOwners("elliptic"), [
    {
      owner: "@ethersproject/signing-key",
      ownerVersion: "5.8.0",
      requested: "6.6.1",
      resolved: "6.6.1",
    },
  ]);
  if (lockfile) assert.deepEqual(lockedVersions("elliptic"), ["6.6.1"]);
});

test("the deferred boundary remains exact and cannot silently become Ethers 6", () => {
  assert.equal(manifest.dependencies.ethers, "5.8.0");
  assert.equal(manifest.dependencies["@ethersproject/abstract-signer"], "5.8.0");

  const signingKeyManifestPath = require.resolve("@ethersproject/signing-key/package.json", {
    paths: [packageRoot],
  });
  const signingKeyManifest = JSON.parse(fs.readFileSync(signingKeyManifestPath, "utf8"));
  assert.equal(signingKeyManifest.version, "5.8.0");
  assert.equal(signingKeyManifest.dependencies.elliptic, "6.6.1");
});

test("removed non-Ethers owner families cannot regain direct or locked ownership", () => {
  for (const packageName of [
    "@cosmos-kit/core",
    "@cosmos-kit/leap-extension",
    "eth-sig-util",
    "secp256k1",
  ]) {
    assert.equal(manifest.dependencies[packageName], undefined, `${packageName} must remain removed`);
  }

  assert.equal(manifest.dependencies.bip32, "5.0.1");
  assert.equal(manifest.dependencies["tiny-secp256k1"], undefined);
  assert.equal(manifest.dependencies["@noble/curves"], "1.9.7");
  assert.equal(manifest.dependencies["@metamask/eth-sig-util"], "8.2.0");

  if (lockfile) {
    for (const packageName of [
      "@cosmos-kit/core",
      "@cosmos-kit/leap-extension",
      "@keplr-wallet/crypto",
      "eth-sig-util",
      "ethereumjs-util",
      "secp256k1",
      "tiny-secp256k1",
    ]) {
      assert.deepEqual(lockedVersions(packageName), [], `${packageName} must remain absent from yarn.lock`);
    }
    assert.deepEqual(lockedVersions("bip32"), ["5.0.1"]);
  }
});

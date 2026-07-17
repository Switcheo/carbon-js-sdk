/* eslint-disable @typescript-eslint/no-require-imports */
/* global Buffer, __dirname, require */
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const projectRoot = path.resolve(__dirname, "..");
const packageJson = JSON.parse(fs.readFileSync(path.join(projectRoot, "package.json"), "utf8"));
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
    const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
    if (manifest.dependencies?.[dependencyName] || manifest.optionalDependencies?.[dependencyName]) {
      owners.push(`${manifest.name}@${manifest.version}`);
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

test("uuid 11.1.1 is globally resolved only for the audited Cosmos Kit owners", () => {
  assert.equal(packageJson.resolutions.uuid, "11.1.1");
  assert.deepEqual(lockedVersions("uuid"), ["11.1.1"]);
  assert.deepEqual(dependencyOwners("uuid", path.join(projectRoot, "node_modules")), [
    "@cosmos-kit/core@2.18.1",
    "@dao-dao/cosmiframe@1.0.0",
  ]);
});

test("uuid 11 preserves wallet identifiers and rejects undersized output buffers", () => {
  const uuid = require("uuid");
  const random = uuid.v4();
  const output = Buffer.alloc(16);

  assert.equal(require("uuid/package.json").version, "11.1.1");
  assert.equal(uuid.validate(random), true);
  assert.equal(uuid.v5("carbon-sdk", uuid.v5.DNS, output, 0), output);
  assert.equal(uuid.validate(uuid.stringify(output)), true);
  assert.throws(
    () => uuid.v5("carbon-sdk", uuid.v5.DNS, Buffer.alloc(15), 0),
    /buffer|bounds|16 byte/i,
  );
});

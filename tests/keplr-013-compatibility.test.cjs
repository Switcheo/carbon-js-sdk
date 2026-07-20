/* eslint-disable @typescript-eslint/no-require-imports */
/* global __dirname, process, require */
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");
const { spawnSync } = require("node:child_process");

const projectRoot = path.resolve(__dirname, "..");
const manifest = require(path.join(projectRoot, "package.json"));
const lockfile = fs.readFileSync(path.join(projectRoot, "yarn.lock"), "utf8");
const installedManifest = require(path.join(projectRoot, "node_modules/@keplr-wallet/types/package.json"));

function lockedVersions(packageName) {
  const escaped = packageName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const stanza = new RegExp(`^"${escaped}@[^"]+":\\n(?:[ ]{2}[^\\n]*\\n|[ ]{4}[^\\n]*\\n)*`, "gm");
  return [...lockfile.matchAll(stanza)]
    .map((match) => match[0].match(/^[ ]{2}version "([^"]+)"$/m)?.[1])
    .filter(Boolean)
    .sort();
}

test("Carbon aligns its public Keplr types with the Starknet 8 wallet family", () => {
  assert.equal(manifest.dependencies["@keplr-wallet/types"], "^0.13.40");
  assert.equal(installedManifest.version, "0.13.40");
  assert.deepEqual(installedManifest.peerDependencies, { starknet: "^8" });
  assert.deepEqual(lockedVersions("@keplr-wallet/types"), ["0.13.40"]);
  assert.doesNotMatch(lockfile, /@keplr-wallet\/types@\^0\.12/);
});

test("Carbon exports the Keplr 0.13 wallet surface", () => {
  const tsc = require.resolve("typescript/bin/tsc");
  const fixture = path.join(projectRoot, "tests/fixtures/keplr-013-public-types.ts");
  const result = spawnSync(
    process.execPath,
    [tsc, "--noEmit", "--strict", "--skipLibCheck", "--esModuleInterop", "--module", "commonjs", "--moduleResolution", "node", "--target", "es2020", fixture],
    { cwd: projectRoot, encoding: "utf8" },
  );
  assert.equal(result.status, 0, `${result.stdout}\n${result.stderr}`);
});

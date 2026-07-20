/* eslint-disable @typescript-eslint/no-require-imports */
/* global __dirname, Buffer, process, require */
const assert = require("node:assert/strict");
const crypto = require("node:crypto");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const { spawnSync } = require("node:child_process");
const test = require("node:test");

const root = path.resolve(__dirname, "..");
const publisher = path.join(root, ".github/scripts/publish-release-package.sh");
const tag = "v1.2.3";
const version = "1.2.3";
const commit = "0123456789abcdef0123456789abcdef01234567";

function digest(contents) {
  return crypto.createHash("sha256").update(contents).digest("hex");
}

function provenance(artifactDigest) {
  return [
    "<!-- carbon-js-sdk-prebuilt-provenance -->",
    "## Prebuilt package provenance",
    "",
    `- Tagged commit: \`${commit}\``,
    `- Artifact SHA-256: \`${artifactDigest}\``,
    "<!-- /carbon-js-sdk-prebuilt-provenance -->",
    "",
  ].join("\n");
}

function setupFixture({
  releaseExists = true,
  remoteArtifact,
  includeRemoteChecksum = true,
  prerelease = false,
  remoteNotes,
  remoteCommit = commit,
  checksumOverride,
  releaseReadFailure = false,
  annotatedRemoteTag = false,
} = {}) {
  const workspace = fs.mkdtempSync(path.join(os.tmpdir(), "carbon-release-package-"));
  const bin = path.join(workspace, "bin");
  const local = path.join(workspace, "local");
  const remote = path.join(workspace, "remote");
  const log = path.join(workspace, "gh.log");
  fs.mkdirSync(bin);
  fs.mkdirSync(local);
  fs.mkdirSync(remote);

  const artifactName = `carbon-js-sdk-${version}.tgz`;
  const checksumName = `${artifactName}.sha256`;
  const artifactContents = Buffer.from("prebuilt package bytes");
  const artifactDigest = digest(artifactContents);
  const checksumContents = Buffer.from(checksumOverride ?? `${artifactDigest}  ${artifactName}\n`);
  const artifact = path.join(local, artifactName);
  const checksum = path.join(local, checksumName);
  fs.writeFileSync(artifact, artifactContents);
  fs.writeFileSync(checksum, checksumContents);
  fs.writeFileSync(path.join(remote, "notes.md"), remoteNotes ?? provenance(artifactDigest));

  if (remoteArtifact !== null) {
    fs.writeFileSync(path.join(remote, artifactName), remoteArtifact ?? artifactContents);
  }
  if (includeRemoteChecksum) {
    fs.writeFileSync(path.join(remote, checksumName), checksumContents);
  }

  const fakeGh = path.join(bin, "gh");
  fs.writeFileSync(
    fakeGh,
    `#!/usr/bin/env node
const fs = require("node:fs");
const path = require("node:path");
const args = process.argv.slice(2);
const remote = process.env.FAKE_REMOTE_DIR;
const log = process.env.FAKE_GH_LOG;
const exists = process.env.FAKE_RELEASE_EXISTS === "true";
const record = () => fs.appendFileSync(log, JSON.stringify(args) + "\\n");
if (args[0] === "api") {
  const endpoint = args.find(arg => arg.startsWith("repos/"));
  if (endpoint?.includes("/git/ref/tags/")) {
    if (process.env.FAKE_ANNOTATED_REMOTE_TAG === "true") {
      console.log("tag " + "a".repeat(40));
    } else {
      console.log("commit " + process.env.FAKE_REMOTE_COMMIT);
    }
    process.exit(0);
  }
  if (endpoint?.includes("/git/tags/")) {
    const objectSha = endpoint.split("/").at(-1);
    if (objectSha === "a".repeat(40)) {
      console.log("tag " + "b".repeat(40));
    } else if (objectSha === "b".repeat(40)) {
      console.log("commit " + process.env.FAKE_REMOTE_COMMIT);
    } else {
      process.exit(88);
    }
    process.exit(0);
  }
  if (endpoint?.includes("/releases/tags/")) {
    if (process.env.FAKE_RELEASE_READ_FAILURE === "true") {
      if (args.includes("--include")) console.log("HTTP/2.0 503 Service Unavailable");
      console.error("gh: service unavailable (HTTP 503)");
      process.exit(1);
    }
    if (args.includes("--include")) {
      console.log(exists ? "HTTP/2.0 200 OK" : "HTTP/2.0 404 Not Found");
      process.exit(exists ? 0 : 1);
    }
    if (!exists) process.exit(1);
    const assets = fs.readdirSync(remote)
      .filter(name => name !== "notes.md")
      .sort()
      .map(name => ({ name }));
    const body = fs.readFileSync(path.join(remote, "notes.md"), "utf8");
    console.log(JSON.stringify({ assets, body, prerelease: process.env.FAKE_REMOTE_PRERELEASE === "true" }));
    process.exit(0);
  }
  process.exit(89);
}
if (args[0] !== "release") process.exit(90);
if (args[1] === "view") {
  if (!exists) process.exit(1);
  const jsonIndex = args.indexOf("--json");
  if (jsonIndex === -1) process.exit(0);
  const field = args[jsonIndex + 1];
  if (field === "assets") {
    for (const name of fs.readdirSync(remote).filter(name => name !== "notes.md").sort()) console.log(name);
  } else if (field === "body") {
    process.stdout.write(fs.readFileSync(path.join(remote, "notes.md"), "utf8"));
  } else if (field === "isPrerelease") {
    console.log(process.env.FAKE_REMOTE_PRERELEASE);
  } else process.exit(91);
  process.exit(0);
}
if (args[1] === "download") {
  const name = args[args.indexOf("--pattern") + 1];
  const destination = args[args.indexOf("--dir") + 1];
  fs.copyFileSync(path.join(remote, name), path.join(destination, name));
  process.exit(0);
}
if (["create", "edit", "upload"].includes(args[1])) {
  record();
  process.exit(0);
}
process.exit(92);
`,
    { mode: 0o755 },
  );

  const result = spawnSync("bash", [publisher], {
    cwd: root,
    encoding: "utf8",
    env: {
      ...process.env,
      PATH: `${bin}:${process.env.PATH}`,
      FAKE_REMOTE_DIR: remote,
      FAKE_GH_LOG: log,
      FAKE_RELEASE_EXISTS: String(releaseExists),
      FAKE_REMOTE_PRERELEASE: String(prerelease),
      FAKE_REMOTE_COMMIT: remoteCommit,
      FAKE_RELEASE_READ_FAILURE: String(releaseReadFailure),
      FAKE_ANNOTATED_REMOTE_TAG: String(annotatedRemoteTag),
      GH_TOKEN: "test-token",
      GH_REPO: "Switcheo/carbon-js-sdk",
      RELEASE_TAG: tag,
      RELEASE_VERSION: version,
      RELEASE_COMMIT: commit,
      RELEASE_PRERELEASE: String(prerelease),
      RELEASE_ARTIFACT: artifact,
      RELEASE_CHECKSUM: checksum,
      RELEASE_DIGEST: artifactDigest,
    },
  });

  const calls = fs.existsSync(log)
    ? fs.readFileSync(log, "utf8").trim().split("\n").filter(Boolean).map((line) => JSON.parse(line))
    : [];
  return { workspace, result, calls, artifactName, checksumName };
}

function cleanup(fixture) {
  fs.rmSync(fixture.workspace, { recursive: true, force: true });
}

test("rerun leaves byte-identical release assets unchanged", () => {
  const fixture = setupFixture();
  try {
    assert.equal(fixture.result.status, 0, fixture.result.stderr);
    assert.match(fixture.result.stdout, /identical bytes; leaving it unchanged/);
    assert.deepEqual(fixture.calls, []);
  } finally {
    cleanup(fixture);
  }
});

test("rerun fails instead of replacing an asset with different bytes", () => {
  const fixture = setupFixture({ remoteArtifact: Buffer.from("different remote bytes") });
  try {
    assert.notEqual(fixture.result.status, 0);
    assert.match(fixture.result.stderr, /Refusing to replace existing release asset/);
    assert.deepEqual(fixture.calls, []);
  } finally {
    cleanup(fixture);
  }
});

test("publisher resolves a nested annotated tag chain to the release commit", () => {
  const fixture = setupFixture({ annotatedRemoteTag: true });
  try {
    assert.equal(fixture.result.status, 0, fixture.result.stderr);
    assert.match(fixture.result.stdout, /identical bytes; leaving it unchanged/);
    assert.deepEqual(fixture.calls, []);
  } finally {
    cleanup(fixture);
  }
});

test("publisher rejects a force-moved remote tag before mutating a release", () => {
  const fixture = setupFixture({ releaseExists: false, remoteCommit: "f".repeat(40) });
  try {
    assert.notEqual(fixture.result.status, 0);
    assert.match(fixture.result.stderr, /Remote tag .* does not resolve to tagged commit/);
    assert.deepEqual(fixture.calls, []);
  } finally {
    cleanup(fixture);
  }
});

test("publisher rejects a checksum file that does not bind the artifact digest and name", () => {
  const fixture = setupFixture({ releaseExists: false, checksumOverride: "not-a-valid-checksum\n" });
  try {
    assert.notEqual(fixture.result.status, 0);
    assert.match(fixture.result.stderr, /Checksum file does not contain the expected digest and artifact name/);
    assert.deepEqual(fixture.calls, []);
  } finally {
    cleanup(fixture);
  }
});

test("publisher requires the checksum file's exact newline-terminated bytes", () => {
  const artifactDigest = digest(Buffer.from("prebuilt package bytes"));
  const checksumWithoutNewline = `${artifactDigest}  carbon-js-sdk-${version}.tgz`;
  const fixture = setupFixture({ releaseExists: false, checksumOverride: checksumWithoutNewline });
  try {
    assert.notEqual(fixture.result.status, 0);
    assert.match(fixture.result.stderr, /Checksum file does not contain the expected digest and artifact name/);
    assert.deepEqual(fixture.calls, []);
  } finally {
    cleanup(fixture);
  }
});

test("publisher rejects trailing binary data in the checksum file", () => {
  const artifactDigest = digest(Buffer.from("prebuilt package bytes"));
  const expectedLine = Buffer.from(`${artifactDigest}  carbon-js-sdk-${version}.tgz\n`);
  const fixture = setupFixture({
    releaseExists: false,
    checksumOverride: Buffer.concat([expectedLine, Buffer.from([0])]),
  });
  try {
    assert.notEqual(fixture.result.status, 0);
    assert.match(fixture.result.stderr, /Checksum file does not contain the expected digest and artifact name/);
    assert.deepEqual(fixture.calls, []);
  } finally {
    cleanup(fixture);
  }
});

test("publisher fails closed when GitHub release state cannot be read", () => {
  const fixture = setupFixture({ releaseExists: false, releaseReadFailure: true });
  try {
    assert.notEqual(fixture.result.status, 0);
    assert.match(fixture.result.stderr, /Unable to determine GitHub Release state.*HTTP 503/);
    assert.deepEqual(fixture.calls, []);
  } finally {
    cleanup(fixture);
  }
});

test("publisher rejects duplicate or contradictory provenance blocks", () => {
  const artifactDigest = digest(Buffer.from("prebuilt package bytes"));
  const fixture = setupFixture({ remoteNotes: `${provenance(artifactDigest)}\n${provenance("f".repeat(64))}` });
  try {
    assert.notEqual(fixture.result.status, 0);
    assert.match(fixture.result.stderr, /exactly one complete prebuilt-package provenance block/);
    assert.deepEqual(fixture.calls, []);
  } finally {
    cleanup(fixture);
  }
});

test("existing human release notes without provenance remain unchanged", () => {
  const fixture = setupFixture({ remoteNotes: "Human-authored release notes.\n" });
  try {
    assert.equal(fixture.result.status, 0, fixture.result.stderr);
    assert.deepEqual(fixture.calls, []);
  } finally {
    cleanup(fixture);
  }
});

test("rerun uploads only a missing checksum asset", () => {
  const fixture = setupFixture({ includeRemoteChecksum: false });
  try {
    assert.equal(fixture.result.status, 0, fixture.result.stderr);
    assert.equal(fixture.calls.length, 1);
    assert.equal(fixture.calls[0][1], "upload");
    assert.equal(fixture.calls[0].some((arg) => arg.endsWith(fixture.checksumName)), true);
    assert.equal(fixture.calls[0].some((arg) => arg.endsWith(fixture.artifactName)), false);
  } finally {
    cleanup(fixture);
  }
});

test("new prerelease is created for the exact tag and commit before both assets upload", () => {
  const fixture = setupFixture({ releaseExists: false, prerelease: true });
  try {
    assert.equal(fixture.result.status, 0, fixture.result.stderr);
    assert.equal(fixture.calls.length, 2);
    const [create, upload] = fixture.calls;
    assert.deepEqual(create.slice(0, 3), ["release", "create", tag]);
    assert.equal(create.includes("--verify-tag"), true);
    assert.equal(create.includes("--generate-notes"), true);
    assert.equal(create.includes("--prerelease"), true);
    assert.equal(create[create.indexOf("--target") + 1], commit);
    assert.equal(upload[1], "upload");
    assert.equal(upload.some((arg) => arg.endsWith(fixture.artifactName)), true);
    assert.equal(upload.some((arg) => arg.endsWith(fixture.checksumName)), true);
  } finally {
    cleanup(fixture);
  }
});

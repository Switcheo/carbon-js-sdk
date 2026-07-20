/* eslint-disable @typescript-eslint/no-require-imports */
/* global Buffer, __dirname, process, require */
const assert = require("node:assert/strict");
const http = require("node:http");
const path = require("node:path");
const { spawnSync } = require("node:child_process");
const test = require("node:test");

const projectRoot = path.resolve(__dirname, "..");

const expectedSecurityVersions = {
  lodash: "4.18.1",
  "node-fetch": "2.7.0",
  semver: "7.8.5",
};

for (const [packageName, expectedVersion] of Object.entries(expectedSecurityVersions)) {
  test(`${packageName} resolves to the audited security target`, () => {
    const manifest = require(path.join(projectRoot, "package.json"));
    const installed = require(path.join(packageName, "package.json"));
    assert.equal(manifest.dependencies[packageName], expectedVersion);
    assert.equal(installed.version, expectedVersion);
  });
}

function runIsolated(script, timeout = 3_000) {
  return spawnSync(process.execPath, ["-e", script], {
    cwd: projectRoot,
    encoding: "utf8",
    timeout,
  });
}

function assertIsolatedSuccess(result, label) {
  assert.notEqual(result.error?.code, "ETIMEDOUT", `${label} timed out`);
  assert.equal(result.status, 0, `${label} failed\nstdout: ${result.stdout}\nstderr: ${result.stderr}`);
}

function listen(server, host) {
  return new Promise((resolve, reject) => {
    server.once("error", reject);
    server.listen(0, host, () => resolve(server.address().port));
  });
}

function close(server) {
  return new Promise((resolve, reject) => server.close((error) => (error ? reject(error) : resolve())));
}

test("the node-fetch fallback strips secure headers on a cross-host redirect", async (context) => {
  const { fetch } = require(path.join(projectRoot, "lib/util/fetch.js"));
  let receivedHeaders;

  const target = http.createServer((request, response) => {
    receivedHeaders = request.headers;
    response.end("ok");
  });
  const targetPort = await listen(target);
  context.after(() => close(target));

  const redirect = http.createServer((_request, response) => {
    response.writeHead(302, { location: `http://localhost:${targetPort}/target` });
    response.end();
  });
  const redirectPort = await listen(redirect, "127.0.0.1");
  context.after(() => close(redirect));

  const response = await fetch(`http://127.0.0.1:${redirectPort}/start`, {
    headers: {
      authorization: "Bearer local-test-secret",
      cookie: "session=local-test-secret",
      "x-public": "preserved",
    },
  });
  await response.text();

  assert.equal(receivedHeaders.authorization, undefined);
  assert.equal(receivedHeaders.cookie, undefined);
  assert.equal(receivedHeaders["x-public"], "preserved");
});


test("semver handles the upstream whitespace regression within a bounded child process", () => {
  const result = runIsolated(`
    const semver = require("semver");
    const spaces = " ".repeat(500000);
    const range = new semver.Range(\`1.2.3 \${spaces} <1.3.0\`);
    if (range.range !== "1.2.3 <1.3.0") process.exit(1);
    if (!semver.gte("1.5.3", "1.5.3")) process.exit(1);
    if (semver.gte("1.5.2", "1.5.3")) process.exit(1);
  `);

  assertIsolatedSuccess(result, "semver whitespace regression");
});

test("Lodash unset cannot delete a built-in prototype property through array paths", () => {
  const result = runIsolated(`
    const lodash = require("lodash");
    const before = Object.prototype.hasOwnProperty("toString");
    lodash.unset({}, [["__proto__"], ["toString"]]);
    const after = Object.prototype.hasOwnProperty("toString");
    if (!before || !after) process.exit(1);
  `);

  assertIsolatedSuccess(result, "Lodash array-path prototype regression");
});

test("Lodash template rejects executable import key names", () => {
  const result = runIsolated(`
    const lodash = require("lodash");
    globalThis.__lodashInjected = false;
    try {
      lodash.template("safe", {
        imports: { "x = (globalThis.__lodashInjected = true)": undefined },
      });
    } catch {}
    if (globalThis.__lodashInjected) process.exit(1);
  `);

  assertIsolatedSuccess(result, "Lodash template import regression");
});

test("Lodash capitalize retains the behavior used by EIP-712 type generation", () => {
  const { capitalize } = require("lodash");
  assert.equal(capitalize("fee"), "Fee");
  assert.equal(["fee", "payer"].map(capitalize).join(""), "FeePayer");
});

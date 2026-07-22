/* eslint-disable @typescript-eslint/no-require-imports */
/* global Buffer, __dirname, require */
const assert = require("node:assert/strict");
const fs = require("node:fs");
const http = require("node:http");
const path = require("node:path");
const test = require("node:test");

const projectRoot = path.resolve(__dirname, "..");
const lockfile = fs.readFileSync(path.join(projectRoot, "yarn.lock"), "utf8");

function lockedVersions(packageName) {
  const escaped = packageName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const stanza = new RegExp(`^(?:${escaped})@[^\n]+:\\n(?:[ ]{2}[^\n]*\\n|[ ]{4}[^\n]*\\n)*`, "gm");
  return [...lockfile.matchAll(stanza)]
    .map((match) => match[0].match(/^[ ]{2}version "([^"]+)"$/m)?.[1])
    .filter(Boolean)
    .sort();
}

const expectedVersions = {
  axios: ["0.33.0"],
  "follow-redirects": ["1.16.0"],
  "form-data": ["3.0.5", "4.0.6"],
};

for (const [packageName, versions] of Object.entries(expectedVersions)) {
  test(`${packageName} has the audited compatible lock targets`, () => {
    assert.deepEqual(lockedVersions(packageName), versions);
  });
}

function listen(server, host = "127.0.0.1") {
  return new Promise((resolve, reject) => {
    server.once("error", reject);
    server.listen(0, host, () => resolve(server.address().port));
  });
}

function close(server) {
  return new Promise((resolve, reject) => server.close((error) => (error ? reject(error) : resolve())));
}

test("the direct Axios contract preserves SDK POST, response, and interceptor behavior", async (context) => {
  const axios = require("axios");
  let receivedBody = "";
  let receivedHeader;
  const server = http.createServer((request, response) => {
    receivedHeader = request.headers["x-sdk-interceptor"];
    request.setEncoding("utf8");
    request.on("data", (chunk) => {
      receivedBody += chunk;
    });
    request.on("end", () => {
      response.setHeader("content-type", "application/json");
      response.end(JSON.stringify({ result: "jwt-token", order: ["server"] }));
    });
  });
  const port = await listen(server);
  context.after(() => close(server));

  const client = axios.create();
  client.interceptors.request.use((config) => {
    config.headers["x-sdk-interceptor"] = "request";
    return config;
  });
  client.interceptors.response.use((response) => {
    response.data.order.push("response");
    return response;
  });

  const response = await client.post(`http://127.0.0.1:${port}/auth`, {
    grant_type: "refresh_token",
    refresh_token: "local-test-token",
  });

  assert.equal(receivedHeader, "request");
  assert.deepEqual(JSON.parse(receivedBody), {
    grant_type: "refresh_token",
    refresh_token: "local-test-token",
  });
  assert.equal(response.data.result, "jwt-token");
  assert.deepEqual(response.data.order, ["server", "response"]);
});

test("the direct Axios contract preserves structured HTTP errors", async (context) => {
  const axios = require("axios");
  const server = http.createServer((_request, response) => {
    response.writeHead(422, { "content-type": "application/json" });
    response.end(JSON.stringify({ error: "invalid grant" }));
  });
  const port = await listen(server);
  context.after(() => close(server));

  await assert.rejects(axios.post(`http://127.0.0.1:${port}/auth`, {}), (error) => {
    assert.equal(axios.isAxiosError(error), true);
    assert.equal(error.code, "ERR_BAD_REQUEST");
    assert.equal(error.response.status, 422);
    assert.deepEqual(error.response.data, { error: "invalid grant" });
    return true;
  });
});

test("follow-redirects strips credentials on a cross-host redirect", async (context) => {
  const { http: redirectingHttp } = require("follow-redirects");
  let receivedHeaders;
  const target = http.createServer((request, response) => {
    receivedHeaders = request.headers;
    response.end("ok");
  });
  const targetPort = await listen(target, "127.0.0.2");
  context.after(() => close(target));

  const redirect = http.createServer((_request, response) => {
    response.writeHead(302, { location: `http://127.0.0.2:${targetPort}/target` });
    response.end();
  });
  const redirectPort = await listen(redirect);
  context.after(() => close(redirect));

  await new Promise((resolve, reject) => {
    const request = redirectingHttp.get(
      `http://127.0.0.1:${redirectPort}/start`,
      { headers: { authorization: "Bearer local-test-token", cookie: "session=local-test", "x-public": "kept" } },
      (response) => {
        response.resume();
        response.once("end", resolve);
      },
    );
    request.once("error", reject);
  });

  assert.equal(receivedHeaders.authorization, undefined);
  assert.equal(receivedHeaders.cookie, undefined);
  assert.equal(receivedHeaders["x-public"], "kept");
});

test("form-data escapes CRLF in multipart filenames", () => {
  const FormData = require("form-data");
  const form = new FormData();
  form.append("payload", Buffer.from("safe"), { filename: "report\r\nX-Injected: yes.txt" });
  const header = form._streams.find((stream) => typeof stream === "string");

  assert.equal(header.includes("\r\nX-Injected: yes.txt"), false);
  assert.match(header, /filename="report%0D%0AX-Injected: yes\.txt"/);
});

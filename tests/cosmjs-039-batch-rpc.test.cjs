/* eslint-disable @typescript-eslint/no-require-imports */
/* global __dirname, Buffer, require */
const assert = require("node:assert/strict");
const http = require("node:http");
const path = require("node:path");
const test = require("node:test");

const projectRoot = path.resolve(__dirname, "..");
require(path.join(projectRoot, "lib/index.js"));
const { BatchQueryClient } = require(path.join(projectRoot, "lib/clients/index.js"));

function listen(server) {
  return new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
}

function close(server) {
  return new Promise((resolve, reject) => server.close((error) => error ? reject(error) : resolve()));
}

test("BatchQueryClient batches through the public client and correlates reversed responses by ID", async () => {
  const batches = [];
  const server = http.createServer((request, response) => {
    const chunks = [];
    request.on("data", (chunk) => chunks.push(chunk));
    request.on("end", () => {
      const body = JSON.parse(Buffer.concat(chunks).toString("utf8"));
      batches.push(body);
      response.setHeader("content-type", "application/json");
      response.end(JSON.stringify([...body].reverse().map((item) => ({
        jsonrpc: "2.0",
        id: item.id,
        result: { echoedMethod: item.method },
      }))));
    });
  });
  await listen(server);
  const { port } = server.address();
  const client = new BatchQueryClient(`127.0.0.1:${port}`, { batchSizeLimit: 2, dispatchInterval: 60_000 });

  try {
    const first = client.execute({ jsonrpc: "2.0", id: 41, method: "status", params: {} });
    const second = client.execute({ jsonrpc: "2.0", id: 42, method: "health", params: {} });
    const [firstResponse, secondResponse] = await Promise.all([first, second]);

    assert.equal(batches.length, 1);
    assert.deepEqual(batches[0].map(({ id, method }) => ({ id, method })), [
      { id: 41, method: "status" },
      { id: 42, method: "health" },
    ]);
    assert.deepEqual(firstResponse.result, { echoedMethod: "status" });
    assert.deepEqual(secondResponse.result, { echoedMethod: "health" });
  } finally {
    client.disconnect();
    await close(server);
  }
});

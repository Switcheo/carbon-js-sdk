/* eslint-disable @typescript-eslint/no-require-imports */
/* global Buffer, __dirname, require */
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const projectRoot = path.resolve(__dirname, "..");
const lockfile = fs.readFileSync(path.join(projectRoot, "yarn.lock"), "utf8");

function lockedVersions(packageName) {
  const escaped = packageName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const stanza = new RegExp(`^${escaped}@[^\n]+:\\n(?:[ ]{2}[^\n]*\\n|[ ]{4}[^\n]*\\n)*`, "gm");
  return [...lockfile.matchAll(stanza)]
    .map((match) => match[0].match(/^[ ]{2}version "([^"]+)"$/m)?.[1])
    .filter(Boolean)
    .sort();
}

test("compatible elliptic ranges resolve to 6.6.1 while the exact Ethers blocker stays visible", () => {
  assert.deepEqual(lockedVersions("elliptic"), ["6.5.4", "6.6.1"]);
  assert.match(lockfile, /^elliptic@6\.5\.4:\n[ ]{2}version "6\.5\.4"$/m);
  assert.doesNotMatch(lockfile, /^elliptic@6\.5\.4,[^\n]*:/m);
  assert.match(lockfile, /^elliptic@\^6\.4\.0,[^\n]*:\n[ ]{2}version "6\.6\.1"$/m);
});

test("compatible ws ranges resolve to 7.5.11 while the exact Ethers blocker stays visible", () => {
  assert.deepEqual(lockedVersions("ws"), ["7.4.6", "7.5.11"]);
  assert.match(lockfile, /^ws@7\.4\.6:\n[ ]{2}version "7\.4\.6"$/m);
  assert.match(lockfile, /^ws@\^7, ws@\^7\.5\.11:\n[ ]{2}version "7\.5\.11"$/m);
});

test("elliptic 6.6.1 preserves deterministic secp256k1 signing", () => {
  const EC = require("elliptic").ec;
  const ec = new EC("secp256k1");
  const key = ec.keyFromPrivate("1".padStart(64, "0"), "hex");
  const digest = "4f3c2f8cf697e50e2465a586afb83f3da2f4723a55d67f0f97d0500fc482827c";
  const signature = key.sign(digest, { canonical: true });

  assert.equal(require("elliptic/package.json").version, "6.6.1");
  assert.equal(ec.verify(digest, signature, key.getPublic()), true);
  assert.equal(signature.r.toString(16), "6a5ac630a8403057f635795e5519dfafe00246f77dfaa99c2518a899dc57399a");
  assert.equal(signature.s.toString(16), "6e430014324f78ae52786b280e40ebbdba8fcff5ad8cb6f9ee3c2cc6b5b0263f");
});

test("ws 7.5.11 preserves fragmented wallet transport messages", async () => {
  const WebSocket = require("ws");
  const server = new WebSocket.Server({ port: 0 });
  await new Promise((resolve) => server.once("listening", resolve));
  const address = server.address();
  assert.equal(typeof address, "object");

  const receivedByServer = new Promise((resolve, reject) => {
    server.once("connection", (socket) => {
      socket.once("error", reject);
      socket.once("message", (data) => {
        resolve(Buffer.from(data).toString("utf8"));
        socket.send("ack");
      });
    });
  });

  const client = new WebSocket(`ws://127.0.0.1:${address.port}`);
  await new Promise((resolve, reject) => {
    client.once("open", resolve);
    client.once("error", reject);
  });
  client.send("Car", { fin: false });
  client.send("bon", { fin: false });
  client.send(" SDK", { fin: true });
  const reply = await new Promise((resolve, reject) => {
    client.once("message", (data) => resolve(Buffer.from(data).toString("utf8")));
    client.once("error", reject);
  });

  assert.equal(await receivedByServer, "Carbon SDK");
  assert.equal(reply, "ack");
  client.close();
  await new Promise((resolve) => server.close(resolve));
});

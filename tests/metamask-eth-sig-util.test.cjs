/* eslint-disable @typescript-eslint/no-require-imports */
/* global Buffer, __dirname, console, global, require */
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const projectRoot = path.resolve(__dirname, "..");
const manifest = require(path.join(projectRoot, "package.json"));
const lockfile = fs.readFileSync(path.join(projectRoot, "yarn.lock"), "utf8");

if (!global.window) {
  global.window = {
    addEventListener() {},
    dispatchEvent() {},
  };
}

const { Network } = require(path.join(projectRoot, "lib/constant"));
const { MetaMask } = require(path.join(projectRoot, "lib/provider/metamask/MetaMask"));

const PRIVATE_KEY = "4f3edf983ac636a65a842ce7c78d9aa706d3b113bce036f33285f1f4b6f7f6f5";
const ACCOUNT = "0x83f3feF2b80Ebadf59416069AAA99DcD814E0C5A";
const ENCRYPTION_PUBLIC_KEY = "+BF+3cz5lAMXI7weV+UwylVqShuaA/P5pWExdupqajU=";
const MNEMONIC = "test test test test test test test test test test test junk";
const ENCRYPTED_MESSAGE = [
  "!!! Attention !!! Please make sure you are connecting to https://app.dem.exchange, do not confirm decrypt if you're connecting to untrusted sites.",
  "-----BEGIN MNEMONIC PHRASE-----",
  MNEMONIC,
  "-----END MNEMONIC PHRASE-----",
].join("\n");

function createMetaMask() {
  return new MetaMask(Network.MainNet, false);
}

test("the maintained MetaMask signing utility replaces the deprecated package exactly", () => {
  assert.equal(manifest.dependencies["@metamask/eth-sig-util"], "8.2.0");
  assert.equal(manifest.dependencies["eth-sig-util"], undefined);
  assert.match(lockfile, /^"?@metamask\/eth-sig-util@8\.2\.0"?:$/m);
  assert.doesNotMatch(lockfile, /^eth-sig-util@/m);
  assert.equal(manifest.resolutions.uuid, "11.1.1");
  const metamaskUtilsDirectory = path.dirname(require.resolve("@metamask/utils/package.json"));
  const uuidManifest = require(require.resolve("uuid/package.json", { paths: [metamaskUtilsDirectory] }));
  assert.equal(uuidManifest.version, "11.1.1");
});

test("the deprecated ethereumjs-util 5 owner path is absent without claiming all elliptic is gone", () => {
  assert.doesNotMatch(lockfile, /^ethereumjs-util@\^5\.1\.1:$/m);
  assert.doesNotMatch(lockfile, /^ethereumjs-util@[^\n]*\^5\.1\.1[^\n]*:$/m);
  assert.doesNotMatch(lockfile, /^ethereumjs-util@/m);
  assert.doesNotMatch(lockfile, /^eth-sig-util@/m);
  for (const packageName of ["eth-sig-util", "ethereumjs-util"]) {
    assert.throws(
      () => require.resolve(packageName, { paths: [projectRoot] }),
      (error) => error.code === "MODULE_NOT_FOUND",
    );
  }
  assert.match(lockfile, /^elliptic@/m);
});

test("MetaMask mnemonic encryption keeps the stored cipher format and decrypts with the maintained API", async () => {
  const { decrypt, getEncryptionPublicKey } = require("@metamask/eth-sig-util");
  assert.equal(getEncryptionPublicKey(PRIVATE_KEY), ENCRYPTION_PUBLIC_KEY);

  const legacyCipher = {
    version: "x25519-xsalsa20-poly1305",
    nonce: "SPUyX+4JngOdZNBo8OjgBpwSpYhrr1FA",
    ephemPublicKey: "6XeLxeawgGvm7A4fQ6L9xYPgc5K/7XGgjydB8lvfygE=",
    ciphertext: "qSkef4hXP5rJTAQ1J7PZ+HzuyKXTtfeQtnP7JlrB2nAXiImriex4qDU3CJv9u3Iq6wdUCg/MLMwihmG3txAPeM27uXLnBl1TJBk6PYguRro44Bzre+toSwMzqss3hFFGGlwuYErF5NvQdbJurnBeBSRpAZO+Wt1nqIoB0V+GShpRdLY+QIV5O5ISIdqL6tNd5sMg6DEJh7emGxsD5GH0ykv3V+pKtPe+8EhZVH55ScP5cqgIiomY2VQms9yXpeBo2VJ4a7U5U1N7EAeQdVJoGZ7U3s2tU+1FeT7VYCsmR9YSQpBd5BKq98nTzz+aeAkt9CcnMNghmQjiGcTLkWUkO3m6h62AIDD8FhKiG7i+3fAFhQo7OSXPHYTwnbE=",
  };
  assert.equal(decrypt({ encryptedData: legacyCipher, privateKey: PRIVATE_KEY }), ENCRYPTED_MESSAGE);

  const metamask = createMetaMask();
  metamask.defaultAccount = async () => ACCOUNT;
  metamask.getEncryptionPublicKey = async (address) => {
    assert.equal(address, ACCOUNT);
    return ENCRYPTION_PUBLIC_KEY;
  };

  const storedCipherHex = await metamask.encryptMnemonic(MNEMONIC);
  const [version, nonce, ephemPublicKey, ciphertext] = Buffer.from(storedCipherHex, "hex").toString("utf8").split(".");

  assert.equal(version, "x25519-xsalsa20-poly1305");
  assert.ok(nonce);
  assert.ok(ephemPublicKey);
  assert.ok(ciphertext);
  assert.equal(
    decrypt({ encryptedData: { version, nonce, ephemPublicKey, ciphertext }, privateKey: PRIVATE_KEY }),
    ENCRYPTED_MESSAGE,
  );
});

test("MetaMask decryption preserves modern and legacy stored mnemonic workflows", async (t) => {
  for (const [name, decryptedValue, expected] of [
    ["warning-wrapped", ENCRYPTED_MESSAGE, MNEMONIC],
    ["legacy plaintext", MNEMONIC, MNEMONIC],
  ]) {
    await t.test(name, async () => {
      const calls = [];
      const metamask = createMetaMask();
      metamask.defaultAccount = async () => ACCOUNT;
      metamask.getConnectedAPI = async () => ({
        request: async (request) => {
          calls.push(request);
          return decryptedValue;
        },
      });
      const cipher = {
        version: "x25519-xsalsa20-poly1305",
        nonce: "bm9uY2U=",
        ephemPublicKey: "cHVibGljLWtleQ==",
        ciphertext: "Y2lwaGVydGV4dA==",
      };
      const cipherHex = Buffer.from(Object.values(cipher).join("."), "utf8").toString("hex");

      assert.equal(await metamask.decryptCipher(`0x${cipherHex}`), expected);
      assert.deepEqual(calls, [
        {
          method: "eth_decrypt",
          params: [Buffer.from(JSON.stringify(cipher)).toString("hex"), ACCOUNT],
        },
      ]);
    });
  }
});

test("MetaMask decryption rejects non-mnemonic plaintext", async () => {
  const metamask = createMetaMask();
  metamask.defaultAccount = async () => ACCOUNT;
  metamask.getConnectedAPI = async () => ({ request: async () => "not-a-mnemonic!" });
  const cipherHex = Buffer.from("x25519-xsalsa20-poly1305.nonce.public.ciphertext", "utf8").toString("hex");

  const errors = [];
  const originalConsoleError = console.error;
  console.error = (...args) => errors.push(args);
  try {
    await assert.rejects(
      metamask.decryptCipher(`0x${cipherHex}`),
      /Retrieved invalid account on blockchain/,
    );
  } finally {
    console.error = originalConsoleError;
  }
  assert.equal(errors.length, 2);
});

test("MetaMask personal_sign preserves UTF-8 hex payload and checksum address ordering", async () => {
  const calls = [];
  const metamask = createMetaMask();
  metamask.getConnectedAPI = async () => ({
    request: async (request) => {
      calls.push(request);
      return "0x" + "11".repeat(65);
    },
  });

  const signature = await metamask.personalSign(ACCOUNT.toLowerCase(), "Carbon ✓");

  assert.equal(signature, "0x" + "11".repeat(65));
  assert.deepEqual(calls, [
    {
      method: "personal_sign",
      params: ["0x436172626f6e20e29c93", ACCOUNT],
    },
  ]);
});

test("MetaMask public-key recovery preserves the production personal-sign vector", async () => {
  const message = "carbon-sdk MetaMask recovery vector";
  const signature = "0x1b475b12d12ffc552c1c5274ac21921ef0cba53d0b33304b8ff475b484089e711c54a82a75de9d80a63ea5c3b652ec14c01af5a0f9787a371bf6e60faac9043e1b";
  const expectedPublicKey = "AqNTs+t5KaFSvNb8awSU28gTissaM7fv1AeNO1WwOijv";
  const calls = [];
  const provider = {
    defaultAccount: async () => ACCOUNT,
    personalSign: async (address, data) => {
      calls.push({ address, data });
      return signature;
    },
  };

  assert.deepEqual(await MetaMask.signAndRecoverPubKey(provider, false, message), {
    publicKey: expectedPublicKey,
    signature,
    message,
  });
  assert.deepEqual(calls, [{ address: ACCOUNT, data: message }]);
});

test("MetaMask EIP-712 signing preserves the production payload and strips only the RPC prefix", async () => {
  const calls = [];
  const metamask = createMetaMask();
  metamask.syncBlockchain = async () => ({ chainId: 9790, blockchain: "Carbon" });
  metamask.getConnectedAPI = async () => ({
    request: async (request) => {
      calls.push(request);
      return "0x" + "ab".repeat(65);
    },
  });
  const msgs = [{
    type: "cosmos-sdk/MsgSend",
    value: {
      from_address: "swth1sender",
      to_address: "swth1recipient",
      amount: [{ denom: "swth", amount: "42" }],
    },
  }];
  const fee = { amount: [{ denom: "swth", amount: "7" }], gas: "90000" };

  const result = await metamask.signEip712(
    ACCOUNT,
    "1099511628097",
    "carbon_9790-1",
    msgs,
    fee,
    "metamask migration vector",
    "23",
  );

  assert.equal(result.sig, "ab".repeat(65));
  assert.deepEqual(result.signedDoc, {
    account_number: "1099511628097",
    chain_id: "carbon_9790-1",
    fee,
    memo: "metamask migration vector",
    msgs,
    sequence: "23",
  });
  assert.equal(calls.length, 1);
  assert.equal(calls[0].method, "eth_signTypedData_v4");
  assert.equal(calls[0].params[0], ACCOUNT);
  const payload = JSON.parse(calls[0].params[1]);
  assert.equal(payload.primaryType, "Tx");
  assert.deepEqual(payload.domain, {
    name: "Carbon",
    version: "1.0.0",
    verifyingContract: "0x0000000000000000000000000000636f736D6F73",
    salt: "1",
    chainId: "9790",
  });
  assert.deepEqual(payload.message, {
    account_number: "1099511628097",
    chain_id: "carbon_9790-1",
    fee,
    memo: "metamask migration vector",
    sequence: "23",
    msg0: msgs[0],
  });
});

test("MetaMask EIP-712 cross-chain signing keeps its explicit memo counterexample", async () => {
  let request;
  const metamask = createMetaMask();
  metamask.syncBlockchain = async () => ({ chainId: 1, blockchain: "Ethereum" });
  metamask.getConnectedAPI = async () => ({
    request: async (value) => {
      request = value;
      return "0x" + "cd".repeat(65);
    },
  });

  const result = await metamask.signEip712(
    ACCOUNT,
    "7",
    "carbon_9790-1",
    [],
    { amount: [], gas: "1" },
    "cross-chain",
    "8",
  );

  assert.equal(result.signedDoc.memo, "cross-chain|CROSSCHAIN-SIGNING|signed-chain-id:carbon_1-1;carbon-chain-id:carbon_9790-1");
  assert.equal(JSON.parse(request.params[1]).message.memo, result.signedDoc.memo);
});

test("MetaMask public declarations do not expose the replaced utility", () => {
  const declaration = fs.readFileSync(path.join(projectRoot, "lib/provider/metamask/MetaMask.d.ts"), "utf8");
  assert.doesNotMatch(declaration, /(?:^|["'/])eth-sig-util(?:["'/]|$)/m);
  assert.match(declaration, /encryptMnemonic\(mnemonic: string\): Promise<string>;/);
  assert.match(declaration, /decryptCipher\(cipherTextHex\?: string\): Promise<string \| null>;/);
  assert.match(declaration, /signEip712\([^;]+Promise<\{/s);
});

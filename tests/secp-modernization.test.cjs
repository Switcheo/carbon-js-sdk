/* eslint-disable @typescript-eslint/no-require-imports */
/* global Buffer, __dirname, require */
const assert = require("node:assert/strict");
const path = require("node:path");
const test = require("node:test");

const projectRoot = path.resolve(__dirname, "..");
const mnemonic = "abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon about";
const digest = Buffer.from("f343861a07f519ebaa241f10d267c28e53f17f24ae0075a2d3c6e5f4d80ed23f", "hex");
const compactSignature = Buffer.from(
  "b285a91555399c8920830d756ad97b58454fca74c0eb9838df6a6d31364de5d944901e8702815a80f0ab89d82e2c23e62af986f24a0d73be56b0e7bd57b43860",
  "hex",
);
const derSignature = Buffer.from(
  "3045022100b285a91555399c8920830d756ad97b58454fca74c0eb9838df6a6d31364de5d9022044901e8702815a80f0ab89d82e2c23e62af986f24a0d73be56b0e7bd57b43860",
  "hex",
);

test("the maintained BIP32 factory preserves Carbon mnemonic derivation vectors", () => {
  const manifest = require(path.join(projectRoot, "package.json"));
  const { BIP32, nobleBip32Ecc } = require(path.join(projectRoot, "lib/util/bip32.js"));
  const bip39 = require("bip39");
  const { SWTHAddress, wifEncodePrivateKey } = require(path.join(projectRoot, "lib/util/address.js"));

  assert.equal(manifest.dependencies.bip32, "5.0.1");
  assert.equal(manifest.dependencies["tiny-secp256k1"], undefined);

  const node = BIP32.fromSeed(bip39.mnemonicToSeedSync(mnemonic)).derivePath("m/44'/118'/0'/0/0");
  assert.equal(nobleBip32Ecc.verify(digest, node.publicKey, node.sign(digest)), true);
  assert.equal(
    node.toBase58(),
    "xprvA3X42hRoCY7qnjXkqhXzB74a4iwTR3EBrwLXdwH4NjQLQe99HfDE6p78pTNb2WM4ZiNTmi2Aoi8fAD32oujE6etxvbbKZC53N3ssZmbA8Tk",
  );
  assert.equal(
    node.neutered().toBase58(),
    "xpub6GWQSCxh2ug91DcDwj4zYF1JckmwpVx3EAG8SKgfw4wKHSUHqCXUecRcfhWgEwD27Sg7cFFDN45HtVAxxx2XnRdtdVNr8JLFy8YraWDYBb4",
  );

  const privateKey = SWTHAddress.mnemonicToPrivateKey(mnemonic);
  assert.equal(privateKey.toString("hex"), "c4a48e2fce1481cd3294b4490f6678090ea98d3d0e5cd984558ab0968741b104");
  assert.equal(
    SWTHAddress.privateToPublicKey(privateKey).toString("hex"),
    "024f4e2ad99c34d60b9ba6283c9431a8418af8673212961f97a77b6377fcd05b62",
  );
  assert.equal(SWTHAddress.generateAddress(mnemonic), "swth19rl4cm2hmr8afy4kldpxz3fka4jguq0ar78tvv");
  assert.equal(wifEncodePrivateKey(privateKey), "L3oxZaiL3rN7rzq3LghQVZrZDw8P3ZqV4humZwPg2TXz1vtPbN9V");
});

test("Noble preserves compact and DER signature conversion and verification", () => {
  const manifest = require(path.join(projectRoot, "package.json"));
  const { nobleBip32Ecc } = require(path.join(projectRoot, "lib/util/bip32.js"));
  const { derSignatureToCompact } = require(path.join(projectRoot, "lib/util/secp256k1.js"));
  const privateKey = Buffer.alloc(32, 1);
  const publicKey = nobleBip32Ecc.pointFromScalar(privateKey, true);

  assert.equal(manifest.dependencies["@noble/curves"], "1.9.7");
  assert.deepEqual(Buffer.from(derSignatureToCompact(derSignature)), compactSignature);
  assert.equal(nobleBip32Ecc.verify(digest, publicKey, compactSignature), true);
  assert.throws(() => derSignatureToCompact(Buffer.from("3000", "hex")));
});

test("Ledger signing still returns a 64-byte compact signature", async () => {
  const CosmosLedger = require(path.join(projectRoot, "lib/provider/ledger/ledger.js")).default;
  const ledger = new CosmosLedger();
  ledger.cosmosApp = {
    async sign() {
      return {
        signature: derSignature,
        error_message: "No errors",
        device_locked: false,
      };
    },
  };

  assert.deepEqual(Buffer.from(await ledger.sign("production sign bytes")), compactSignature);
});

test("removed native secp256k1 roots cannot regain direct ownership", () => {
  const fs = require("node:fs");
  const manifest = require(path.join(projectRoot, "package.json"));
  const removedRuntimeRoots = ["secp256k1", "node-gyp-build", "tiny-secp256k1"];

  for (const packageName of removedRuntimeRoots) {
    assert.equal(manifest.dependencies[packageName], undefined, `${packageName} must not be a direct runtime root`);
  }
  assert.equal(manifest.devDependencies["@types/secp256k1"], undefined);

  for (const relativePath of ["src/util/address.ts", "src/util/bip32.ts", "src/provider/ledger/ledger.ts", "examples/node-ledger.ts"]) {
    const source = fs.readFileSync(path.join(projectRoot, relativePath), "utf8");
    assert.doesNotMatch(source, /from ["']secp256k1(?:\/[^"']*)?["']/, `${relativePath} retains a secp256k1 import`);
    assert.doesNotMatch(source, /from ["']tiny-secp256k1(?:\/[^"']*)?["']/, `${relativePath} retains a tiny-secp256k1 import`);
  }
});

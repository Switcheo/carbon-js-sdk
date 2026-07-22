/* eslint-disable @typescript-eslint/no-require-imports */
/* global Buffer, require, setTimeout, console */
const assert = require("node:assert/strict");
const test = require("node:test");
const axios = require("axios");
const { ethers } = require("ethers");
const { Network } = require("../lib/constant");
const {
  JwtAuthMode,
  WalletAuthenticationError,
} = require("../lib/util/auth");
const { CarbonWallet } = require("../lib/wallet/CarbonWallet");
const { MetaMask } = require("../lib/provider/metamask/MetaMask");
const CarbonSDK = require("../lib/CarbonSDK").default;

const session = {
  access_token: "access-token",
  refresh_token: "refresh-token",
  token_type: "Bearer",
  expires_in: 600,
  expires_at: Math.floor(Date.now() / 1000) + 600,
};

function privateKeyWallet(mode = JwtAuthMode.Challenge) {
  const wallet = new CarbonWallet({
    mode: "privateKey",
    network: Network.MainNet,
    privateKey: Buffer.alloc(32, 7),
    jwtAuthMode: mode,
  });
  wallet.jwt = undefined;
  return wallet;
}

function challenge(id, message = "server-controlled exact message", walletAddress = "wallet") {
  return {
    challenge_id: id,
    message,
    expires_at: new Date(Date.now() + 300_000).toISOString(),
    metadata: {
      grant_type: "signature_cosmos",
      wallet_address: walletAddress,
      domain: "app.dem.exchange",
      uri: "https://app.dem.exchange",
      environment: "mainnet",
      network: "mainnet",
      chain_id: "carbon-1",
      purpose: "wallet-login",
    },
  };
}

function axiosError(status, reason) {
  const error = new Error("request failed");
  error.isAxiosError = true;
  error.response = { status, data: { error: { errors: { reason } } } };
  error.config = { data: "signed-security-sensitive-body" };
  return error;
}

async function withAxiosPost(handler, run) {
  const original = axios.post;
  axios.post = handler;
  try { return await run(); } finally { axios.post = original; }
}

test("Cosmos challenge login signs only the exact server message and redeems without a client message", async () => {
  const wallet = privateKeyWallet();
  let signCalls = 0;
  wallet.signer.signMessage = async (_address, message) => {
    signCalls += 1;
    assert.equal(message, "server-controlled exact message");
    return "cosmos-signature";
  };
  const requests = [];

  await withAxiosPost(async (url, body) => {
    requests.push({ url, body });
    if (url === wallet.networkConfig.authChallengeUrl) return { data: { result: challenge("A".repeat(43), "server-controlled exact message", wallet.bech32Address) } };
    assert.equal(url, wallet.networkConfig.authUrl);
    assert.deepEqual(Object.keys(body).sort(), ["challenge_id", "grant_type", "public_key", "signature"]);
    assert.equal(body.challenge_id, "A".repeat(43));
    assert.equal(body.grant_type, "signature_cosmos");
    assert.equal(body.signature, "cosmos-signature");
    return { data: { result: session } };
  }, () => wallet.reloadJwtToken());

  assert.equal(signCalls, 1);
  assert.equal(requests.length, 2);
  assert.equal(wallet.jwt, session);
});

test("expired challenge obtains one new challenge and signs each exact message once", async () => {
  const wallet = privateKeyWallet();
  const lifecycle = [];
  wallet.onRequestAuth = async () => { lifecycle.push("request"); };
  wallet.onAuthComplete = async () => { lifecycle.push("complete"); };
  const signedMessages = [];
  wallet.signer.signMessage = async (_address, message) => {
    signedMessages.push(message);
    return `signature-${signedMessages.length}`;
  };
  let issueCount = 0;
  let redeemCount = 0;

  await withAxiosPost(async (url) => {
    if (url === wallet.networkConfig.authChallengeUrl) {
      issueCount += 1;
      return { data: { result: challenge(String(issueCount).repeat(43), `message-${issueCount}`, wallet.bech32Address) } };
    }
    redeemCount += 1;
    if (redeemCount === 1) throw axiosError(401, "expired");
    return { data: { result: session } };
  }, () => wallet.reloadJwtToken());

  assert.equal(issueCount, 2);
  assert.equal(redeemCount, 2);
  assert.deepEqual(signedMessages, ["message-1", "message-2"]);
  assert.deepEqual(lifecycle, ["request", "complete"]);
});

test("rejected signatures and unavailable challenge service do not retry or fall back to legacy", async () => {
  for (const scenario of [
    { status: 401, reason: "used", expectedCode: "challenge_rejected", expectedSigns: 1 },
    { status: 503, reason: "challenge_store_unavailable", expectedCode: "challenge_unavailable", expectedSigns: 0 },
  ]) {
    const wallet = privateKeyWallet();
    let signs = 0;
    let challenges = 0;
    wallet.signer.signMessage = async () => { signs += 1; return "signature"; };

    await withAxiosPost(async (url) => {
      if (url === wallet.networkConfig.authChallengeUrl) {
        challenges += 1;
        if (scenario.status === 503) throw axiosError(scenario.status, scenario.reason);
        return { data: { result: challenge("B".repeat(43), "server-controlled exact message", wallet.bech32Address) } };
      }
      throw axiosError(scenario.status, scenario.reason);
    }, async () => {
      await assert.rejects(wallet.reloadJwtToken(), (error) => {
        assert.ok(error instanceof WalletAuthenticationError);
        assert.equal(error.code, scenario.expectedCode);
        assert.equal(String(error).includes("signed-security-sensitive-body"), false);
        return true;
      });
    });

    assert.equal(challenges, 1);
    assert.equal(signs, scenario.expectedSigns);
  }
});

test("concurrent authentication shares one challenge, signing prompt, and redemption", async () => {
  const wallet = privateKeyWallet();
  let challenges = 0;
  let signs = 0;
  let redemptions = 0;
  wallet.signer.signMessage = async () => { signs += 1; return "signature"; };

  await withAxiosPost(async (url) => {
    if (url === wallet.networkConfig.authChallengeUrl) {
      challenges += 1;
      await new Promise((resolve) => setTimeout(resolve, 20));
      return { data: { result: challenge("C".repeat(43), "server-controlled exact message", wallet.bech32Address) } };
    }
    redemptions += 1;
    return { data: { result: session } };
  }, () => Promise.all([wallet.reloadJwtToken(), wallet.reloadJwtToken(), wallet.reloadJwtToken()]));

  assert.deepEqual({ challenges, signs, redemptions }, { challenges: 1, signs: 1, redemptions: 1 });
});

test("authentication callbacks bracket each real prompt and no credential is logged", async () => {
  const wallet = privateKeyWallet();
  const lifecycle = [];
  wallet.onRequestAuth = async () => { lifecycle.push("request"); };
  wallet.onAuthComplete = async () => { lifecycle.push("complete"); };
  wallet.signer.signMessage = async () => "do-not-log-signature";
  const output = [];
  const originalLog = console.log;
  const originalError = console.error;
  console.log = (...args) => output.push(args.join(" "));
  console.error = (...args) => output.push(args.join(" "));
  try {
    await withAxiosPost(async (url) => url === wallet.networkConfig.authChallengeUrl
      ? { data: { result: challenge("D".repeat(43), "do-not-log-message", wallet.bech32Address) } }
      : { data: { result: session } }, () => wallet.reloadJwtToken());
  } finally {
    console.log = originalLog;
    console.error = originalError;
  }
  assert.deepEqual(lifecycle, ["request", "complete"]);
  assert.equal(output.join("\n").includes("do-not-log"), false);
});

test("legacy timestamp login remains available only when explicitly configured", async () => {
  const wallet = privateKeyWallet(JwtAuthMode.Legacy);
  const lifecycle = [];
  wallet.onRequestAuth = async () => { lifecycle.push("request"); };
  wallet.onAuthComplete = async (error) => { lifecycle.push(error ? "error" : "complete"); };
  let signedMessage;
  wallet.signer.signMessage = async (_address, message) => { signedMessage = message; return "legacy-signature"; };

  await withAxiosPost(async (url, body) => {
    assert.equal(url, wallet.networkConfig.authUrl);
    assert.equal(body.challenge_id, undefined);
    assert.match(body.message, /\[\d{4}\/\d{2}\/\d{2}/);
    return { data: { result: session } };
  }, () => wallet.reloadJwtToken(undefined, "Legacy statement"));

  assert.match(signedMessage, /^Legacy statement\n\[/);
  assert.deepEqual(lifecycle, ["request", "complete"]);
});

test("callback failures never duplicate completion or replace authentication results", async () => {
  const successful = privateKeyWallet();
  let successCallbacks = 0;
  successful.onAuthComplete = async () => {
    successCallbacks += 1;
    throw new Error("UI callback failed");
  };
  await withAxiosPost(async (url) => url === successful.networkConfig.authChallengeUrl
    ? { data: { result: challenge("J".repeat(43), "server message", successful.bech32Address) } }
    : { data: { result: session } }, () => successful.reloadJwtToken());
  assert.equal(successCallbacks, 1);
  assert.equal(successful.jwt, session);

  const rejected = privateKeyWallet();
  let failureCallbacks = 0;
  rejected.onAuthComplete = async () => {
    failureCallbacks += 1;
    throw new Error("UI callback failed");
  };
  await assert.rejects(
    withAxiosPost(async () => ({ data: null }), () => rejected.reloadJwtToken()),
    (error) => error instanceof WalletAuthenticationError && error.code === "challenge_rejected",
  );
  assert.equal(failureCallbacks, 1);
});

test("legacy callback errors are credential-free while the thrown Axios error remains compatible", async () => {
  const wallet = privateKeyWallet(JwtAuthMode.Legacy);
  const axiosError = Object.assign(new Error("legacy redemption failed"), {
    config: { data: JSON.stringify({ message: "signed-message", signature: "signed-credential" }) },
  });
  let callbackError;
  wallet.onAuthComplete = async (error) => { callbackError = error; };

  await assert.rejects(
    withAxiosPost(async () => { throw axiosError; }, () => wallet.reloadJwtToken()),
    (error) => error === axiosError,
  );
  assert.equal(callbackError?.message, "Wallet authentication failed.");
  assert.equal("config" in callbackError, false);
  assert.equal(JSON.stringify(callbackError).includes("signed-credential"), false);
});

test("malformed successful redemption responses fail before completion", async () => {
  for (const malformed of [
    undefined,
    { ...session, access_token: "" },
    { ...session, refresh_token: " " },
    { ...session, expires_in: 0 },
    { ...session, expires_at: Number.POSITIVE_INFINITY },
  ]) {
    const wallet = privateKeyWallet();
    const lifecycle = [];
    wallet.onRequestAuth = async () => { lifecycle.push("request"); };
    wallet.onAuthComplete = async (error) => { lifecycle.push(error?.code ?? "complete"); };

    await assert.rejects(withAxiosPost(async (url) => url === wallet.networkConfig.authChallengeUrl
      ? { data: { result: challenge("K".repeat(43), "server message", wallet.bech32Address) } }
      : { data: { result: malformed } }, () => wallet.reloadJwtToken()),
    (error) => error instanceof WalletAuthenticationError && error.code === "challenge_rejected");
    assert.deepEqual(lifecycle, ["request", "challenge_rejected"]);
    assert.equal(wallet.jwt, undefined);
  }
});

test("malformed successful refresh responses are rejected without assigning session state", async () => {
  for (const malformed of [undefined, {}, { ...session, access_token: "" }, { ...session, expires_in: -1 }]) {
    const wallet = privateKeyWallet();
    await assert.rejects(
      withAxiosPost(async () => ({ data: { result: malformed } }), () => wallet.refreshJwtToken("refresh-token")),
      /invalid token response/,
    );
    assert.equal(wallet.jwt, undefined);
  }
});

test("MetaMask public-key recovery uses one signature over a supplied server message", async () => {
  const signingWallet = ethers.Wallet.createRandom();
  let prompts = 0;
  const provider = {
    defaultAccount: async () => signingWallet.address,
    personalSign: async (_address, message) => {
      prompts += 1;
      return signingWallet.signMessage(message);
    },
  };
  const result = await MetaMask.signAndRecoverPubKeyForMessage(provider, "exact SIWE message");
  assert.equal(prompts, 1);
  assert.equal(result.message, "exact SIWE message");
  assert.equal(typeof result.publicKey, "string");
  assert.equal(typeof result.signature, "string");
});

test("CarbonSDK MetaMask login requests SIWE before one signing prompt and redeems that credential", async () => {
  const signingWallet = ethers.Wallet.createRandom();
  let prompts = 0;
  let challengeRequests = 0;
  let redemptions = 0;
  let redeemed = false;
  const lifecycle = [];
  const provider = {
    legacyEip712SignMode: false,
    defaultAccount: async () => signingWallet.address,
    personalSign: async (_address, message) => {
      prompts += 1;
      assert.equal(message, "server SIWE message");
      return signingWallet.signMessage(message);
    },
  };
  const sdk = new CarbonSDK({ network: Network.MainNet });
  sdk.connect = async (wallet) => wallet;

  const connected = await withAxiosPost(async (url, body) => {
    if (url === sdk.networkConfig.authChallengeUrl) {
      challengeRequests += 1;
      assert.deepEqual(body, { grant_type: "signature_eth", wallet_address: signingWallet.address });
      const value = challenge("E".repeat(43), "server SIWE message", signingWallet.address);
      value.metadata.grant_type = "signature_eth";
      return { data: { result: value } };
    }
    redemptions += 1;
    assert.equal(body.challenge_id, "E".repeat(43));
    assert.equal(body.message, undefined);
    redeemed = true;
    return { data: { result: session } };
  }, () => sdk.connectWithMetamask(provider, {
    enableJwtAuth: true,
    onRequestAuth: async () => { lifecycle.push("request"); },
    onAuthComplete: async (error) => {
      assert.equal(error, undefined);
      assert.equal(redeemed, true);
      lifecycle.push("complete");
    },
  }));

  assert.deepEqual({ prompts, challengeRequests, redemptions }, { prompts: 1, challengeRequests: 1, redemptions: 1 });
  assert.deepEqual(lifecycle, ["request", "complete"]);
  assert.equal(connected.jwt, session);
});

test("MetaMask legacy lifecycle is exactly once and excludes post-redemption initialization", async () => {
  const signingWallet = ethers.Wallet.createRandom();
  const provider = {
    legacyEip712SignMode: false,
    defaultAccount: async () => signingWallet.address,
    personalSign: async (_address, message) => signingWallet.signMessage(message),
  };
  const sdk = new CarbonSDK({ network: Network.MainNet });
  const lifecycle = [];
  const postRedemptionError = new Error("RPC initialization failed");
  sdk.connect = async () => { throw postRedemptionError; };

  await assert.rejects(withAxiosPost(async () => ({ data: { result: session } }), () => sdk.connectWithMetamask(provider, {
    enableJwtAuth: true,
    jwtAuthMode: JwtAuthMode.Legacy,
    onRequestAuth: async () => { lifecycle.push("request"); },
    onAuthComplete: async (error) => { lifecycle.push(error ? "error" : "complete"); },
  })), (error) => error === postRedemptionError);
  assert.deepEqual(lifecycle, ["request", "complete"]);
});

test("default challenge mode rejects a caller-supplied legacy signature grant", async () => {
  const wallet = privateKeyWallet();
  await assert.rejects(wallet.reloadJwtToken({
    grant_type: "signature_cosmos",
    message: "caller controlled",
    public_key: "02".padEnd(66, "0"),
    signature: "00".repeat(64),
  }), (error) => error instanceof WalletAuthenticationError && error.code === "challenge_rejected");
});

test("CarbonSDK connect preserves typed authentication failures", async () => {
  const sdk = new CarbonSDK({ network: Network.MainNet });
  const expected = new WalletAuthenticationError("challenge_unavailable", 503);
  sdk.getGasFee = async () => ({});
  const wallet = {
    initialized: false,
    initialize: async () => { throw expected; },
  };
  await assert.rejects(sdk.connect(wallet), (error) => error === expected && error.code === "challenge_unavailable");
});

test("malformed successful challenge responses fail with a stable sanitized error before signing", async () => {
  const wallet = privateKeyWallet();
  let signs = 0;
  wallet.signer.signMessage = async () => { signs += 1; return "signature"; };
  const malformed = challenge("F".repeat(43), "message", wallet.bech32Address);
  malformed.metadata.wallet_address = 42;
  await assert.rejects(withAxiosPost(async () => ({ data: { result: malformed } }), () => wallet.reloadJwtToken()),
    (error) => error instanceof WalletAuthenticationError && error.code === "challenge_rejected");
  assert.equal(signs, 0);
});

test("null successful challenge bodies are typed rejections for Cosmos and MetaMask", async () => {
  const wallet = privateKeyWallet();
  const lifecycle = [];
  wallet.onAuthComplete = async (error) => { lifecycle.push(error?.code); };
  await assert.rejects(
    withAxiosPost(async () => ({ data: null }), () => wallet.reloadJwtToken()),
    (error) => error instanceof WalletAuthenticationError && error.code === "challenge_rejected",
  );
  assert.deepEqual(lifecycle, ["challenge_rejected"]);

  const sdk = new CarbonSDK({ network: Network.MainNet });
  const provider = {
    defaultAccount: async () => ethers.Wallet.createRandom().address,
    personalSign: async () => { throw new Error("must not sign"); },
  };
  const evmLifecycle = [];
  await assert.rejects(
    withAxiosPost(async () => ({ data: null }), () => sdk.connectWithMetamask(provider, {
      enableJwtAuth: true,
      onAuthComplete: async (error) => { evmLifecycle.push(error?.code); },
    })),
    (error) => error instanceof WalletAuthenticationError && error.code === "challenge_rejected",
  );
  assert.deepEqual(evmLifecycle, ["challenge_rejected"]);
});

/* eslint-disable @typescript-eslint/no-require-imports */
/* global Buffer, require */
const assert = require("node:assert/strict");
const test = require("node:test");

const { Network } = require("../lib/constant");
const {
  JWT_ACCESS_TOKEN_USE,
  JWT_REFRESH_TOKEN_USE,
  hasRefreshTokenExpired,
  isOpaqueRefreshToken,
  isRefreshSessionUsable,
  isSessionTokenUsable,
} = require("../lib/util/auth");
const { CarbonWallet } = require("../lib/wallet/CarbonWallet");

const now = Math.floor(Date.now() / 1000);
const opaqueRefreshToken = Buffer.alloc(32, 7).toString("base64url");

function token({
  alg = "ES256",
  typ = "at+jwt",
  iss = "demex-auth",
  aud = "demex-auth",
  sub = "carbon-subject",
  iat = now - 10,
  exp = now + 600,
  tokenUse = "accessToken",
  signatureBytes = 64,
} = {}) {
  const encode = (value) => Buffer.from(JSON.stringify(value)).toString("base64url");
  const signature = Buffer.alloc(signatureBytes, 7).toString("base64url");
  return `${encode({ alg, typ })}.${encode({ iss, aud, sub, iat, exp, token_use: tokenUse })}.${signature}`;
}

function session(overrides = {}) {
  const subject = overrides.subject ?? "carbon-subject";
  return {
    access_token: overrides.accessToken ?? token({ sub: subject }),
    refresh_token: overrides.refreshToken ?? token({
      typ: "rt+jwt",
      sub: subject,
      exp: now + 3600,
      tokenUse: "refreshToken",
    }),
    token_type: "Bearer",
    expires_in: 600,
    expires_at: now + 600,
  };
}

function walletWithSession(jwt) {
  const wallet = new CarbonWallet({
    mode: "privateKey",
    network: Network.MainNet,
    privateKey: Buffer.alloc(32, 1),
    jwt,
  });
  return wallet;
}

test("accepts only a strict access-token envelope for the expected wallet", () => {
  const subject = "carbon-subject";
  assert.equal(isSessionTokenUsable(token({ sub: subject }), Network.MainNet, JWT_ACCESS_TOKEN_USE, subject), true);

  const invalidTokens = [
    token({ alg: "HS256", sub: subject }),
    token({ typ: "JWT", sub: subject }),
    token({ iss: "demex-auth-test", sub: subject }),
    token({ aud: "other-audience", sub: subject }),
    token({ aud: ["demex-auth"], sub: subject }),
    token({ sub: "another-wallet" }),
    token({ tokenUse: "refreshToken", sub: subject }),
    token({ iat: null, sub: subject }),
    token({ iat: 0, sub: subject }),
    token({ iat: -1, sub: subject }),
    token({ exp: null, sub: subject }),
    token({ iat: now + 120, sub: subject }),
    token({ iat: now + 1000, exp: now + 100, sub: subject }),
    token({ exp: now - 1, sub: subject }),
    token({ sub: subject }).split('.').slice(0, 2).join('.'),
    `${token({ sub: subject }).split('.').slice(0, 2).join('.')}.`,
    `${token({ sub: subject })}.extra`,
    `${token({ sub: subject }).split('.').slice(0, 2).join('.')}.signature`,
    `${token({ sub: subject }).split('.').slice(0, 2).join('.')}.A`,
    "malformed",
  ];

  for (const candidate of invalidTokens) {
    assert.equal(
      isSessionTokenUsable(candidate, Network.MainNet, JWT_ACCESS_TOKEN_USE, subject),
      false,
      `expected token to be unsuitable: ${candidate}`,
    );
  }
});

test("requires the ES256 signature segment to contain exactly 64 raw bytes", () => {
  const subject = "carbon-subject";
  assert.equal(isSessionTokenUsable(token({ sub: subject, signatureBytes: 64 }), Network.MainNet, JWT_ACCESS_TOKEN_USE, subject), true);
  for (const signatureBytes of [1, 63, 65]) {
    assert.equal(
      isSessionTokenUsable(token({ sub: subject, signatureBytes }), Network.MainNet, JWT_ACCESS_TOKEN_USE, subject),
      false,
      `expected ${signatureBytes}-byte ES256 signature to be rejected`,
    );
  }
});

test("requires each network's exact issuer and scalar audience", () => {
  const subject = "carbon-subject";
  const issuers = new Map([
    [Network.MainNet, "demex-auth"],
    [Network.TestNet, "demex-auth-test"],
    [Network.DevNet, "demex-auth-dev"],
    [Network.LocalHost, "demex-auth-local"],
  ]);

  for (const [network, issuer] of issuers) {
    const candidate = token({ iss: issuer, aud: issuer, sub: subject });
    assert.equal(isSessionTokenUsable(candidate, network, JWT_ACCESS_TOKEN_USE, subject), true);
  }
});

test("validates refresh-token type and fails closed on malformed payloads", () => {
  const subject = "carbon-subject";
  const refresh = token({
    typ: "rt+jwt",
    sub: subject,
    tokenUse: "refreshToken",
  });
  assert.equal(isSessionTokenUsable(refresh, Network.MainNet, JWT_REFRESH_TOKEN_USE, subject), true);
  assert.equal(hasRefreshTokenExpired(refresh), false);
  assert.equal(hasRefreshTokenExpired("broken.payload"), true);
  assert.equal(hasRefreshTokenExpired(opaqueRefreshToken), false);
  assert.equal(isOpaqueRefreshToken(opaqueRefreshToken), true);
  for (const malformed of [
    "A".repeat(42),
    "A".repeat(42) + "B",
    `${opaqueRefreshToken}=`,
    "A".repeat(44),
  ]) assert.equal(isOpaqueRefreshToken(malformed), false);
  assert.equal(isRefreshSessionUsable(
    opaqueRefreshToken,
    token({ iss: "demex-auth-test", aud: "demex-auth-test", sub: subject, exp: now - 1 }),
    Network.MainNet,
    subject,
  ), false);
});

test("reuses a suitable access token without refreshing or signing", async () => {
  const wallet = walletWithSession(session());
  wallet.jwt = session({ subject: wallet.bech32Address });
  let refreshed = false;
  let signed = false;
  wallet.refreshJwtToken = async () => { refreshed = true; };
  wallet.getNewJwtToken = async () => { signed = true; };

  await wallet.reloadJwtToken();

  assert.equal(refreshed, false);
  assert.equal(signed, false);
});

test("uses a suitable refresh token when the access token is unusable", async () => {
  const wallet = walletWithSession(session());
  wallet.jwt = session({
    subject: wallet.bech32Address,
    accessToken: token({ sub: wallet.bech32Address, exp: now - 1 }),
  });
  let refreshedWith;
  let signed = false;
  wallet.refreshJwtToken = async (refreshToken) => { refreshedWith = refreshToken; };
  wallet.getNewJwtToken = async () => { signed = true; };

  await wallet.reloadJwtToken();

  assert.equal(refreshedWith, wallet.jwt.refresh_token);
  assert.equal(signed, false);
});

test("uses an opaque refresh token only when the cached access token binds it to this wallet and network", async () => {
  const wallet = walletWithSession(session());
  wallet.jwt = session({
    subject: wallet.bech32Address,
    accessToken: token({ sub: wallet.bech32Address, exp: now - 1 }),
    refreshToken: opaqueRefreshToken,
  });
  let refreshedWith;
  let signed = false;
  wallet.refreshJwtToken = async (refreshToken) => { refreshedWith = refreshToken; };
  wallet.getNewJwtToken = async () => { signed = true; };

  await wallet.reloadJwtToken();

  assert.equal(refreshedWith, opaqueRefreshToken);
  assert.equal(signed, false);
});

test("never submits an opaque refresh token whose cached access token belongs to another wallet", async () => {
  const wallet = walletWithSession(session());
  wallet.jwt = session({
    subject: wallet.bech32Address,
    accessToken: token({ sub: "another-wallet", exp: now - 1 }),
    refreshToken: opaqueRefreshToken,
  });
  let refreshAttempted = false;
  let signed = false;
  wallet.refreshJwtToken = async () => { refreshAttempted = true; };
  wallet.getNewJwtToken = async () => { signed = true; };

  await wallet.reloadJwtToken();

  assert.equal(refreshAttempted, false);
  assert.equal(signed, true);
});

for (const status of [400, 401]) {
  test(`falls back to a fresh wallet signature when refresh is rejected with HTTP ${status}`, async () => {
    const wallet = walletWithSession(session());
    wallet.jwt = session({
      subject: wallet.bech32Address,
      accessToken: token({ sub: wallet.bech32Address, exp: now - 1 }),
    });
    let signed = false;
    wallet.refreshJwtToken = async () => {
      const error = new Error("refresh rejected");
      error.isAxiosError = true;
      error.response = { status };
      throw error;
    };
    wallet.getNewJwtToken = async () => { signed = true; };

    await wallet.reloadJwtToken();

    assert.equal(signed, true);
    assert.equal(wallet.jwt, undefined);
  });
}

const unusableRefreshTokens = [
  ["malformed", "not-a-jwt"],
  ["expired", (subject) => token({ typ: "rt+jwt", sub: subject, exp: now - 1, tokenUse: "refreshToken" })],
  ["wrong type", (subject) => token({ typ: "at+jwt", sub: subject, tokenUse: "accessToken" })],
  ["wrong subject", () => token({ typ: "rt+jwt", sub: "another-wallet", tokenUse: "refreshToken" })],
];

for (const [description, makeRefreshToken] of unusableRefreshTokens) {
  test(`skips an unusable ${description} refresh token and starts fresh signing`, async () => {
    const wallet = walletWithSession(session());
    const refreshToken = typeof makeRefreshToken === "function"
      ? makeRefreshToken(wallet.bech32Address)
      : makeRefreshToken;
    wallet.jwt = session({
      subject: wallet.bech32Address,
      accessToken: token({ sub: wallet.bech32Address, exp: now - 1 }),
      refreshToken,
    });
    let refreshAttempted = false;
    let signed = false;
    wallet.refreshJwtToken = async () => { refreshAttempted = true; };
    wallet.getNewJwtToken = async () => {
      assert.equal(wallet.jwt, undefined);
      signed = true;
    };

    await wallet.reloadJwtToken();

    assert.equal(refreshAttempted, false);
    assert.equal(signed, true);
  });
}

test("does not prompt for signing when refresh fails transiently", async () => {
  const wallet = walletWithSession(session());
  wallet.jwt = session({
    subject: wallet.bech32Address,
    accessToken: token({ sub: wallet.bech32Address, exp: now - 1 }),
  });
  const outage = new Error("service unavailable");
  outage.isAxiosError = true;
  outage.response = { status: 503 };
  wallet.refreshJwtToken = async () => { throw outage; };
  let signed = false;
  wallet.getNewJwtToken = async () => { signed = true; };

  await assert.rejects(wallet.reloadJwtToken(), outage);
  assert.equal(signed, false);
  assert.notEqual(wallet.jwt, undefined);
});

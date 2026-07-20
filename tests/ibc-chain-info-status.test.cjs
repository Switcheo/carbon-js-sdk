/* eslint-disable @typescript-eslint/no-require-imports */
/* global __dirname, require */
const assert = require("node:assert/strict");
const path = require("node:path");
const test = require("node:test");

const projectRoot = path.resolve(__dirname, "..");
const { IBCModule } = require(path.join(projectRoot, "lib/index.js"));

const directoryUrl = "https://chains.cosmos.directory/";
const keplrPrefix = "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/cosmos/";
const chainRegistryPrefix = "https://raw.githubusercontent.com/cosmos/chain-registry/master/";

function jsonResponse(body, status = 200) {
  return {
    ok: status >= 200 && status < 300,
    status,
    async json() {
      return body;
    },
  };
}

function unparseableErrorResponse(status) {
  return {
    ok: false,
    status,
    async json() {
      throw new Error(`HTTP ${status} response must not be parsed`);
    },
  };
}

function chainInfo(chainId, chainName = chainId) {
  return {
    rpc: `https://rpc.${chainId}`,
    rest: `https://rest.${chainId}`,
    chainId,
    chainName,
    bip44: { coinType: 118 },
    bech32Config: {
      bech32PrefixAccAddr: "cosmos",
      bech32PrefixAccPub: "cosmospub",
      bech32PrefixValAddr: "cosmosvaloper",
      bech32PrefixValPub: "cosmosvaloperpub",
      bech32PrefixConsAddr: "cosmosvalcons",
      bech32PrefixConsPub: "cosmosvalconspub",
    },
    stakeCurrency: {
      coinDenom: "ATOM",
      coinMinimalDenom: "uatom",
      coinDecimals: 6,
    },
    currencies: [],
    feeCurrencies: [],
    features: ["ibc-transfer"],
  };
}

const carbonChainInfo = chainInfo("carbon-1", "Carbon");

function chainSummary(chainId, status, chainName = chainId.replace(/-\d+$/, "")) {
  return {
    chain_id: chainId,
    chain_name: chainName,
    status,
    best_apis: { rpc: [], rest: [] },
  };
}

function ibcBridge(chainId, enabled = true) {
  return {
    name: `${chainId} via IBC`,
    bridgeId: { toNumber: () => 2 },
    chainId: { toNumber: () => 33 },
    bridgeName: "IBC",
    chainName: chainId,
    enabled,
    bridgeAddresses: [],
    chain_id_name: chainId,
    channels: {
      src_channel: "channel-32",
      dst_channel: "channel-279",
      port_id: "transfer",
    },
  };
}

function sdkProvider(bridges) {
  const tokenClient = {
    bridges: { polynetwork: [], ibc: bridges, axelar: [] },
    tokenForDenom() {
      return undefined;
    },
    geckoTokenNames: {},
  };
  return {
    tokenClient,
    provider: {
      getTokenClient() {
        return tokenClient;
      },
      getConfig() {
        return {
          Bech32Prefix: "swth",
          chainId: "carbon-1",
          network: "mainnet",
          restUrl: "https://api.carbon.network",
          tmRpcUrl: "https://tm-api.carbon.network",
        };
      },
      query: {
        fee: {
          async MinGasPriceAll() {
            return { minGasPrices: [] };
          },
        },
      },
    },
  };
}

async function withFetch(t, responses, run) {
  const originalFetch = globalThis.fetch;
  const requestedUrls = [];
  globalThis.fetch = async (input) => {
    const url = String(input);
    requestedUrls.push(url);
    const response = responses[url];
    assert.ok(response, `unexpected fetch: ${url}`);
    return typeof response === "function" ? response() : response;
  };
  t.after(() => {
    globalThis.fetch = originalFetch;
  });
  return run(requestedUrls);
}

function baseResponses(chains) {
  return {
    [directoryUrl]: jsonResponse({ chains }),
    [`${keplrPrefix}carbon.json`]: jsonResponse(carbonChainInfo),
  };
}

test("a registry-killed chain skips Keplr while preserving the enabled on-chain bridge", { concurrency: false }, async (t) => {
  const bridge = ibcBridge("stargaze-1", true);
  const { provider, tokenClient } = sdkProvider([bridge]);
  const module = new IBCModule(provider);

  await withFetch(t, baseResponses([chainSummary("stargaze-1", "killed", "stargaze")]), async (requestedUrls) => {
    const result = await module.getChainInfoMap();

    assert.equal(requestedUrls.includes(`${keplrPrefix}stargaze.json`), false);
    assert.equal(tokenClient.bridges.ibc.length, 1);
    assert.equal(tokenClient.bridges.ibc[0], bridge);
    assert.equal(tokenClient.bridges.ibc[0].enabled, true);
    assert.equal(result["stargaze-1"].registryStatus, "killed");
    assert.equal(result["stargaze-1"].isTransferAvailable, false);
    assert.equal(result["stargaze-1"].chainId, "stargaze-1");
    assert.equal(result["stargaze-1"].rpc, "");
    assert.equal(result["stargaze-1"].rest, "");
    assert.deepEqual(result["stargaze-1"].feeCurrencies, []);
    assert.deepEqual(result["stargaze-1"].features, []);
  });
});

test("a killed chain omitted by Cosmos Directory checks Chain Registry status before Keplr", { concurrency: false }, async (t) => {
  const { provider } = sdkProvider([ibcBridge("omniflixhub-1")]);
  const module = new IBCModule(provider);
  const responses = {
    ...baseResponses([]),
    [`${chainRegistryPrefix}omniflixhub/chain.json`]: jsonResponse({
      chain_id: "omniflixhub-1",
      chain_name: "omniflixhub",
      status: "killed",
    }),
  };

  await withFetch(t, responses, async (requestedUrls) => {
    const result = await module.getChainInfoMap();

    assert.equal(requestedUrls.includes(`${keplrPrefix}omniflixhub.json`), false);
    assert.equal(result["omniflixhub-1"].registryStatus, "killed");
    assert.equal(result["omniflixhub-1"].isTransferAvailable, false);
  });
});

test("a killed chain without embedded metadata remains explicitly unavailable", { concurrency: false }, async (t) => {
  const chainId = "retireddynamic-1";
  const bridge = ibcBridge(chainId, true);
  bridge.chainName = "Retired Dynamic";
  const { provider, tokenClient } = sdkProvider([bridge]);
  const module = new IBCModule(provider);
  const responses = {
    ...baseResponses([]),
    [`${chainRegistryPrefix}retireddynamic/chain.json`]: jsonResponse({
      chain_id: chainId,
      chain_name: "retireddynamic",
      pretty_name: "Retired Dynamic",
      status: "killed",
      slip44: 118,
      bech32_prefix: "retired",
      staking: { staking_tokens: [{ denom: "uretired" }] },
    }),
  };

  await withFetch(t, responses, async (requestedUrls) => {
    const result = await module.getChainInfoMap();

    assert.equal(requestedUrls.includes(`${keplrPrefix}retireddynamic.json`), false);
    assert.equal(tokenClient.bridges.ibc[0], bridge);
    assert.equal(tokenClient.bridges.ibc[0].enabled, true);
    assert.ok(result[chainId]);
    assert.equal(result[chainId].chainId, chainId);
    assert.equal(result[chainId].chainName, "Retired Dynamic");
    assert.equal(result[chainId].registryStatus, "killed");
    assert.equal(result[chainId].isTransferAvailable, false);
    assert.deepEqual(result[chainId].bestRpcs, []);
  });
});

test("a live chain with Keplr metadata remains transferable", { concurrency: false }, async (t) => {
  const { provider } = sdkProvider([ibcBridge("osmosis-1")]);
  const module = new IBCModule(provider);
  const responses = {
    ...baseResponses([chainSummary("osmosis-1", "live", "osmosis")]),
    [`${keplrPrefix}osmosis.json`]: jsonResponse(chainInfo("osmosis-1", "Osmosis")),
  };

  await withFetch(t, responses, async (requestedUrls) => {
    const result = await module.getChainInfoMap();

    assert.equal(requestedUrls.includes(`${keplrPrefix}osmosis.json`), true);
    assert.equal(result["osmosis-1"].chainName, "Osmosis");
    assert.equal(result["osmosis-1"].registryStatus, "live");
    assert.equal(result["osmosis-1"].isTransferAvailable, true);
  });
});

test("a live chain missing from Keplr falls back to Cosmos Chain Registry", { concurrency: false }, async (t) => {
  const { provider } = sdkProvider([ibcBridge("fallback-1")]);
  const module = new IBCModule(provider);
  const registryChain = {
    chain_id: "fallback-1",
    chain_name: "fallback",
    status: "live",
    pretty_name: "Fallback Chain",
    slip44: 118,
    bech32_prefix: "fallback",
    staking: { staking_tokens: [{ denom: "ufallback" }] },
    fees: { fee_tokens: [{ denom: "ufallback", low_gas_price: 0.01, average_gas_price: 0.025, high_gas_price: 0.04 }] },
    apis: {
      rpc: [{ address: "https://rpc.fallback" }],
      rest: [{ address: "https://rest.fallback" }],
    },
  };
  const registryAssets = {
    assets: [{
      base: "ufallback",
      denom_units: [{ denom: "ufallback", exponent: 0 }, { denom: "fallback", exponent: 6 }],
      coingecko_id: "fallback",
    }],
  };
  const responses = {
    ...baseResponses([chainSummary("fallback-1", "live", "fallback")]),
    [`${keplrPrefix}fallback.json`]: unparseableErrorResponse(404),
    [`${chainRegistryPrefix}fallback/chain.json`]: jsonResponse(registryChain),
    [`${chainRegistryPrefix}fallback/assetlist.json`]: jsonResponse(registryAssets),
  };

  await withFetch(t, responses, async () => {
    const result = await module.getChainInfoMap();

    assert.equal(result["fallback-1"].chainId, "fallback-1");
    assert.equal(result["fallback-1"].stakeCurrency.coinMinimalDenom, "ufallback");
    assert.equal(result["fallback-1"].registryStatus, "live");
    assert.equal(result["fallback-1"].isTransferAvailable, true);
  });
});

test("an explicit unknown registry status is not treated as killed", { concurrency: false }, async (t) => {
  const { provider } = sdkProvider([ibcBridge("unknownstatus-1")]);
  const module = new IBCModule(provider);
  const responses = {
    ...baseResponses([chainSummary("unknownstatus-1", "unknown", "unknownstatus")]),
    [`${keplrPrefix}unknownstatus.json`]: jsonResponse(chainInfo("unknownstatus-1", "Unknown Status")),
  };

  await withFetch(t, responses, async (requestedUrls) => {
    const result = await module.getChainInfoMap();

    assert.equal(requestedUrls.includes(`${keplrPrefix}unknownstatus.json`), true);
    assert.equal(result["unknownstatus-1"].registryStatus, "unknown");
    assert.equal(result["unknownstatus-1"].isTransferAvailable, true);
  });
});

test("missing registry status is not treated as killed", { concurrency: false }, async (t) => {
  const { provider } = sdkProvider([ibcBridge("unknown-1")]);
  const module = new IBCModule(provider);
  const responses = {
    ...baseResponses([]),
    [`${chainRegistryPrefix}unknown/chain.json`]: unparseableErrorResponse(404),
    [`${keplrPrefix}unknown.json`]: jsonResponse(chainInfo("unknown-1", "Unknown but available")),
  };

  await withFetch(t, responses, async (requestedUrls) => {
    const result = await module.getChainInfoMap();

    assert.equal(requestedUrls.includes(`${keplrPrefix}unknown.json`), true);
    assert.equal(result["unknown-1"].registryStatus, undefined);
    assert.equal(result["unknown-1"].isTransferAvailable, true);
  });
});

test("the Carbon registry response is checked before parsing", { concurrency: false }, async (t) => {
  const { provider } = sdkProvider([]);
  const module = new IBCModule(provider);
  let parsed = false;
  const responses = {
    [directoryUrl]: jsonResponse({ chains: [] }),
    [`${keplrPrefix}carbon.json`]: {
      ok: false,
      status: 503,
      async json() {
        parsed = true;
        return carbonChainInfo;
      },
    },
  };

  await withFetch(t, responses, async () => {
    const result = await module.getChainInfoMap();
    assert.equal(parsed, false);
    assert.equal(result["carbon-1"].chainId, "carbon-1");
  });
});

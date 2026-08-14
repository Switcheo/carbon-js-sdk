/* eslint-disable @typescript-eslint/no-require-imports */
/* global __dirname, require */
const assert = require("node:assert/strict");
const path = require("node:path");
const test = require("node:test");

const projectRoot = path.resolve(__dirname, "..");
const { IBCModule } = require(path.join(projectRoot, "lib/index.js"));
const {
  CarbonIbcLifecycleStatus,
  CarbonSupportedIbcChainIds,
  ChainIds,
  EmbedChainInfosInit,
  getCarbonIbcLifecycleStatus,
  ibcWhitelist,
  swthChannels,
} = require(path.join(projectRoot, "lib/constant/index.js"));

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

test("the Carbon support policy is the single source for transfer whitelisting", () => {
  assert.deepEqual(CarbonSupportedIbcChainIds, [
    ChainIds.Axelar,
    ChainIds.Osmosis,
    ChainIds.Noble,
  ]);
  assert.deepEqual(ibcWhitelist, CarbonSupportedIbcChainIds);
  assert.deepEqual(Object.keys(swthChannels), CarbonSupportedIbcChainIds);
  assert.equal(Object.keys(EmbedChainInfosInit).every((chainId) => ibcWhitelist.includes(chainId)), true);
  assert.equal(ibcWhitelist.includes(ChainIds.Evmos), false);
  assert.equal(EmbedChainInfosInit[ChainIds.Evmos], undefined);
  assert.equal(swthChannels[ChainIds.Evmos], undefined);
  for (const inheritedKey of ["toString", "constructor", "__proto__"]) {
    assert.equal(
      getCarbonIbcLifecycleStatus(inheritedKey),
      CarbonIbcLifecycleStatus.Deprecated,
      `${inheritedKey} must not bypass exact-chain-ID matching`,
    );
  }
});

test("Carbon-deprecated Evmos stays unavailable when registry metadata is missing", { concurrency: false }, async (t) => {
  const { provider, tokenClient } = sdkProvider([ibcBridge("evmos_9001-2", true)]);
  const module = new IBCModule(provider);

  await withFetch(t, baseResponses([]), async (requestedUrls) => {
    const result = await module.getChainInfoMap();
    const evmos = result["evmos_9001-2"];

    assert.equal(tokenClient.bridges.ibc[0].enabled, true);
    assert.equal(evmos.carbonLifecycleStatus, CarbonIbcLifecycleStatus.Deprecated);
    assert.equal(evmos.isTransferAvailable, false);
    assert.equal(evmos.chainId, "evmos_9001-2");
    assert.equal(requestedUrls.some((url) => url.includes("/evmos_9001/")), false);
    assert.equal(requestedUrls.some((url) => url.includes("/evmos/chain.json")), false);
    assert.equal(requestedUrls.some((url) => url.includes("/cosmos/evmos")), false);
  });
});

test("canonical killed status and Carbon deprecation both keep Evmos unavailable", { concurrency: false }, async (t) => {
  const { provider } = sdkProvider([ibcBridge("evmos_9001-2", true)]);
  const module = new IBCModule(provider);

  await withFetch(t, baseResponses([chainSummary("evmos_9001-2", "killed", "evmos")]), async () => {
    const evmos = (await module.getChainInfoMap())["evmos_9001-2"];

    assert.equal(evmos.registryStatus, "killed");
    assert.equal(evmos.carbonLifecycleStatus, CarbonIbcLifecycleStatus.Deprecated);
    assert.equal(evmos.isTransferAvailable, false);
  });
});

test("Carbon deprecation wins even if a remote registry reports a live chain", { concurrency: false }, async (t) => {
  const { provider } = sdkProvider([ibcBridge("evmos_9001-2", true)]);
  const module = new IBCModule(provider);

  await withFetch(t, baseResponses([chainSummary("evmos_9001-2", "live", "evmos")]), async () => {
    const evmos = (await module.getChainInfoMap())["evmos_9001-2"];

    assert.equal(evmos.registryStatus, "live");
    assert.equal(evmos.carbonLifecycleStatus, CarbonIbcLifecycleStatus.Deprecated);
    assert.equal(evmos.isTransferAvailable, false);
  });
});

test("an active supported revisioned chain uses maintained canonical registry identity", { concurrency: false }, async (t) => {
  const { provider } = sdkProvider([ibcBridge("axelar-dojo-1", true)]);
  const module = new IBCModule(provider);
  const responses = {
    ...baseResponses([]),
    [`${chainRegistryPrefix}axelar/chain.json`]: jsonResponse({
      chain_id: "axelar-dojo-1",
      chain_name: "axelar",
      status: "live",
    }),
    [`${keplrPrefix}axelar.json`]: jsonResponse(chainInfo("axelar-dojo-1", "Axelar")),
  };

  await withFetch(t, responses, async (requestedUrls) => {
    const axelar = (await module.getChainInfoMap())["axelar-dojo-1"];

    assert.equal(axelar.carbonLifecycleStatus, CarbonIbcLifecycleStatus.Supported);
    assert.equal(axelar.isTransferAvailable, true);
    assert.equal(requestedUrls.includes(`${chainRegistryPrefix}axelar/chain.json`), true);
    assert.equal(requestedUrls.some((url) => url.includes("/axelar-dojo/")), false);
  });
});

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

test("a supported chain omitted by Cosmos Directory checks Chain Registry status before Keplr", { concurrency: false }, async (t) => {
  const { provider } = sdkProvider([ibcBridge("osmosis-1")]);
  const module = new IBCModule(provider);
  const responses = {
    ...baseResponses([]),
    [`${chainRegistryPrefix}osmosis/chain.json`]: jsonResponse({
      chain_id: "osmosis-1",
      chain_name: "osmosis",
      status: "killed",
    }),
  };

  await withFetch(t, responses, async (requestedUrls) => {
    const result = await module.getChainInfoMap();

    assert.equal(requestedUrls.includes(`${keplrPrefix}osmosis.json`), false);
    assert.equal(result["osmosis-1"].registryStatus, "killed");
    assert.equal(result["osmosis-1"].isTransferAvailable, false);
  });
});

test("a killed chain without embedded metadata remains explicitly unavailable", { concurrency: false }, async (t) => {
  const chainId = "noble-1";
  const bridge = ibcBridge(chainId, true);
  bridge.chainName = "Noble";
  const { provider, tokenClient } = sdkProvider([bridge]);
  const module = new IBCModule(provider);
  const responses = {
    ...baseResponses([]),
    [`${chainRegistryPrefix}noble/chain.json`]: jsonResponse({
      chain_id: chainId,
      chain_name: "noble",
      pretty_name: "Noble",
      status: "killed",
      slip44: 118,
      bech32_prefix: "noble",
      staking: { staking_tokens: [{ denom: "uusdc" }] },
    }),
  };

  await withFetch(t, responses, async (requestedUrls) => {
    const result = await module.getChainInfoMap();

    assert.equal(requestedUrls.includes(`${keplrPrefix}noble.json`), false);
    assert.equal(tokenClient.bridges.ibc[0], bridge);
    assert.equal(tokenClient.bridges.ibc[0].enabled, true);
    assert.ok(result[chainId]);
    assert.equal(result[chainId].chainId, chainId);
    assert.equal(result[chainId].chainName, "Noble");
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
  const { provider } = sdkProvider([ibcBridge("noble-1")]);
  const module = new IBCModule(provider);
  const registryChain = {
    chain_id: "noble-1",
    chain_name: "noble",
    status: "live",
    pretty_name: "Noble",
    slip44: 118,
    bech32_prefix: "noble",
    staking: { staking_tokens: [{ denom: "uusdc" }] },
    fees: { fee_tokens: [{ denom: "uusdc", low_gas_price: 0.01, average_gas_price: 0.025, high_gas_price: 0.04 }] },
    apis: {
      rpc: [{ address: "https://rpc.noble" }],
      rest: [{ address: "https://rest.noble" }],
    },
  };
  const registryAssets = {
    assets: [{
      base: "uusdc",
      denom_units: [{ denom: "uusdc", exponent: 0 }, { denom: "usdc", exponent: 6 }],
      coingecko_id: "usd-coin",
    }],
  };
  const responses = {
    ...baseResponses([chainSummary("noble-1", "live", "noble")]),
    [`${keplrPrefix}noble.json`]: unparseableErrorResponse(404),
    [`${chainRegistryPrefix}noble/chain.json`]: jsonResponse(registryChain),
    [`${chainRegistryPrefix}noble/assetlist.json`]: jsonResponse(registryAssets),
  };

  await withFetch(t, responses, async () => {
    const result = await module.getChainInfoMap();

    assert.equal(result["noble-1"].chainId, "noble-1");
    assert.equal(result["noble-1"].stakeCurrency.coinMinimalDenom, "uusdc");
    assert.equal(result["noble-1"].registryStatus, "live");
    assert.equal(result["noble-1"].isTransferAvailable, true);
  });
});

test("an explicit unknown registry status is not treated as killed", { concurrency: false }, async (t) => {
  const { provider } = sdkProvider([ibcBridge("osmosis-1")]);
  const module = new IBCModule(provider);
  const responses = {
    ...baseResponses([chainSummary("osmosis-1", "unknown", "osmosis")]),
    [`${keplrPrefix}osmosis.json`]: jsonResponse(chainInfo("osmosis-1", "Osmosis")),
  };

  await withFetch(t, responses, async (requestedUrls) => {
    const result = await module.getChainInfoMap();

    assert.equal(requestedUrls.includes(`${keplrPrefix}osmosis.json`), true);
    assert.equal(result["osmosis-1"].registryStatus, "unknown");
    assert.equal(result["osmosis-1"].isTransferAvailable, true);
  });
});

test("missing registry status is not treated as killed", { concurrency: false }, async (t) => {
  const { provider } = sdkProvider([ibcBridge("axelar-dojo-1")]);
  const module = new IBCModule(provider);
  const responses = {
    ...baseResponses([]),
    [`${chainRegistryPrefix}axelar/chain.json`]: unparseableErrorResponse(404),
    [`${keplrPrefix}axelar.json`]: jsonResponse(chainInfo("axelar-dojo-1", "Axelar")),
  };

  await withFetch(t, responses, async (requestedUrls) => {
    const result = await module.getChainInfoMap();

    assert.equal(requestedUrls.includes(`${keplrPrefix}axelar.json`), true);
    assert.equal(result["axelar-dojo-1"].registryStatus, undefined);
    assert.equal(result["axelar-dojo-1"].isTransferAvailable, true);
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

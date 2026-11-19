/* eslint-disable @typescript-eslint/no-require-imports */
/* global require, EventTarget, CustomEvent */
const assert = require("node:assert/strict");
const test = require("node:test");
const { CarbonSDK, KeplrAccount, MetaMask, RainbowKitAccount } = require("../lib");
const { getCarbonEvmProvider, populateEvmTransactionDetails, populateUnsignedEvmTranscation } = require("../lib/util/ethermint");
const { Network } = require("../lib/constant/network");

function sdk(network, config) {
  return new CarbonSDK({ network, config, tmClient: {}, query: {} });
}

test("public presets keep Cosmos endpoints and require an explicit RPC for EVM transactions", async () => {
  for (const network of [Network.MainNet, Network.TestNet, Network.DevNet]) {
    const api = sdk(network);
    const config = api.getConfig();
    assert.ok(config.restUrl && config.grpcUrl && config.tmRpcUrl && config.tmWsUrl);
    assert.equal(config.evmJsonRpcUrl, undefined);
    assert.equal(config.evmWsUrl, undefined);
    assert.throws(() => getCarbonEvmProvider(api), /Configure evmJsonRpcUrl/);
    await assert.rejects(populateEvmTransactionDetails(api, {}), /Configure evmJsonRpcUrl/);
    await assert.rejects(populateUnsignedEvmTranscation(api, {}), /Configure evmJsonRpcUrl/);
    for (const wallet of [MetaMask, RainbowKitAccount]) {
      const params = wallet.getNetworkParams(network, "Carbon");
      assert.equal(Number(params.chainId), wallet.getRequiredChainId(network, "Carbon"));
      assert.equal(params.rpcUrls, undefined);
      assert.equal(params.blockExplorerUrls, undefined);
    }
  }
});

test("a local or explicitly configured EVM node is scoped to the chosen network", () => {
  const local = sdk(Network.LocalHost);
  assert.equal(getCarbonEvmProvider(local).connection.url, "http://localhost:8545/");
  assert.equal(local.getConfig().evmWsUrl, "ws://localhost:8546/");
  const url = "https://rpc.example.org/";
  const api = sdk(Network.MainNet, { evmJsonRpcUrl: url, evmWsUrl: "wss://rpc.example.org/" });
  assert.equal(getCarbonEvmProvider(api).connection.url, url);
  assert.equal(api.getConfig().evmWsUrl, "wss://rpc.example.org/");
  assert.throws(() => getCarbonEvmProvider(sdk(Network.MainNet, { evmJsonRpcUrl: "  " })), /Configure evmJsonRpcUrl/);
  for (const wallet of [MetaMask, RainbowKitAccount]) {
    assert.deepEqual(wallet.getCarbonEvmNetworkParams(), wallet.getCarbonEvmNetworkParams(Network.MainNet));
    assert.deepEqual(wallet.getNetworkParams(Network.LocalHost, "Carbon").rpcUrls, ["http://localhost:8545/"]);
    assert.deepEqual(wallet.getNetworkParams(Network.MainNet, "Carbon", api.getConfig()).rpcUrls, [url]);
    assert.equal(wallet.getNetworkParams(Network.TestNet, "Carbon", api.getConfig()).rpcUrls, undefined);
    assert.deepEqual(wallet.getNetworkParams(Network.MainNet, "Ethereum", api.getConfig()), wallet.getNetworkParams(Network.MainNet, "Ethereum"));
  }
});

test("Keplr retains Cosmos signing information and uses the SDK's EVM endpoint", async (t) => {
  const registry = {
    chainId: "carbon-1", rpc: "https://cosmos.example.org/", features: ["eth-key-sign"],
    evm: { chainId: 9790, rpc: "https://obsolete.example.org/" },
  };
  t.mock.method(require("../lib/util/fetch"), "fetch", async () => ({ ok: true, json: async () => registry }));
  const { evm: _old, ...cosmos } = registry;
  assert.deepEqual(await KeplrAccount.getChainInfo(sdk(Network.MainNet)), cosmos);
  const url = "https://custom.example.org/";
  assert.deepEqual(await KeplrAccount.getChainInfo(sdk(Network.MainNet, { evmJsonRpcUrl: url })), {
    ...cosmos, evm: { chainId: 9790, rpc: url },
  });
  const dev = sdk(Network.DevNet);
  dev.query.fee = { MinGasPriceAll: async () => ({ minGasPrices: [] }) };
  const fallback = await KeplrAccount.getChainInfo(dev);
  assert.equal(fallback.chainId, dev.getConfig().chainId);
  assert.equal(fallback.rpc, dev.getConfig().tmRpcUrl);
  assert.equal(fallback.evm, undefined);
});

for (const Wallet of [MetaMask, RainbowKitAccount]) {
  test(Wallet.name + " switches known chains and only registers a configured unknown chain", async (t) => {
    let error;
    const methods = [];
    const provider = {
      async request({ method, params }) {
        if (method === "eth_chainId") return "0x1";
        methods.push({ method, params });
        if (method === "wallet_switchEthereumChain" && error) throw error;
      },
    };
    const browser = new EventTarget();
    const original = Object.getOwnPropertyDescriptor(globalThis, "window");
    Object.defineProperty(globalThis, "window", { configurable: true, value: browser });
    t.after(() => original ? Object.defineProperty(globalThis, "window", original) : delete globalThis.window);
    browser.addEventListener("eip6963:requestProvider", () => {
      browser.dispatchEvent(new CustomEvent("eip6963:announceProvider", {
        detail: { info: { name: "MetaMask", uuid: "test-wallet" }, provider },
      }));
    });
    const account = Wallet === MetaMask ? new Wallet(Network.MainNet) : new Wallet(provider);
    const change = (config) => account.changeNetworkIfRequired("Carbon", Network.MainNet, config);
    await change();
    assert.deepEqual(methods.map((m) => m.method), ["wallet_switchEthereumChain"]);
    methods.length = 0;
    error = Object.assign(new Error("unknown chain"), { code: 4902 });
    await assert.rejects(change(), /Configure evmJsonRpcUrl/);
    assert.deepEqual(methods.map((m) => m.method), ["wallet_switchEthereumChain"]);
    methods.length = 0;
    const url = "https://custom.example.org/";
    const config = sdk(Network.MainNet, { evmJsonRpcUrl: url }).getConfig();
    await change(config);
    assert.deepEqual(methods.map((m) => m.method), ["wallet_switchEthereumChain", "wallet_addEthereumChain"]);
    assert.deepEqual(methods[1].params[0].rpcUrls, [url]);
    methods.length = 0;
    error = Object.assign(new Error("switch cancelled"), { code: 4001 });
    await assert.rejects(change(config), (e) => e === error);
    assert.deepEqual(methods.map((m) => m.method), ["wallet_switchEthereumChain"]);
  });
}

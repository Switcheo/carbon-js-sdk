import * as BIP39 from "bip39";
import { CarbonSDK } from "./_sdk";
import { BigNumber } from "bignumber.js";
import Long from "long";
import "./_setup";

const TRPC_ENDPOINT = process.env.TRPC_ENDPOINT ?? "http://localhost:26657";

(async () => {
  const mnemonics = process.env.MNEMONICS ?? BIP39.generateMnemonic();
  console.log("mnemonics", mnemonics);

  const sdk = await CarbonSDK.instance({
    network: CarbonSDK.Network.LocalHost,
    config: {
      rpcURL: TRPC_ENDPOINT,
    },
  });
  const connectedSDK = await sdk.connectWithMnemonic(mnemonics);
  console.log("connected sdk");

  const result = await connectedSDK.market.update({
    name: "btc_z29",
    displayName: "BTCFUTURES",
    description: "futures market btc usd",
    minQuantity: new BigNumber(100000),
    makerFee: new BigNumber(0.002),
    takerFee: new BigNumber(0.002),
    riskStepSize: new BigNumber(1000),
    initialMarginBase: new BigNumber(0.001),
    initialMarginStep: new BigNumber(0.001),
    maintenanceMarginRatio: new BigNumber(0.001),
    maxLiquidationOrderTicket: new BigNumber(1000000000),
    maxLiquidationOrderDuration: {
      seconds: new Long(30)
    },
    impactSize: new BigNumber(1000000000),
    markPriceBand: 1000,
    lastPriceProtectedBand: 1000,
    isActive: true,
  })
  console.log(result)
})().catch(console.error).finally(() => process.exit(0));
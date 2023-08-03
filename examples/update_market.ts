import * as BIP39 from "bip39";
import { CarbonSDK } from "./_sdk";
import { BigNumber } from "bignumber.js";
import Long from "long";
import "./_setup";
import { Duration } from "../lib/codec/google/protobuf/duration";

(async () => {
  const mnemonics = process.env.MNEMONICS ?? BIP39.generateMnemonic();
  console.log("mnemonics", mnemonics);

  const sdk = await CarbonSDK.instance({
    network: CarbonSDK.Network.LocalHost,
    config: {
      tmRpcUrl: process.env.TRPC_ENDPOINT,
    },
  });
  const connectedSDK = await sdk.connectWithMnemonic(mnemonics);
  console.log("connected sdk");

  const result = await connectedSDK.market.update({
    name: "btc_z29",
    displayName: "BTCFUTURES",
    lotSize: new BigNumber(200),
    tickSize: new BigNumber(100),
    description: "futures market btc usd",
    minQuantity: new BigNumber(100000),
    makerFee: new BigNumber(0.002),
    takerFee: new BigNumber(0.002),
    riskStepSize: new BigNumber(1000),
    initialMarginBase: new BigNumber(0.001),
    initialMarginStep: new BigNumber(0.001),
    maintenanceMarginRatio: new BigNumber(0.001),
    maxLiquidationOrderTicket: new BigNumber(1000000000),
    maxLiquidationOrderDuration: Duration.fromPartial({
      seconds: Long.fromNumber(30),
    }),
    impactSize: new BigNumber(1000000000),
    markPriceBand: 1000,
    lastPriceProtectedBand: 1000,
    isActive: true,
    tradingBandwidth: 10000,
  })
  console.log(result)
})().catch(console.error).finally(() => process.exit(0));

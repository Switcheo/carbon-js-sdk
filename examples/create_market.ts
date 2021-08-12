import BigNumber from "bignumber.js";
import * as BIP39 from "bip39";
import { Duration } from "../lib/codec/google/protobuf/duration";
import { CarbonSDK } from "./_sdk";
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
  
  const result = await connectedSDK.admin.createMarket({
	name: "swth_eth2",
    displayName: "SwitcheoEth",
    description: "spot market swth eth",
    marketType: "spot",
    base: "swth",
    quote: "eth",
    lotSize: new BigNumber(100000),
    tickSize: new BigNumber(0.01),
    minQuantity: new BigNumber(100000),
    makerFee: new BigNumber(0.002),
    takerFee: new BigNumber(0.002),
    riskStepSize: new BigNumber(0),
    initialMarginBase: new BigNumber(1),
    initialMarginStep: new BigNumber(0),
    maintenanceMarginRatio: new BigNumber(0),
    maxLiquidationOrderTicket: new BigNumber(0),
    maxLiquidationOrderDuration: Duration.fromPartial({
        seconds: Long.fromNumber(0)
    }),
    impactSize: new BigNumber(0),
    markPriceBand: 0,
    lastPriceProtectedBand: 0,
    indexOracleId: "",
    expiryTime: new Date(""),
  })
  console.log(result)
})().catch(console.error).finally(() => process.exit(0));
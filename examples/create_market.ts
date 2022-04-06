import BigNumber from "bignumber.js";
import * as BIP39 from "bip39";
import { Duration } from "../lib/codec/google/protobuf/duration";
import { CarbonSDK } from "./_sdk";
import Long from "long";
import "./_setup";

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
  
  const base = "swth";
  const quote = "eth";
  const baseUSD = sdk.token.getUSDValue(base) ?? new BigNumber(0);
  const quoteUSD = sdk.token.getUSDValue(quote) ?? new BigNumber(0);

  const result = await connectedSDK.admin.createMarket({
    marketType: "spot",
    base,
    quote,
    currentBasePriceUsd: baseUSD,
    currentQuotePriceUsd: quoteUSD,
  })
  console.log(result).
})().catch(console.error).finally(() => process.exit(0));

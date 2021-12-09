import * as BIP39 from "bip39";
import { CarbonSDK } from "./_sdk";
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

  const marketsResult = await sdk.query.market.MarketAll({})
  console.log("markets", marketsResult.markets);

  if (!marketsResult.markets.length) {
    throw new Error("no markets found, create a market first");
  }
  const [market] = marketsResult.markets

  const result = await connectedSDK.order.cancelAll({
      market: market.name
  });
  console.log(result)
})().catch(console.error).finally(() => process.exit(0));

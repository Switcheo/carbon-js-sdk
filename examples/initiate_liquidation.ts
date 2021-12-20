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

  const result = await connectedSDK.broker.initiateLiquidation({
    positions: [
      {
        market: "btc_z29",
        address: "tswth1mw90en8tcqnvdjhp64qmyhuq4qasvhy2s6st4t"
      }
    ]
  })
  console.log(result)
})().catch(console.error).finally(() => process.exit(0));

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
  sdk.cdp

  const aaa = await sdk.cdp.getTotalAccountTokenDebt('tswth1pdlkkffn0dnwmjkekgtm4zcaq2d2a7qd3vjty3', 'eth')
  console.log("result", aaa);

})().catch(console.error).finally(() => process.exit(0));

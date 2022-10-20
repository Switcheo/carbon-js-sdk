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

  const aaa = await sdk.cdp.getAccountData("tswth1fxcpw7hjg4444sftx45e2yefmcad3np99faezs")
  if (!aaa) {
    return
  }
  console.log("result", JSON.stringify(aaa));

})().catch(console.error).finally(() => process.exit(0));

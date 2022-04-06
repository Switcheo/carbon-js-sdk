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
  
  const result = await connectedSDK.admin.setRewardCurve({
	  startTime: new Date(),
    initialRewardBps: 1000,
    reductionMultiplierBps: 100,
    reductionIntervalSeconds: 5000,
    reductions: 10,
    finalRewardBps: 500
  })
  console.log(result)
})().catch(console.error).finally(() => process.exit(0));

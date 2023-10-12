import * as BIP39 from "bip39";
import Long from "long";
import { CarbonSDK } from "./_sdk";
import "./_setup";

(async () => {
  const mnemonics = process.env.MNEMONICS ?? BIP39.generateMnemonic();
  console.log("mnemonics:", mnemonics);

  const sdk = await CarbonSDK.instance({
    network: CarbonSDK.Network.LocalHost,
    config: {
      tmRpcUrl: process.env.TRPC_ENDPOINT,
    },
  });
  const connectedSDK = await sdk.connectWithMnemonic(mnemonics);
  console.log("connected sdk");

  const result = await connectedSDK.p.withdrawFromPool({
      poolId: new Long(2),
      shareAmount: '10',
      minReceiveAmount: '1',
    });
  console.log(result)
})().catch(console.error).finally(() => process.exit(0));

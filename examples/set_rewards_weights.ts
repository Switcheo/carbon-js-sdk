import * as BIP39 from "bip39";
import { CarbonSDK } from "./_sdk";
import "./_setup";

(async () => {
  const mnemonics = process.env.MNEMONICS ?? BIP39.generateMnemonic();
  console.log("mnemonics", mnemonics);

  const sdk = await CarbonSDK.instance({
    network: CarbonSDK.Network.TestNet,
    config: {
      tmRpcUrl: process.env.TRPC_ENDPOINT,
    },
  });
  const connectedSDK = await sdk.connectWithMnemonic(mnemonics);
  console.log("connected sdk");

  const result = await connectedSDK.admin.setRewardsWeights([
    {
      poolId: 1,
      weight: 10,
    },
    {
      poolId: 2,
      weight: 10,
    },
    {
      poolId: 3,
      weight: 10,
    },
    {
      poolId: 4,
      weight: 10,
    },
    {
      poolId: 5,
      weight: 10,
    },
    {
      poolId: 6,
      weight: 10,
    },
  ])
  console.log(result)
})().catch(console.error).finally(() => process.exit(0));

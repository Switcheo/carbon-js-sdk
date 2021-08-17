import * as BIP39 from "bip39";
import { CarbonSDK } from "./_sdk";
import { BigNumber } from "bignumber.js";
import "./_setup";

(async () => {
  const mnemonics = process.env.MNEMONICS ?? BIP39.generateMnemonic();
  console.log("mnemonics", mnemonics);

  const sdk = await CarbonSDK.instance({
    network: CarbonSDK.Network.LocalHost,
    config: {
      rpcUrl: process.env.TRPC_ENDPOINT,
    },
  });
  const connectedSDK = await sdk.connectWithMnemonic(mnemonics);
  console.log("connected sdk");

  // create lp token
  // set rewards weight

  const result = await connectedSDK.lp.stakePoolToken({
    denom: "swth-50-eth-50-lp1",
    amount: new BigNumber(100),
    duration: 10,
  })
  console.log(result)
})().catch(console.error).finally(() => process.exit(0));

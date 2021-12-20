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
      tmRpcUrl: process.env.TRPC_ENDPOINT,
    },
  });
  const connectedSDK = await sdk.connectWithMnemonic(mnemonics);
  console.log("connected sdk");

  const result = await connectedSDK.lp.create({
    tokenADenom: "swth",
    tokenBDenom: "eth",
    tokenAWeight: new BigNumber(0.5), // human
    tokenBWeight: new BigNumber(0.5), // human
    swapFee: new BigNumber(0.002),
    numQuotes: 5,
  })
  console.log(result)
})().catch(console.error).finally(() => process.exit(0));

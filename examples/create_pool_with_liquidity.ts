import * as BIP39 from "bip39";
import Long from "long";
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

  const result = await connectedSDK.lp.createWithLiquidity({
    tokenADenom: "swth",
    tokenBDenom: "eth",
    tokenAWeight: new BigNumber(0.5), // human
    tokenBWeight: new BigNumber(0.5), // human
    amountA: new BigNumber(100), // human
    amountB: new BigNumber(100), // human
    swapFee: new BigNumber(0.002),
    ampBps: new Long(100000),
  })
  console.log(result)
})().catch(console.error).finally(() => process.exit(0));

import {BigNumber} from "bignumber.js";
import * as BIP39 from "bip39";
import { CarbonSDK } from "./_sdk";
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

  const result = await connectedSDK.coin.createWithdrawal({
    toAddress: "tswth1phsut994s4e9apdc25vdln02g9rz7exzw7j4nk",
    denom: "eth",
    amount: new BigNumber(1000), // human
    feeAmount: new BigNumber(10),
    feeAddress: "tswth1mw90en8tcqnvdjhp64qmyhuq4qasvhy2s6st4t",
  })
  console.log(result)
})().catch(console.error).finally(() => process.exit(0));

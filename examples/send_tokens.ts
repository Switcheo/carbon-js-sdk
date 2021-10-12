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

  const result = await connectedSDK.bank.sendTokens({
    fromAddress: connectedSDK.wallet.bech32Address,
    toAddress: "tswth1mw90en8tcqnvdjhp64qmyhuq4qasvhy2s6st4t",
    amount: [{
      amount: '1000',
      denom: "swth",
    }],
  })
  console.log(result)
})().catch(console.error).finally(() => process.exit(0));

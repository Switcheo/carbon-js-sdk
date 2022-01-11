import BigNumber from "bignumber.js";
import { CarbonSDK } from "./_sdk";
import "./_setup";

(async () => {
  const mnemonics = "absurd give grit arrow else sort visual lawn base adult pause segment"
  console.log("mnemonics", mnemonics);

  const sdk = await CarbonSDK.instance({
    network: CarbonSDK.Network.MainNet,
  });
  const connectedSDK = await sdk.connectWithMnemonic(mnemonics);
  console.log("connected sdk");

  const result = await connectedSDK.bank.sendTokens({
    fromAddress: connectedSDK.wallet.bech32Address,
    toAddress: "swth1jmh3cdvlfv3ql53yggy23gl04evxt6xkvu45d4",
    amount: [{
      amount: new BigNumber('10000').shiftedBy(8).toString(10),
      denom: "swth",
    }],
  })
  console.log(result)
})().catch(console.error).finally(() => process.exit(0));

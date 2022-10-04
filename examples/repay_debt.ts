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

  const ethToken = sdk.token.tokenForDenom("eth");
  if (!ethToken) return;

  const amount = new BigNumber(0.001).shiftedBy(ethToken.decimals.toNumber())

  await connectedSDK.cdp.borrowAsset({
    denom: "eth",
    amount: amount,
  });

  const result = await connectedSDK.cdp.repayAsset({
    denom: "eth",
    amount: amount,
  });
  console.log(result);
})().catch(console.error).finally(() => process.exit(0));

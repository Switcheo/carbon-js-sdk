import * as BIP39 from "bip39";
import { CarbonSDK } from "./_sdk";
import { BigNumber } from "bignumber.js";
import "./_setup";

(async () => {
  const mnemonics = process.env.MNEMONICS ?? BIP39.generateMnemonic();
  console.log("mnemonics", mnemonics);

  const sdk = await CarbonSDK.instance({
    network: CarbonSDK.Network.LocalHost,
    // config: {
    //   tmRpcUrl: process.env.TRPC_ENDPOINT,
    // },
  });
  const connectedSDK = await sdk.connectWithMnemonic(mnemonics);
  console.log("connected sdk");

  const ethToken = sdk.token.tokenForDenom("eth");
  const cdpEthToken = sdk.token.tokenForDenom("cdp/eth");
  if (!ethToken || !cdpEthToken) return;

  await connectedSDK.cdp.lockCollateral({
    cdpDenom: "eth",
    amount: new BigNumber(0.01).shiftedBy(ethToken.decimals.toNumber()), // human
  });

  const result = await connectedSDK.cdp.unlockCollateral({
    cdpDenom: cdpEthToken.denom,
    amount: new BigNumber(0.008).shiftedBy(cdpEthToken.decimals.toNumber()), // human
  });
  console.log("result", result);
})().catch(console.error).finally(() => process.exit(0));

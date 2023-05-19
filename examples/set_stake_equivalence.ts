import BigNumber from "bignumber.js";
import * as BIP39 from "bip39";
import { CarbonSDK } from "./_sdk";
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
 

  const result = await connectedSDK.market.setStakeEquivalence({
    setter: connectedSDK.wallet.bech32Address,
    stakeEquivalence: {
      denom: 'swth',
      ratio: new BigNumber(0.7),
    }
  });

  console.log('result:', result)


})().catch(console.error).finally(() => process.exit(0));

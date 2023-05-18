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
  const feeCategory = {
    marketType: 'spot',
    marketId: '',
    whitelistedAddress: ''
  }

  const result = await connectedSDK.market.removeFeeTier({
    remover: connectedSDK.wallet.bech32Address,
    feeCategory,
    requiredStake: '5',
  });
  
  console.log('result:',result)


})().catch(console.error).finally(() => process.exit(0));

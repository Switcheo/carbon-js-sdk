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

  const result = await connectedSDK.admin.createToken({
    creator: sdk?.wallet?.bech32Address || '',
    name: "Tether-USD",
    symbol: "USDT",
    decimals: 6,
    chainId: 2,
    bridgeId: 1,
    bridgeAddress: '0000000000000000000000000000000000000000',
    tokenAddress: '6EE856Ae55B6E1A249f04cd3b947141bc146273c'.toLowerCase(),
  });
  console.log(result);
})().catch(console.error).finally(() => process.exit(0));

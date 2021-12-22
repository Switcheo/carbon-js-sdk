import BigNumber from "bignumber.js";
import * as BIP39 from "bip39";
import { CarbonSDK } from "./_sdk";
import "./_setup";

(async () => {
  const mnemonics = process.env.MNEMONICS ?? BIP39.generateMnemonic();
  console.log("mnemonics", mnemonics);

  const sdk = await CarbonSDK.instance({
    network: CarbonSDK.Network.TestNet,
    config: {
      tmRpcUrl: process.env.TRPC_ENDPOINT,
    },
  });
  const connectedSDK = await sdk.connectWithMnemonic(mnemonics);
  console.log("connected sdk");

  const result = await connectedSDK.admin.createToken({
    creator: sdk?.wallet?.bech32Address || '',
    name: "ETH (ERC20)",
    symbol: "ETH",
    decimals: 18,
    chainId: 2,
    bridgeId: 1,
    bridgeAddress: '91f453851e297524749a740d53cf54a89231487c',
    tokenAddress: '0000000000000000000000000000000000000000',
  })
  console.log(result)
})().catch(console.error).finally(() => process.exit(0));

import * as BIP39 from "bip39";
import { CarbonSDK } from "./_sdk";
import "./_setup";

(async () => {
  const mnemonics = process.env.MNEMONICS ?? BIP39.generateMnemonic();
  console.log("mnemonics", mnemonics);

  const sdk = await CarbonSDK.instance({
    network: CarbonSDK.Network.MainNet,
  });
  const connectedSDK = await sdk.connectWithMnemonic(mnemonics);
  console.log("connected sdk");

  // const result = await connectedSDK.admin.createToken({
  //   creator: sdk?.wallet?.bech32Address || '',
  //   name: "Zilliqa-bridged BRKL",
  //   symbol: "zBRKL",
  //   decimals: 18,
  //   chainId: 18,
  //   bridgeId: 1,
  //   bridgeAddress: 'd73c6b871b4d0e130d64581993b745fc938a5be7',
  //   tokenAddress: '32339fa037f7ae1dfff25e13c6451a80289d61f4'.toLowerCase(),
  // })

  const result = await connectedSDK.admin.createToken({
    creator: sdk?.wallet?.bech32Address || '',
    name: "Brokoli Network",
    symbol: "BRKL",
    decimals: 18,
    chainId: 2,
    bridgeId: 1,
    bridgeAddress: '9a016ce184a22dbf6c17daa59eb7d3140dbd1c54',
    tokenAddress: '4674a4F24C5f63D53F22490Fb3A08eAAAD739ff8'.toLowerCase(),
  })
  console.log(result)
})().catch(console.error).finally(() => process.exit(0));

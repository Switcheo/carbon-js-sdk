import * as BIP39 from "bip39";
import { CarbonSDK } from "./_sdk";
import "./_setup";

(async () => {
  const mnemonics = process.env.MNEMONICS ?? BIP39.generateMnemonic();
  console.log("mnemonics:", mnemonics);

  const sdk = await CarbonSDK.instance({
    network: CarbonSDK.Network.LocalHost,
    config: {
      tmRpcUrl: process.env.TRPC_ENDPOINT,
    },
  });
  const connectedSDK = await sdk.connectWithMnemonic(mnemonics);
  console.log("connected sdk");

  const result = await connectedSDK.perpspool.createPerpertualsPool({
      name: 'USD Perp Pool 5',
      depositDenom: 'usdc',
      shareTokenSymbol: 'testUSD',
      supplyCap: '1000000000000000000000000',
      depositFee: '0.1',
      withdrawalFee: '0.1',
      borrowFee: '0.1',
    });
  console.log(result)
})().catch(console.error).finally(() => process.exit(0));

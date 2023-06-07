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

  const result = await connectedSDK.plp.createPerpertualsPool({
      name: 'USD Perp Pool 5',
      depositDenom: 'usdc',
      shareTokenSymbol: 'testUSD',
      supplyCap: '1000000000000000000000000',
      depositFeeBps: '1000',
      withdrawalFeeBps: '1000',
      borrowFeeBps: '1500',
    });
  console.log(result)
})().catch(console.error).finally(() => process.exit(0));

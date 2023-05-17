import * as BIP39 from "bip39";
import { CarbonSDK } from "./_sdk";
import "./_setup";

(async () => {
  const mnemonics = process.env.MNEMONICS ?? BIP39.generateMnemonic();
  console.log("mnemonics:", mnemonics);

  const sdk = await CarbonSDK.instance({
    network: CarbonSDK.Network.DevNet,
    config: {
      tmRpcUrl: process.env.TRPC_ENDPOINT,
    },
  });
  const connectedSDK = await sdk.connectWithMnemonic(mnemonics);
  console.log("connected sdk");

  const result = await connectedSDK.vault.createPerpertualsPool({
      creator: connectedSDK.wallet.bech32Address,
      name: 'USD Perp Pool 2',
      depositDenom: 'cgusd',
      shareTokenSymbol: 'testUSD',
      supplyCap: '1000000000000000000000000',
      depositFeeBps: '1000',
      withdrawalFeeBps: '1000',
    });
  console.log(result)
})().catch(console.error).finally(() => process.exit(0));

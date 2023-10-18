import * as BIP39 from "bip39";
import Long from "long";
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

  const result = await connectedSDK.p.updatePerpetualsPool({
      name: 'USD Perp Pool 3',
      poolId: new Long(3),
      depositDenom: 'cgusd',
      shareTokenSymbol: 'testUSD2',
      supplyCap: new Long(10000000000000000000000000000),
      depositFeeBps: new Long(1000),
      withdrawalFeeBps: new Long(1000),
    });
  console.log(result)
})().catch(console.error).finally(() => process.exit(0));

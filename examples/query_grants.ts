
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

  const queryParams = {
    granter: connectedSDK.wallet.bech32Address,
    grantee: '',
  }
  const queryResult = await connectedSDK.signless.queryGranteeDetails(queryParams);
  console.log(queryResult)
})().catch(console.error).finally(() => process.exit(0));

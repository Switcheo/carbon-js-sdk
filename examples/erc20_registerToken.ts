import * as BIP39 from "bip39";
import { CarbonTx, CarbonSDK, Models } from "./_sdk";
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
  const wallet = connectedSDK.wallet;

  const value = Models.MsgRegisterToken.fromPartial({
    creator: wallet.bech32Address,
    denom: 'cplt/1',
  })

  const result =  await wallet.sendTx(
    {
      typeUrl: CarbonTx.Types.MsgRegisterToken,
      value,
    },
  );
  console.log(result)
})().catch(console.error).finally(() => process.exit(0));

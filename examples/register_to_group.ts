import * as BIP39 from "bip39";
import { MsgRegisterToGroup } from "../lib/codec";
import { CarbonSDK, CarbonTx } from "./_sdk";
import "./_setup";

(async () => {
  const mnemonics = process.env.MNEMONICS ?? BIP39.generateMnemonic();
  console.log("mnemonics:", mnemonics);

  // const sdk = await CarbonSDK.instanceWithMnemonic(mnemonics, {
  //   network: CarbonSDK.Network.LocalHost,
  // });

  const sdk = await CarbonSDK.instance({
    network: CarbonSDK.Network.LocalHost,
    config: {
      tmRpcUrl: process.env.TRPC_ENDPOINT,
    },
  });
  const connectedSDK = await sdk.connectWithMnemonic(mnemonics);
  console.log("connected sdk");

  const result = await connectedSDK.wallet.sendTxs([{
    typeUrl: CarbonTx.Types.MsgRegisterToGroup,
    value: MsgRegisterToGroup.fromPartial({
      creator: connectedSDK.wallet.bech32Address,
      groupId: '1',
      denom: 'usdc',
    }),
  }]);

  console.log(result);

})().catch(console.error).finally(() => process.exit(0));

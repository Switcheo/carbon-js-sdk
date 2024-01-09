import * as BIP39 from "bip39";
import { MsgGrantAllowance } from "../lib/codec/cosmos/feegrant/v1beta1/tx";
import { AllowedMsgAllowance, BasicAllowance } from "../lib/codec/cosmos/feegrant/v1beta1/feegrant";
import { CarbonSDK, CarbonTx } from "./_sdk";
import { SignlessTypes } from "../src/provider/amino/types/signless"
import "./_setup";

(async () => {
  const mnemonics = 'evolve sentence there pet make usual shaft cruise unique fitness drastic ahead';
  console.log("mnemonics", mnemonics);

  const sdk = await CarbonSDK.instance({
    network: CarbonSDK.Network.DevNet,
  });
  const connectedSDK = await sdk.connectWithMnemonic(mnemonics);
  console.log("connected sdk");
  const encodedAllowanceMsg = [{
    typeUrl: CarbonTx.Types.MsgGrantAllowance,
    value: MsgGrantAllowance.fromPartial({
      granter: connectedSDK.wallet.bech32Address,
      grantee: "swth1lp5tsyq623gxd0q496v5u8jrvpfgu2lcks6zun",
      allowance: {
        typeUrl: SignlessTypes.AllowedMsgAllowance,
        value: AllowedMsgAllowance.encode(AllowedMsgAllowance.fromPartial({
          allowance: {
            typeUrl: SignlessTypes.BasicAllowance,
            value: BasicAllowance.encode(BasicAllowance.fromPartial({
              expiration: new Date(17071278100000),
            })).finish(),
          },
          allowedMessages: [CarbonTx.Types.MsgExec],
        })).finish(),
      },
    }),
  }]
  const result = await connectedSDK.wallet.sendTxs(encodedAllowanceMsg)

  console.log('result:', result)


})().catch(console.error).finally(() => process.exit(0));

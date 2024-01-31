import * as BIP39 from "bip39";
import { MsgGrantAllowance } from "../lib/codec/cosmos/feegrant/v1beta1/tx";
import { AllowedMsgAllowance, BasicAllowance } from "../lib/codec/cosmos/feegrant/v1beta1/feegrant";
import { CarbonSDK, CarbonTx } from "./_sdk";
import { GrantTypes } from "../src/provider/amino/types/grant"
import "./_setup";

(async () => {
  const mnemonics = process.env.MNEMONICS ?? BIP39.generateMnemonic();;
  console.log("mnemonics", mnemonics);

  const sdk = await CarbonSDK.instance({
    network: CarbonSDK.Network.LocalHost,
  });
  const connectedSDK = await sdk.connectWithMnemonic(mnemonics);
  console.log("connected sdk");
  const encodedAllowanceMsg = [{
    typeUrl: CarbonTx.Types.MsgGrantAllowance,
    value: MsgGrantAllowance.fromPartial({
      granter: connectedSDK.wallet.bech32Address,
      grantee: "",
      allowance: {
        typeUrl: GrantTypes.AllowedMsgAllowance,
        value: AllowedMsgAllowance.encode(AllowedMsgAllowance.fromPartial({
          allowance: {
            typeUrl: GrantTypes.BasicAllowance,
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

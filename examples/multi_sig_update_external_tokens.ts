import * as BIP39 from "bip39";
import { MsgUpdateExternalToken } from "../lib/codec/Switcheo/carbon/bridge/tx";
import { MsgSubmitProposalResponse, MsgSubmitProposal, Exec } from "../lib/codec/cosmos/group/v1/tx"
import { Any } from "../lib/codec";
import { CarbonSDK, CarbonTx } from "./_sdk";
import "./_setup";
import { DeliverTxResponse } from "@cosmjs/stargate";
import Long from "long";

export const WrapToMultiSigMsg = (
  groupPolicyAddress: string,
  proposers: string[],
  metadata: string,
  messages: Any[],
  shouldExec: boolean,
  title: string,
  summary: string,
): MsgSubmitProposal => {
  // wrap msgs in a group multi-sig msg
  const groupMsg = MsgSubmitProposal.fromPartial({
    groupPolicyAddress,
    proposers,
    metadata,
    messages,
    exec: shouldExec ? Exec.EXEC_TRY : Exec.EXEC_UNSPECIFIED,
    title,
    summary,
  })

  return groupMsg
}

(async () => {
  const mnemonics = process.env.MNEMONICS ?? BIP39.generateMnemonic();

  const sdk = await CarbonSDK.instance({
    network: CarbonSDK.Network.MainNet,
  });
  const connectedSDK = await sdk.connectWithMnemonic(mnemonics);

  const groupPolicyAddress = process.env.GROUP_ADDRESS ?? ""

  const tokensToUpdate: MsgUpdateExternalToken[] = [
    // {
    //   creator: groupPolicyAddress,
    //   connectionId: "3/ethereum/0x4ab44c7e881ee37cb02bc0c98547a0bbfad9291b",
    //   assetAddress: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
    //   tokenName: "Ether",
    //   decimals: new Long(18),
    //   isCarbonOwned: false,
    // },
    {
      creator: groupPolicyAddress,
      connectionId: "3/arbitrum/0x4ab44c7e881ee37cb02bc0c98547a0bbfad9291b",
      assetAddress: "0x82af49447d8a07e3bd95bd0d56f35241523fbab1",
      tokenName: "Ether",
      decimals: new Long(18),
      isCarbonOwned: false,
    },
    {
      creator: groupPolicyAddress,
      connectionId: "3/arbitrum/0x4ab44c7e881ee37cb02bc0c98547a0bbfad9291b",
      assetAddress: "0xfc5a1a6eb076a2c7ad06ed22c90d7e710e35ad0a",
      tokenName: "GMX",
      decimals: new Long(18),
      isCarbonOwned: false,
    },
    {
      creator: groupPolicyAddress,
      connectionId: "3/polygon/0x4ab44c7e881ee37cb02bc0c98547a0bbfad9291b",
      assetAddress: "0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270",
      tokenName: "MATIC",
      decimals: new Long(18),
      isCarbonOwned: false,
    },
    {
      creator: groupPolicyAddress,
      connectionId: "3/binance/0x4ab44c7e881ee37cb02bc0c98547a0bbfad9291b",
      assetAddress: "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c",
      tokenName: "BNB",
      decimals: new Long(18),
      isCarbonOwned: false,
    },
  ]

  let msgs: Any[] = []

  for (const record of tokensToUpdate) {
    const msgValue = MsgUpdateExternalToken.fromPartial(record)

    const msg: Any = {
      typeUrl: CarbonTx.Types.MsgUpdateExternalToken,
      value: MsgUpdateExternalToken.encode(msgValue).finish()
    }
    msgs.push(msg)
  }

  const groupMsg = WrapToMultiSigMsg(
    groupPolicyAddress,                       // group address
    [connectedSDK.wallet.bech32Address],      // proposers
    "",                                       // metadata
    msgs,                                     // msgs to execute
    true,                                    // shouldTryExec immediately
    "",                                       // title
    "",                                       // summary
  )

  const result = await connectedSDK.wallet.sendTxs([{
    typeUrl: CarbonTx.Types.MsgGroupSubmitProposal,
    value: groupMsg,
  }])

  console.log(result);

  const deliverTxResponse = result as DeliverTxResponse
  const responseBz = deliverTxResponse.msgResponses[0].value
  const response = MsgSubmitProposalResponse.decode(responseBz)
  const proposalId = response.proposalId

  console.log('\n====== CLI cmd to vote:')
  console.log(`carbond tx group vote ${proposalId} ${connectedSDK.wallet.bech32Address} VOTE_OPTION_YES "" --keyring-backend file --fees 1000000000swth -y \n`)

  console.log('====== CLI cmd to execute:')
  console.log(`carbond tx group exec ${proposalId} --from ${connectedSDK.wallet.bech32Address} --keyring-backend file --fees 100000000swth -y \n`)

  console.log('====== Voting UI:')
  console.log(`https://0xbeef.carbon.network/group/${process.env.GROUP_ID}/proposal/${proposalId}`)
})().catch((e) => {
  console.log({ e })
}).finally(() => process.exit(0));

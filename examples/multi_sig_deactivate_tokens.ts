import * as BIP39 from "bip39";
import { MsgUpdateToken } from "../lib/codec/Switcheo/carbon/coin/tx";
import { MsgSubmitProposalResponse, MsgSubmitProposal, Exec } from "../lib/codec/cosmos/group/v1/tx"
import { Any } from "../lib/codec";
import { CarbonSDK, CarbonTx } from "./_sdk";
import "./_setup";
import { DeliverTxResponse } from "@cosmjs/stargate";

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

  const tokensToDeactivate = [
    // "brdg/41589e35bdd37fa000a2a310fe076015e52dfd78fc9a09b504903c7b83fb9c4b", // wETH from arb
    // "brdg/54d7e3e21eeac0b0761a0294142b0c4f234e5e08a23f770e435755ebebdb951c", // wBNB from bsc
    // "brdg/80e8c20d295cf162023922ecfa61fd73184b6e0bd1f3f4b32265fc69ae7aed23", // wETH from eth
    // "brdg/a07dd6e75ea4045aaa3949322b6243163293aebd8610333eff20b6db4beffa0e", // wMATIC from polygon
    // "brdg/0a01ca811ca0cfdc3a6aba0950f0cbd533c9b642654333c5f134fc7828950c8f", // GMX from arb
    // "bit.1.2.9d68c4"
    // "toncoin.1.2.ccd645",
    "doge.1.2.16c6fa",
    "ftm.1.2.6936d3",
  ]

  let msgs: Any[] = []

  for (const denom of tokensToDeactivate) {
    const msgValue = MsgUpdateToken.fromPartial({
      updater: groupPolicyAddress,
      denom,
      updateTokenParams: {
        isActive: true
      }
    })

    const msg: Any = {
      typeUrl: CarbonTx.Types.MsgUpdateToken,
      value: MsgUpdateToken.encode(msgValue).finish()
    }
    msgs.push(msg)
  }

  const groupMsg = WrapToMultiSigMsg(
    groupPolicyAddress,                       // group address
    [connectedSDK.wallet.bech32Address],      // proposers
    "",                                       // metadata
    msgs,                                     // msgs to execute
    true,                                    // shouldTryExec immediately
    "reactivating ton token",                                       // title
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

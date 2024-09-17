import * as BIP39 from "bip39";
import { MsgUpdateOracle } from "../lib/codec/Switcheo/carbon/oracle/tx";
import { MsgSubmitProposal, Exec, MsgSubmitProposalResponse } from "../lib/codec/cosmos/group/v1/tx"
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
  console.log("mnemonics", mnemonics);

  const sdk = await CarbonSDK.instance({
    network: CarbonSDK.Network.LocalHost,
  });
  const connectedSDK = await sdk.connectWithMnemonic(mnemonics);

  const groupPolicyAddress = process.env.GROUP_ADDRESS ?? ""
  const updateOracleMsg = MsgUpdateOracle.fromPartial({
    updater: groupPolicyAddress,
    updateOracleParams: {
      id: "DATOM",
      resolution: 20
    }
  })

  const msgs: Any[] = [
    {
      typeUrl: CarbonTx.Types.MsgUpdateOracle,
      value: MsgUpdateOracle.encode(updateOracleMsg).finish()
    }
  ]

  const groupMsg = WrapToMultiSigMsg(
    groupPolicyAddress,                       // group address
    [connectedSDK.wallet.bech32Address],      // proposers
    "",                                       // metadata
    msgs,                                     // msgs to execute
    false,                                    // shouldTryExec immediately
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
})().catch((e) => {
  console.log({ e })
}).finally(() => process.exit(0));

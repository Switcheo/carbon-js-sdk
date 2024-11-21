import "./_setup";

import { EncodeObject } from "@cosmjs/proto-signing";
import { DeliverTxResponse } from "@cosmjs/stargate";
import { MsgUpdateOracle } from "../lib/codec/Switcheo/carbon/oracle/tx";
import { Exec, MsgSubmitProposal, MsgSubmitProposalResponse } from "../lib/codec/cosmos/group/v1/tx";
import { CarbonSDK, CarbonTx } from "./_sdk";
import NodeLedger from "./node-ledger";

const wrapToMultiSigMsg = (
  groupPolicyAddress: string,
  proposers: string[],
  metadata: string,
  messages: EncodeObject[],
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
  console.log('\n====== Connecting to Ledger')
  console.log("Please ensure that:")
  console.log("1. Your ledger is connected.")
  console.log("2. The ledger connected Cosmos app is open.")
  console.log("3. Approve any system permission pop up for connection.")
  console.log("\nConnecting to ledger…")
  const ledger = await new NodeLedger().connect();

  console.log("Successfully connected with ledger, address:", ledger.getCosmosAddress());
  const sdk = await CarbonSDK.instanceWithLedger(ledger as any);

  const groupPolicyAddress = process.env.GROUP_ADDRESS ?? ""
  const updateOracleMsg = MsgUpdateOracle.fromPartial({
    updater: groupPolicyAddress,
    updateOracleParams: {
      id: "DATOM",
      resolution: 20
    }
  })

  const msgs: EncodeObject[] = [
    {
      typeUrl: CarbonTx.Types.MsgUpdateOracle,
      value: MsgUpdateOracle.encode(updateOracleMsg).finish()
    }
  ]

  const groupMsg = wrapToMultiSigMsg(
    groupPolicyAddress,                       // group address
    [sdk.wallet.bech32Address],               // proposers
    "",                                       // metadata
    msgs,                                     // msgs to execute
    false,                                    // shouldTryExec immediately
    "",                                       // title
    "",                                       // summary
  )

  const result = await sdk.wallet.sendTxs([{
    typeUrl: CarbonTx.Types.MsgGroupSubmitProposal,
    value: groupMsg,
  }])

  console.log(result);

  const deliverTxResponse = result as DeliverTxResponse
  const responseBz = deliverTxResponse.msgResponses[0].value
  const response = MsgSubmitProposalResponse.decode(responseBz)
  const proposalId = response.proposalId

  console.log('\n====== CLI cmd to vote:')
  console.log(`carbond tx group vote ${proposalId} ${sdk.wallet.bech32Address} VOTE_OPTION_YES "" --keyring-backend file --fees 1000000000swth -y \n`)

  console.log('====== CLI cmd to execute:')
  console.log(`carbond tx group exec ${proposalId} --from ${sdk.wallet.bech32Address} --keyring-backend file --fees 100000000swth -y \n`)

  console.log('====== Voting UI:')
  console.log(`https://0xbeef.carbon.network/group/${process.env.GROUP_ID}/proposal/${proposalId}`)
})().catch((e) => {
  console.log({ e })
}).finally(() => process.exit(0));


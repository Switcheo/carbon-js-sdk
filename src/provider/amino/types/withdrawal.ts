import { TypeUtils } from "@carbon-sdk/util";
import * as CarbonTx from "@carbon-sdk/util/tx";
import { AminoConverter } from "@cosmjs/stargate";
import { AminoField, generateFieldAminoType } from "../utils";

// Each field maps to carbon's legacy amino JSON as its Go json tag in x/withdrawal/types/tx.pb.go reads.
const WithdrawalAmino: TypeUtils.SimpleMap<AminoConverter> = {
  [CarbonTx.Types.MsgWithdrawalWithdraw]: generateFieldAminoType("withdrawal/Withdraw", {
    sender: AminoField.str,
    usd: AminoField.int,
    recipient: AminoField.str,
  }),
  [CarbonTx.Types.MsgRetryTicket]: generateFieldAminoType("withdrawal/RetryTicket", {
    sender: AminoField.str,
    ticketId: AminoField.uint64,
    recipient: AminoField.str,
  }),
  [CarbonTx.Types.MsgUpdateTeamList]: generateFieldAminoType("withdrawal/UpdateTeamList", {
    creator: AminoField.str,
    add: AminoField.strs,
    remove: AminoField.strs,
  }),
  [CarbonTx.Types.MsgUpdateControls]: generateFieldAminoType("withdrawal/UpdateControls", {
    creator: AminoField.str,
    userWithdrawalsEnabled: AminoField.optionalBool,
    rebalancingEnabled: AminoField.optionalBool,
    exit: AminoField.optionalMessage({
      enabled: AminoField.optionalBool,
      relayFee: AminoField.optionalInt,
    }),
    stockWarningUsd: AminoField.optionalDec,
    paused: AminoField.optionalBool,
    addDepositDenoms: AminoField.strs,
    removeDepositDenoms: AminoField.strs,
    minWithdrawalUsd: AminoField.optionalInt,
  }),
  [CarbonTx.Types.MsgRebalanceWithdrawal]: generateFieldAminoType("withdrawal/RebalanceWithdrawal", {
    sender: AminoField.str,
    denom: AminoField.str,
    amount: AminoField.int,
    recipient: AminoField.str,
    account: AminoField.str,
  }),
  [CarbonTx.Types.MsgResolveUnclaimedDeposit]: generateFieldAminoType("withdrawal/ResolveUnclaimedDeposit", {
    creator: AminoField.str,
    id: AminoField.uint64,
    recipient: AminoField.str,
    connectionId: AminoField.str,
  }),
  [CarbonTx.Types.MsgReconcileBroker]: generateFieldAminoType("withdrawal/ReconcileBroker", {
    creator: AminoField.str,
    denom: AminoField.str,
  }),
};

export default WithdrawalAmino;

import { TypeUtils } from "@carbon-sdk/util";
import * as CarbonTx from "@carbon-sdk/util/tx";
import { AminoConverter } from "@cosmjs/stargate";
import { AminoInit, generateAminoType } from "../utils";

const TxTypes: TypeUtils.SimpleMap<string> = {
  Delegate: "cosmos-sdk/MsgDelegate",
  Undelegate: "cosmos-sdk/MsgUndelegate",
  BeginRedelegate: "cosmos-sdk/MsgBeginRedelegate",
  WithdrawDelegationReward: "cosmos-sdk/MsgWithdrawDelegationReward",
};

const MsgDelegate: AminoInit = {
  aminoType: TxTypes.Delegate,
  valueMap: {},
};

const MsgUndelegate: AminoInit = {
  aminoType: TxTypes.Undelegate,
  valueMap: {},
};

const MsgBeginRedelegate: AminoInit = {
  aminoType: TxTypes.BeginRedelegate,
  valueMap: {},
};

const MsgWithdrawDelegatorReward: AminoInit = {
  aminoType: TxTypes.WithdrawDelegationReward,
  valueMap: {},
};

const StakingAmino: TypeUtils.SimpleMap<AminoConverter> = {
  [CarbonTx.Types.MsgDelegate]: generateAminoType(MsgDelegate),
  [CarbonTx.Types.MsgUndelegate]: generateAminoType(MsgUndelegate),
  [CarbonTx.Types.MsgBeginRedelegate]: generateAminoType(MsgBeginRedelegate),
  [CarbonTx.Types.MsgWithdrawDelegatorReward]: generateAminoType(MsgWithdrawDelegatorReward),
};

export default StakingAmino;

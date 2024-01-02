import { TypeUtils } from "@carbon-sdk/util";
import * as CarbonTx from "@carbon-sdk/util/tx";
import { AminoConverter } from "@cosmjs/stargate";
import { AminoInit, generateAminoType } from "../utils";

const TxTypes: TypeUtils.SimpleMap<string> = {
  GrantAuthz: "signless/GrantAuthz",
  GrantFeegrant: "signless/GrantFeegrant",
  MsgExec: "signless/MsgExec",
};

const MsgGrantAuthz: AminoInit = {
  aminoType: TxTypes.GrantAuthz,
  valueMap: {},
};

const MsgGrantFeegrant: AminoInit = {
  aminoType: TxTypes.GrantFeegrant,
  valueMap: {},
}

const MsgExec: AminoInit = {
  aminoType: TxTypes.MsgExec,
  valueMap: {},
}

const SignlessAmino: TypeUtils.SimpleMap<AminoConverter> = {
  [CarbonTx.Types.MsgGrant]: generateAminoType(MsgGrantAuthz),
  [CarbonTx.Types.MsgGrantAllowance]: generateAminoType(MsgGrantFeegrant),
  [CarbonTx.Types.MsgExec]: generateAminoType(MsgExec),
};

export default SignlessAmino;

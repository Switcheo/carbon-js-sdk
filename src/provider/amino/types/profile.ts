import { CarbonTx, TypeUtils } from "@carbon-sdk/util";
import { AminoConverter } from "@cosmjs/stargate";
import { AminoInit, generateAminoType } from "../utils";

const TxTypes: TypeUtils.SimpleMap<string> = {
  UpdateProfile: "profile/MsgUpdateProfile",
};

const MsgUpdateProfile: AminoInit = {
  aminoType: TxTypes.UpdateProfile,
  valueMap: {},
};

const ProfileAmino: TypeUtils.SimpleMap<AminoConverter> = {
  [CarbonTx.Types.MsgUpdateProfile]: generateAminoType(MsgUpdateProfile),
};

export default ProfileAmino;

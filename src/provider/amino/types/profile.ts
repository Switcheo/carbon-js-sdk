import { CarbonTx, TypeUtils } from "@carbon-sdk/util";
import { AminoConverter } from "@cosmjs/stargate";
import { AminoInit, generateAminoType } from "../utils";

const MsgUpdateProfile: AminoInit = {
  aminoType: "profile/MsgUpdateProfile",
  valueMap: {
    creator: "string",
    username: "string",
    twitter: "string",
  },
};

const ProfileAmino: TypeUtils.SimpleMap<AminoConverter> = {
  [CarbonTx.Types.MsgUpdateProfile]: generateAminoType(MsgUpdateProfile),
};

export default ProfileAmino;


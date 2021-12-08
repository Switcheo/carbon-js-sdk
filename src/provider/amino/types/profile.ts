import { CarbonTx, TypeUtils } from "@carbon-sdk/util";
import { AminoConverter } from "@cosmjs/stargate";
import { AminoInit, AminoProcess, AminoValueMap, generateAminoType } from "../utils";

const TxTypes: TypeUtils.SimpleMap<string> = {
  UpdateProfile: "profile/UpdateProfile",
};

const MsgUpdateProfile: AminoInit = {
  aminoType: TxTypes.UpdateProfile,
  valueMap: {},
};

const updateProfileProcess: AminoProcess = {
  toAminoProcess: (amino: AminoValueMap, input: any) => {
    const newInput = input;
    if (input.twitter === "") {
      delete newInput.twitter;
    }
    return { amino, input: newInput };
  },
  fromAminoProcess: (amino: AminoValueMap, input: any) => {
    const newInput = input;
    if (!input.twitter) {
      newInput.twitter = "";
    }
    return { amino, input: newInput };
  },
}

const ProfileAmino: TypeUtils.SimpleMap<AminoConverter> = {
  [CarbonTx.Types.MsgUpdateProfile]: generateAminoType(MsgUpdateProfile, updateProfileProcess),
};

export default ProfileAmino;

import { GenericAuthorization } from "@carbon-sdk/codec/cosmos/authz/v1beta1/authz";
import { MsgExec as MsgExecAuthz, MsgGrant } from "@carbon-sdk/codec/cosmos/authz/v1beta1/tx";
import { MsgGrantAllowance } from "@carbon-sdk/codec/cosmos/feegrant/v1beta1/tx";
import { GrantUtils, TypeUtils } from "@carbon-sdk/util";
import * as CarbonTx from "@carbon-sdk/util/tx";
import { AminoConverter } from "@cosmjs/stargate";
import { AminoInit, AminoProcess, AminoValueMap, ConvertEncType, generateAminoType, mapEachIndiv } from "../utils";
import AminoTypesMap from "../AminoTypesMap";

const TxTypes: TypeUtils.SimpleMap<string> = {
  GrantAuthz: "cosmos-sdk/MsgGrant",
  GrantAllowance: "cosmos-sdk/MsgGrantAllowance",
  RevokeAuthz: "cosmos-sdk/MsgRevoke",
  RevokeFeegrant: "cosmos-sdk/MsgRevokeAllowance",
  MsgExec: "cosmos-sdk/MsgExec",
};

export enum GrantTypes {
  GrantAuthz = "/cosmos.authz.v1beta1.MsgGrant",
  RevokeAuthz = "/cosmos.authz.v1beta1.MsgRevoke",
  FeeGrant = "/cosmos.feegrant.v1beta1.MsgGrantAllowance",
  MsgExec = "/cosmos.authz.v1beta1.MsgExec",
  GenericAuthorization = "/cosmos.authz.v1beta1.GenericAuthorization",
  AllowedMsgAllowance = "/cosmos.feegrant.v1beta1.AllowedMsgAllowance",
  BasicAllowance = "/cosmos.feegrant.v1beta1.BasicAllowance",
}

const ContentTypes: TypeUtils.SimpleMap<string> = {
  [GrantTypes.GenericAuthorization]: "cosmos-sdk/GenericAuthorization",
  [GrantTypes.AllowedMsgAllowance]: "cosmos-sdk/AllowedMsgAllowance",
  [GrantTypes.BasicAllowance]: "cosmos-sdk/BasicAllowance",
};

const GenericAuthorizationAminoType: AminoInit = {
  aminoType: ContentTypes[GrantTypes.GenericAuthorization],
  valueMap: {},
}

const AllowedMsgAllowanceAminoType: AminoInit = {
  aminoType: ContentTypes[GrantTypes.AllowedMsgAllowance],
  valueMap: {},
}

const BasicAllowanceAminoType: AminoInit = {
  aminoType: ContentTypes[GrantTypes.BasicAllowance],
  valueMap: {
    expiration: ConvertEncType.Date,
  },
}

const MsgGrantAuthz: AminoInit = {
  aminoType: TxTypes.GrantAuthz,
  valueMap: {
    grant: {
      expiration: ConvertEncType.Date,
    },
  },
};

const MsgRevokeAuthz: AminoInit = {
  aminoType: TxTypes.RevokeAuthz,
  valueMap: {},
}

const MsgFeeGrantAllowance: AminoInit = {
  aminoType: TxTypes.GrantAllowance,
  valueMap: {},
}

const MsgRevokeAllowance: AminoInit = {
  aminoType: TxTypes.RevokeFeegrant,
  valueMap: {},
}

const MsgExec: AminoInit = {
  aminoType: TxTypes.MsgExec,
  valueMap: {},
}

const GenericAuthorizationAmino: AminoValueMap = {
  value: {
    msg: ConvertEncType,
  },
}

const MsgFeeGrantAllowanceAmino: AminoValueMap = {
  value: {
    msg: ConvertEncType,
  },
}

interface AminoRes {
  newContent: {
    type: string;
    value: any;
  };
  newAmino: AminoValueMap;
}

interface DirectRes {
  newContent: {
    typeUrl: string;
    value: Uint8Array;
  };
  newAmino: AminoValueMap;
}

const preProcessAmino = (value: TypeUtils.SimpleMap<any>, valueMap: AminoValueMap): TypeUtils.SimpleMap<any> | null | undefined => {
  return mapEachIndiv(value, valueMap, false);
};

const checkDecodeGrantAuthz = (content: any, amino: AminoValueMap): AminoRes => {
  const decodedValue = GrantUtils.decodeContent(content);
  const newContent = {
    type: ContentTypes[content.typeUrl],
    value: decodedValue.value,
  }

  const newAmino = { ...amino };

  newAmino.content = { ...GenericAuthorizationAmino.value }

  return {
    newContent,
    newAmino,
  }
}

const checkEncodeGrantAuthz = (content: any, amino: AminoValueMap): DirectRes => {
  const grantAuthzMsg = preProcessAmino(content.value, GenericAuthorizationAmino.value.msg)
  const grantAuthzProp = GenericAuthorization.fromPartial({
    ...content.value,
    msg: grantAuthzMsg,
  })
  return {
    newContent: {
      typeUrl: GrantTypes.GenericAuthorization,
      value: GenericAuthorization.encode(grantAuthzProp).finish(),
    },
    newAmino: {
      ...amino,
    },
  }
}

const grantAuthzAminoProcess: AminoProcess = {
  toAminoProcess: (amino: AminoValueMap, input: any) => {
    const { grant } = input as MsgGrant;
    const propResponse = checkDecodeGrantAuthz(grant?.authorization, amino);

    return {
      amino: propResponse.newAmino,
      input: {
        ...input,
        grant: {
          ...grant,
          authorization: propResponse.newContent,
        },
      },
    }
  },
  fromAminoProcess: (amino: AminoValueMap, input: any) => {
    const { grant } = input;
    const propResponse = checkEncodeGrantAuthz(grant?.authorization, amino)

    return {
      amino: propResponse.newAmino,
      ...input,
      grant: {
        ...grant,
        authorization: propResponse.newContent,
      },
    }
  },
}


const checkEncodeFeegrant = (content: any, amino: AminoValueMap): DirectRes => {
  const msg = preProcessAmino(content.value, MsgFeeGrantAllowanceAmino.value.msg)
  const grantAllowance = MsgGrantAllowance.fromPartial({
    ...content.value,
    msg,
  })
  const newContent = {
    typeUrl: GrantTypes.FeeGrant,
    value: MsgGrantAllowance.encode(grantAllowance).finish(),
  }
  const newAmino = { ...amino }
  return {
    newContent,
    newAmino,
  }
}

const checkDecodeFeegrant = (content: any, amino: AminoValueMap): AminoRes => {
  const decodedValue = GrantUtils.decodeContent(content);
  decodedValue.value.allowance = {
    type: ContentTypes[decodedValue.value.allowance.typeUrl],
    value: decodedValue.value.allowance.value,
  }

  const newContent = {
    type: ContentTypes[content.typeUrl],
    value: decodedValue.value,
  }

  const newAmino = { ...amino };

  newAmino.content = { ...MsgFeeGrantAllowanceAmino.value }
  return {
    newContent,
    newAmino,
  }
}

const feegrantAminoProcess: AminoProcess = {
  toAminoProcess: (amino: AminoValueMap, input: any) => {
    const { allowance } = input as MsgGrantAllowance;
    const propResponse = checkDecodeFeegrant(allowance, amino);
    return {
      amino: propResponse.newAmino,
      input: {
        ...input,
        allowance: propResponse.newContent,
      },
    }
  },
  fromAminoProcess: (amino: AminoValueMap, input: any) => {
    const { allowance } = input as MsgGrantAllowance;
    const propResponse = checkEncodeFeegrant(allowance, amino)
    return {
      amino: propResponse.newAmino,
      input: {
        ...input,
        allowance: propResponse.newContent,
      },
    };
  },
}


const msgExecProcess: AminoProcess = {
  toAminoProcess: (amino: AminoValueMap, input: any) => {
    console.log('xx toAmino input: ', input)
    console.log('xx amino types map:', AminoTypesMap)
    const { grantee, msgs } = input as MsgExecAuthz
    const output = {
      typeUrl: TxTypes.MsgExec,
      value: {
        grantee,
        msgs: msgs.map((msg) => AminoTypesMap.toAmino(msg)),
      },
    }
    return { amino, input: output }
  },

  fromAminoProcess: (amino: AminoValueMap, input: any) => {
    const newInput = input;
    console.log('xx fromAmino input: ', newInput)
    return { amino, input: newInput };
  },
};

const GrantAmino: TypeUtils.SimpleMap<AminoConverter> = {
  [CarbonTx.Types.MsgGrant]: generateAminoType(MsgGrantAuthz, grantAuthzAminoProcess),
  [CarbonTx.Types.MsgRevoke]: generateAminoType(MsgRevokeAuthz),
  [CarbonTx.Types.MsgGrantAllowance]: generateAminoType(MsgFeeGrantAllowance, feegrantAminoProcess),
  [CarbonTx.Types.MsgRevokeAllowance]: generateAminoType(MsgRevokeAllowance),
  [CarbonTx.Types.MsgExec]: generateAminoType(MsgExec, msgExecProcess),
  [GrantTypes.GenericAuthorization]: generateAminoType(GenericAuthorizationAminoType),
  [GrantTypes.AllowedMsgAllowance]: generateAminoType(AllowedMsgAllowanceAminoType),
  [GrantTypes.BasicAllowance]: generateAminoType(BasicAllowanceAminoType),
};

export default GrantAmino;

import { registry } from "@carbon-sdk/codec";
import { MsgExec as MsgExecAuthz, MsgGrant } from "@carbon-sdk/codec/cosmos/authz/v1beta1/tx";
import { MsgGrantAllowance } from "@carbon-sdk/codec/cosmos/feegrant/v1beta1/tx";
import { GrantUtils, TypeUtils } from "@carbon-sdk/util";
import * as CarbonTx from "@carbon-sdk/util/tx";
import { AminoMsg } from "@cosmjs/amino";
import { AminoConverter, AminoTypes } from "@cosmjs/stargate";
import { AminoInit, AminoProcess, AminoValueMap, ConvertEncType, generateAminoType } from "../utils";
import { AminoContentTypes, GrantTypes } from "@carbon-sdk/util/grant";
import { AllowedMsgAllowance, BasicAllowance } from "@carbon-sdk/codec/cosmos/feegrant/v1beta1/feegrant";

const TxTypes: TypeUtils.SimpleMap<string> = {
  GrantAuthz: "cosmos-sdk/MsgGrant",
  GrantAllowance: "cosmos-sdk/MsgGrantAllowance",
  RevokeAuthz: "cosmos-sdk/MsgRevoke",
  RevokeFeegrant: "cosmos-sdk/MsgRevokeAllowance",
  MsgExec: "cosmos-sdk/MsgExec",
};

const GenericAuthorizationAminoType: AminoInit = {
  aminoType: AminoContentTypes[GrantTypes.GenericAuthorization],
  valueMap: {},
}

const AllowedMsgAllowanceAminoType: AminoInit = {
  aminoType: AminoContentTypes[GrantTypes.AllowedMsgAllowance],
  valueMap: {},
}

const BasicAllowanceAminoType: AminoInit = {
  aminoType: AminoContentTypes[GrantTypes.BasicAllowance],
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

interface AminoRes {
  newContent: {
    type: string;
    value: any;
  };
  newAmino: AminoValueMap;
}


const checkDecodeGrantAuthz = (content: any, amino: AminoValueMap): AminoRes => {
  const decodedValue = GrantUtils.decodeContent(content);
  const newContent = {
    type: AminoContentTypes[content.typeUrl],
    value: decodedValue.value,
  }

  const newAmino = { ...amino };

  newAmino.content = { ...GenericAuthorizationAmino.value }

  return {
    newContent,
    newAmino,
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
    const grantTypeUrl = Object.keys(AminoContentTypes).find(key => AminoContentTypes[key] === input.grant.authorization.type)!
    const response = {
      amino,
      input: {
        ...input,
        grant: {
          ...input.grant,
          authorization: {
            typeUrl: grantTypeUrl,
            value: registry.encode({ typeUrl: grantTypeUrl, value: input.grant.authorization.value }),
          },
        },
      },
    }
    return response
  },
}


const feegrantAminoProcess: AminoProcess = {
  toAminoProcess: (amino: AminoValueMap, input: any) => {
    const { allowance } = input as MsgGrantAllowance;
    const decodedAllowance = GrantUtils.decodeContent(allowance!)

    decodedAllowance.value.allowance = {
      type: AminoContentTypes[decodedAllowance.value.allowance.typeUrl],
      value: decodedAllowance.value.allowance.value,
    }

    const newInput = {
      ...input,
      allowance: {
        type: AminoContentTypes[allowance!.typeUrl],
        value: decodedAllowance.value,
      },
    }
    return {
      amino,
      input: newInput,
    }
  },
  fromAminoProcess: (amino: AminoValueMap, input: any) => {
    const newInput = {
      ...input,
      allowance: {
        typeUrl: GrantTypes.AllowedMsgAllowance,
        value: AllowedMsgAllowance.encode(AllowedMsgAllowance.fromPartial({
          allowance: {
            typeUrl: GrantTypes.BasicAllowance,
            value: BasicAllowance.encode(BasicAllowance.fromPartial({
              expiration: new Date(input.allowance.value.allowance.value.expiration),
            })).finish(),
          },
          allowedMessages: input.allowance.value.allowed_messages,
        })).finish(),
      },
    }
    return {
      amino,
      input: newInput,
    };
  },
}


const msgExecProcess: AminoProcess = {
  toAminoProcess: (amino: AminoValueMap, input: any, aminoTypesMap: AminoTypes) => {
    const { msgs } = input as MsgExecAuthz;
    const newInput = {
      ...input,
      msgs: msgs.map((msg) => aminoTypesMap.toAmino({ typeUrl: msg.typeUrl, value: registry.decode(msg) })),
    }
    return {
      amino,
      input: newInput,
    };
  },

  fromAminoProcess: (amino: AminoValueMap, input: any, aminoTypesMap: AminoTypes) => {
    const msgs = input.msgs as AminoMsg[];
    const newInput = {
      ...input,
      msgs: msgs.map((msg) => {
        const m = aminoTypesMap.fromAmino(msg)
        return { typeUrl: m.typeUrl, value: registry.encode(m) }
      }),
    }
    return {
      amino,
      input: newInput,
    };
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

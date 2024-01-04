import { GenericAuthorization } from "@carbon-sdk/codec/cosmos/authz/v1beta1/authz";
import { MsgGrant } from "@carbon-sdk/codec/cosmos/authz/v1beta1/tx";
import { SignlessUtils, TypeUtils } from "@carbon-sdk/util";
import * as CarbonTx from "@carbon-sdk/util/tx";
import { AminoConverter } from "@cosmjs/stargate";
import { AminoInit, AminoProcess, AminoValueMap, ConvertEncType, generateAminoType, mapEachIndiv } from "../utils";

const TxTypes: TypeUtils.SimpleMap<string> = {
  GrantAuthz: "cosmos-sdk/MsgGrant",
  GrantFeegrant: "cosmos-sdk/MsgGrantAllowance",
  MsgExec: "cosmos-sdk/MsgExec",
};

const ContentTypes: TypeUtils.SimpleMap<string> = {
  '/cosmos.authz.v1beta1.GenericAuthorization': "cosmos-sdk/GenericAuthorization",
};


const MsgGrantAuthz: AminoInit = {
  aminoType: TxTypes.GrantAuthz,
  valueMap: {
    grant: {
      expiration: ConvertEncType.Date,
    },
  },
};

const MsgGrantFeegrant: AminoInit = {
  aminoType: TxTypes.GrantFeegrant,
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

interface AminoGenericAuthorizationRes {
  newContent: {
    type: string;
    value: any;
  };
  newAmino: AminoValueMap;
}

interface DirectGenericAuthorizationRes {
  newContent: {
    typeUrl: string;
    value: Uint8Array;
  };
  newAmino: AminoValueMap;
}

const preProcessAmino = (value: TypeUtils.SimpleMap<any>, valueMap: AminoValueMap): TypeUtils.SimpleMap<any> | null | undefined => {
  return mapEachIndiv(value, valueMap, false);
};

const checkDecodeGrantAuthz = (content: any, amino: AminoValueMap): AminoGenericAuthorizationRes => {
  const decodedValue = SignlessUtils.decodeContent(content);
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

const checkEncodeGrantAuthz = (content: any, amino: AminoValueMap): DirectGenericAuthorizationRes => {
  const grantAuthzMsg = preProcessAmino(content.value, GenericAuthorizationAmino.value.msg)
  const grantAuthzProp = GenericAuthorization.fromPartial({
    ...content.value,
    msg: grantAuthzMsg,
  })
  return {
    newContent: {
      typeUrl: SignlessUtils.SignlessTypes.GenericAuthorization,
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

const SignlessAmino: TypeUtils.SimpleMap<AminoConverter> = {
  [CarbonTx.Types.MsgGrant]: generateAminoType(MsgGrantAuthz, grantAuthzAminoProcess),
  [CarbonTx.Types.MsgGrantAllowance]: generateAminoType(MsgGrantFeegrant),
  [CarbonTx.Types.MsgExec]: generateAminoType(MsgExec),
};

export default SignlessAmino;

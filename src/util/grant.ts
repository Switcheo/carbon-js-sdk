import { GenericAuthorization } from "@carbon-sdk/codec/cosmos/authz/v1beta1/authz";
import { AllowedMsgAllowance, BasicAllowance } from "@carbon-sdk/codec/cosmos/feegrant/v1beta1/feegrant";
import { Any } from "@carbon-sdk/codec/google/protobuf/any";
import { TypeUtils } from "@carbon-sdk/util";

export enum GrantTypes {
  GrantAuthz = "/cosmos.authz.v1beta1.MsgGrant",
  RevokeAuthz = "/cosmos.authz.v1beta1.MsgRevoke",
  FeeGrant = "/cosmos.feegrant.v1beta1.MsgGrantAllowance",
  MsgExec = "/cosmos.authz.v1beta1.MsgExec",
  GenericAuthorization = "/cosmos.authz.v1beta1.GenericAuthorization",
  AllowedMsgAllowance = "/cosmos.feegrant.v1beta1.AllowedMsgAllowance",
  BasicAllowance = "/cosmos.feegrant.v1beta1.BasicAllowance",
}

enum AminoTypes {
  GenericAuthorization = "cosmos-sdk/GenericAuthorization",
  AllowedMsgAllowance = "cosmos-sdk/AllowedMsgAllowance",
  BasicAllowance = "cosmos-sdk/BasicAllowance",
}

export const AminoContentTypes: TypeUtils.SimpleMap<string> = {
  [GrantTypes.GenericAuthorization]: AminoTypes.GenericAuthorization,
  [GrantTypes.AllowedMsgAllowance]: AminoTypes.AllowedMsgAllowance,
  [GrantTypes.BasicAllowance]: AminoTypes.BasicAllowance,
};

export interface ValueDecoded {
  typeUrl: string;
  value: any;
}

export const emptyValue = {
  typeUrl: "",
  value: {},
};

export const decodeContent = (content?: Any): ValueDecoded => {
  if (!content) {
    return emptyValue;
  }

  switch (content.typeUrl) {
    case GrantTypes.GenericAuthorization: {
      return {
        ...content,
        value: GenericAuthorization.decode(content.value),
      };
    }
    case GrantTypes.AllowedMsgAllowance: {
      const value = AllowedMsgAllowance.decode(content.value);
      return {
        ...content,
        value: { ...value, allowance: { ...decodeContent(value.allowance) } },
      };
    }
    case GrantTypes.BasicAllowance: {
      return {
        ...content,
        value: BasicAllowance.decode(content.value),
      };
    }
    default:
      return emptyValue;
  }
};

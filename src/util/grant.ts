import { GenericAuthorization } from "@carbon-sdk/codec/cosmos/authz/v1beta1/authz";
import { AllowedMsgAllowance, BasicAllowance } from "@carbon-sdk/codec/cosmos/feegrant/v1beta1/feegrant";
import { Any } from "@carbon-sdk/codec/google/protobuf/any";
import { GrantTypes } from "@carbon-sdk/provider/amino/types/grant";

export interface ValueDecoded {
  typeUrl: string;
  value: any;
}

export const emptyValue = {
  typeUrl: "",
  value: {},
}

export const decodeContent = (content?: Any): ValueDecoded => {
  if (!content) {
    return emptyValue;
  }

  switch (content.typeUrl) {
    case GrantTypes.GenericAuthorization: {
      return {
        ...content,
        value: GenericAuthorization.decode(content.value),
      }
    }
    case GrantTypes.AllowedMsgAllowance: {
      const value = AllowedMsgAllowance.decode(content.value)
      return {
        ...content,
        value: { ...value, allowance: { ...decodeContent(value.allowance) } },
      }
    }
    case GrantTypes.BasicAllowance: {
      return {
        ...content,
        value: BasicAllowance.decode(content.value),
      }
    }
    default:
      return emptyValue;
  }
}
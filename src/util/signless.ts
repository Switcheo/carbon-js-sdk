import { TxTypes } from "@carbon-sdk/codec";
import { GenericAuthorization } from "@carbon-sdk/codec/cosmos/authz/v1beta1/authz";
import { Any } from "@carbon-sdk/codec/google/protobuf/any";
import { UNAUTHORIZED_MSGS } from "./tx";

export const AuthorizedSignlessMsgs = Object.values(TxTypes)
  .filter((msg: string) => !UNAUTHORIZED_MSGS.includes(msg) && !msg.endsWith("Response")) ?? []

export enum SignlessTypes {
  GrantAuthz = "/cosmos.authz.v1beta1.MsgGrant",
  GrantFeegrant = "/cosmos.feegrant.v1beta1.MsgGrantAllowance",
  MsgExec = "/cosmos.authz.v1beta1.MsgExec",

  GenericAuthorization = "/cosmos.authz.v1beta1.GenericAuthorization",
}

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
  console.log('xx', content)

  switch (content.typeUrl) {
    case SignlessTypes.GenericAuthorization: {
      return {
        ...content,
        value: GenericAuthorization.decode(content.value),
      }
    }
    default:
      return emptyValue;
  }
}
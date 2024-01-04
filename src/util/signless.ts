import { TxTypes } from "@carbon-sdk/codec";
import { GenericAuthorization } from "@carbon-sdk/codec/cosmos/authz/v1beta1/authz";
import { Any } from "@carbon-sdk/codec/google/protobuf/any";

// Increment AUTHORIZED_SIGNLESS_MSGS_VERSION whenever this list is updated
export const AuthorizedSignlessMsgs = [
  //cdp
  TxTypes.MsgSupplyAsset,
  TxTypes.MsgWithdrawAsset,
  TxTypes.MsgLockCollateral,
  TxTypes.MsgUnlockCollateral,
  TxTypes.MsgBorrowAsset,
  TxTypes.MsgSupplyAssetAndLockCollateral,
  TxTypes.MsgUnlockCollateral,
  TxTypes.MsgUnlockCollateralAndWithdrawAsset,
  TxTypes.MsgLiquidateCollateral,
  TxTypes.MsgLiquidateCollateralWithCdpTokens,
  TxTypes.MsgLiquidateCollateralWithCollateral,
  TxTypes.MsgLiquidateCollateralWithStablecoin,
  TxTypes.MsgRepayAsset,
  TxTypes.MsgRepayAssetWithCdpTokens,
  TxTypes.MsgRepayAssetWithCollateral,
  TxTypes.MsgMintStablecoin,
  TxTypes.MsgReturnStablecoin,
  TxTypes.MsgClaimRewards,
  TxTypes.MsgSetAccountEMode,
  TxTypes.MsgRemoveAccountEMode,
  // exchange
  TxTypes.MsgCreateOrder,
  TxTypes.MsgCancelAll,
  TxTypes.MsgCancelOrder,
  TxTypes.MsgEditOrder,
  TxTypes.MsgSetLeverage,
]

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
import { TxTypes } from "@carbon-sdk/codec";
import { GenericAuthorization } from "@carbon-sdk/codec/cosmos/authz/v1beta1/authz";
import { AllowedMsgAllowance, BasicAllowance } from "@carbon-sdk/codec/cosmos/feegrant/v1beta1/feegrant";
import { Any } from "@carbon-sdk/codec/google/protobuf/any";
import { SignlessTypes } from "@carbon-sdk/provider/amino/types/signless";

// Increment AUTHORIZED_SIGNLESS_MSGS_VERSION whenever this list is updated
export const AuthorizedSignlessMsgs = [
  // alliance
  TxTypes.MsgAllianceDelegate,
  TxTypes.MsgAllianceUndelegate,
  TxTypes.MsgAllianceRedelegate,
  TxTypes.MsgAllianceClaimDelegationRewards,
  TxTypes.MsgWithdrawDelegatorReward,
  TxTypes.MsgAllianceClaimDelegationRewards,

  // cdp
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

  // coin
  TxTypes.MsgMintToken,
  TxTypes.MsgDepositToGroup,
  TxTypes.MsgDepositToGroup,
  TxTypes.MsgCreateToken,

  // leverages
  TxTypes.MsgSetLeverage,

  // liquiditypool
  TxTypes.MsgCreatePoolWithLiquidity,
  TxTypes.MsgAddLiquidity,
  TxTypes.MsgRemoveLiquidity,
  TxTypes.MsgStakePoolToken,
  TxTypes.MsgUnstakePoolToken,
  TxTypes.MsgClaimPoolRewards,

  // order
  TxTypes.MsgCreateOrder,
  TxTypes.MsgCancelOrder,
  TxTypes.MsgEditOrder,
  TxTypes.MsgCancelAll,

  // perpspool
  TxTypes.MsgDepositToPool,
  TxTypes.MsgWithdrawFromPool,

  // position
  TxTypes.MsgSetMargin,

  // profile
  TxTypes.MsgUpdateProfile,

  // staking
  TxTypes.MsgDelegate,
  TxTypes.MsgUndelegate,
  TxTypes.MsgBeginRedelegate,
]



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
    case SignlessTypes.AllowedMsgAllowance: {
      const value = AllowedMsgAllowance.decode(content.value)
      return {
        ...content,
        value: { ...value, allowance: { ...decodeContent(value.allowance) } },
      }
    }
    case SignlessTypes.BasicAllowance: {
      return {
        ...content,
        value: BasicAllowance.decode(content.value),
      }
    }
    default:
      return emptyValue;
  }
}
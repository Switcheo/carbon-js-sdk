import { CarbonTx, TypeUtils } from "@carbon-sdk/util";
import { AminoConverter } from "@cosmjs/stargate";
import { AminoInit, generateAminoType } from "../utils";

const TxTypes: TypeUtils.SimpleMap<string> = {
  CreateOrder: "order/MsgCreateOrder",
  CancelOrder: "order/MsgCancelOrder",
  EditOrder: "order/MsgEditOrder",
  CancelAll: "order/MsgCancelAll",
};

const MsgCreateOrder: AminoInit = {
  aminoType: TxTypes.CreateOrder,
  valueMap: {
    creator: "string",
    isPostOnly: "boolean",
    isReduceOnly: "boolean",
    market: "string",
    orderType: "string",
    price: "dec",
    quantity: "dec",
    side: "string",
    stopPrice: "dec",
    timeInForce: "string",
    triggerType: "string",
  },
};

const MsgCancelOrder: AminoInit = {
  aminoType: TxTypes.CancelOrder,
  valueMap: {
    creator: "string",
    id: "string",
  },
};

const MsgEditOrder: AminoInit = {
  aminoType: TxTypes.EditOrder,
  valueMap: {
    creator: "string",
    id: "string",
    quantity: "dec",
    price: "dec",
    stopPrice: "dec",
  },
};

const MsgCancelAll: AminoInit = {
  aminoType: TxTypes.CancelAll,
  valueMap: {
    creator: "string",
    market: "string",
  },
};

const OrderAmino: TypeUtils.SimpleMap<AminoConverter> = {
  [CarbonTx.Types.MsgCreateOrder]: generateAminoType(MsgCreateOrder),
  [CarbonTx.Types.MsgCancelOrder]: generateAminoType(MsgCancelOrder),
  [CarbonTx.Types.MsgEditOrder]: generateAminoType(MsgEditOrder),
  [CarbonTx.Types.MsgCancelAll]: generateAminoType(MsgCancelAll),
};

export default OrderAmino;

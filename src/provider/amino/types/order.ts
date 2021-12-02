import { CarbonTx, TypeUtils } from "@carbon-sdk/util";
import { AminoConverter } from "@cosmjs/stargate";
import { AminoInit, ConvertEncType, generateAminoType } from "../utils";

const TxTypes: TypeUtils.SimpleMap<string> = {
  CreateOrder: "order/CreateOrder",
  CancelOrder: "order/CancelOrder",
  EditOrder: "order/EditOrder",
  CancelAll: "order/CancelAll",
};

const MsgCreateOrder: AminoInit = {
  aminoType: TxTypes.CreateOrder,
  valueMap: {
    price: ConvertEncType.Dec,
    stopPrice: ConvertEncType.Dec,
  },
};

const MsgCancelOrder: AminoInit = {
  aminoType: TxTypes.CancelOrder,
  valueMap: {},
};

const MsgEditOrder: AminoInit = {
  aminoType: TxTypes.EditOrder,
  valueMap: {
    price: ConvertEncType.Dec,
    stopPrice: ConvertEncType.Dec,
  },
};

const MsgCancelAll: AminoInit = {
  aminoType: TxTypes.CancelAll,
  valueMap: {},
};

const OrderAmino: TypeUtils.SimpleMap<AminoConverter> = {
  [CarbonTx.Types.MsgCreateOrder]: generateAminoType(MsgCreateOrder),
  [CarbonTx.Types.MsgCancelOrder]: generateAminoType(MsgCancelOrder),
  [CarbonTx.Types.MsgEditOrder]: generateAminoType(MsgEditOrder),
  [CarbonTx.Types.MsgCancelAll]: generateAminoType(MsgCancelAll),
};

export default OrderAmino;

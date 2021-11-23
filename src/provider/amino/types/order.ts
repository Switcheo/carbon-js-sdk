import { CarbonTx, TypeUtils } from "@carbon-sdk/util";
import { AminoConverter } from "@cosmjs/stargate";
import { AminoInit, AminoConvertTypes, generateAminoType } from "../utils";

const TxTypes: TypeUtils.SimpleMap<string> = {
  CreateOrder: "order/MsgCreateOrder",
  CancelOrder: "order/MsgCancelOrder",
  EditOrder: "order/MsgEditOrder",
  CancelAll: "order/MsgCancelAll",
};

const MsgCreateOrder: AminoInit = {
  aminoType: TxTypes.CreateOrder,
  valueMap: {
    price: AminoConvertTypes.Dec,
    stopPrice: AminoConvertTypes.Dec,
  },
};

const MsgCancelOrder: AminoInit = {
  aminoType: TxTypes.CancelOrder,
  valueMap: {},
};

const MsgEditOrder: AminoInit = {
  aminoType: TxTypes.EditOrder,
  valueMap: {
    price: AminoConvertTypes.Dec,
    stopPrice: AminoConvertTypes.Dec,
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

import { NumberUtils, TypeUtils } from "@carbon-sdk/util";
import * as CarbonTx from "@carbon-sdk/util/tx";
import { AminoConverter } from "@cosmjs/stargate";
import { AminoInit, AminoProcess, AminoValueMap, ConvertEncType, generateAminoType } from "../utils";

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

const createOrderProcess: AminoProcess = {
  toAminoProcess: (amino: AminoValueMap, input: any) => {
    const newInput = input;
    if (!input.isPostOnly) {
      delete newInput.isPostOnly;
    }
    if (!input.isReduceOnly) {
      delete newInput.isReduceOnly;
    }
    if (input.timeInForce === "") {
      delete newInput.timeInForce;
    }
    if (input.triggerType === "") {
      delete newInput.triggerType;
    }
    newInput.stopPrice = input.stopPrice === "" ? "0" : input.stopPrice;
    newInput.price = input.price === "" ? "0" : input.price;
    return { amino, input: newInput };
  },
  fromAminoProcess: (amino: AminoValueMap, input: any) => {
    const newInput = {
      ...input,
      is_post_only: input.is_post_only ?? false,
      is_reduce_only: input.is_reduce_only ?? false,
      time_in_force: input.time_in_force ?? "",
      trigger_type: input.trigger_type ?? "",
      stop_price: NumberUtils.bnOrZero(input.stop_price, NumberUtils.BN_ZERO).eq(0) ? "" : input.stop_price,
      price: NumberUtils.bnOrZero(input.price, NumberUtils.BN_ZERO).eq(0) ? "" : input.price,
    };
    return { amino, input: newInput };
  },
};

const OrderAmino: TypeUtils.SimpleMap<AminoConverter> = {
  [CarbonTx.Types.MsgCreateOrder]: generateAminoType(MsgCreateOrder, createOrderProcess),
  [CarbonTx.Types.MsgCancelOrder]: generateAminoType(MsgCancelOrder),
  [CarbonTx.Types.MsgEditOrder]: generateAminoType(MsgEditOrder),
  [CarbonTx.Types.MsgCancelAll]: generateAminoType(MsgCancelAll),
};

export default OrderAmino;

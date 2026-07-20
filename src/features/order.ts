import { QueryClientImpl as OrderQueryClient } from "@carbon-sdk/codec/Switcheo/carbon/order/query";
import { MsgSetLeverage } from "@carbon-sdk/codec/Switcheo/carbon/leverage/tx";
import { MsgCancelAll, MsgCancelOrder, MsgCreateOrder, MsgEditOrder } from "@carbon-sdk/codec/Switcheo/carbon/order/tx";
import type { CarbonFeature } from "@carbon-sdk/compose";
import { OrderModule } from "@carbon-sdk/modules/order";
import type { ModuleProvider } from "@carbon-sdk/modules/base";
import { OrderMessageTypeUrl } from "./order-type-urls";

export { OrderMessageTypeUrl } from "./order-type-urls";

export const orderFeature: CarbonFeature<
  { order: OrderQueryClient },
  { order: OrderModule<ModuleProvider> }
> = {
  createQueries: (rpc) => ({ order: new OrderQueryClient(rpc) }),
  createModules: (provider) => ({ order: new OrderModule(provider) }),
  registryEntries: [
    [OrderMessageTypeUrl.create, MsgCreateOrder],
    [OrderMessageTypeUrl.edit, MsgEditOrder],
    [OrderMessageTypeUrl.cancel, MsgCancelOrder],
    [OrderMessageTypeUrl.cancelAll, MsgCancelAll],
    [OrderMessageTypeUrl.setLeverage, MsgSetLeverage],
  ],
};
import { OrderModule } from "@carbon-sdk/modules/order"

export const getDefaultTimeInForce = (isMarketOrder: boolean) => {
  return isMarketOrder ? OrderModule.TimeInForce.Ioc : OrderModule.TimeInForce.Gtc
}

export function isMarket(type: OrderModule.OrderType | string): boolean {
  const newType = type as string
  return newType === (OrderModule.OrderType.Market as string) || newType === (OrderModule.OrderType.StopMarket as string) || newType === (OrderModule.OrderType.TakeProfitMarket as string)
}
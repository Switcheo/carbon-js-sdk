import { BigNumber } from "bignumber.js";
import * as BIP39 from "bip39";
import { OrderModule } from "../lib";
import { MsgCreateOrder } from "../lib/codec/order/tx";
import { CarbonTx } from "../lib/util";
import { CarbonSDK } from "./_sdk";
import "./_setup";

(async () => {
  const mnemonics = process.env.MNEMONICS ?? BIP39.generateMnemonic();
  console.log("mnemonics", mnemonics);

  const sdk = await CarbonSDK.instance({
    network: CarbonSDK.Network.LocalHost,
    config: {
      tmRpcUrl: process.env.TRPC_ENDPOINT,
    },
  });
  const connectedSDK = await sdk.connectWithMnemonic(mnemonics);
  console.log("connected sdk");

  // retrieve market to use for order creation
  const marketsResult = await sdk.query.market.MarketAll({})
  console.log("markets", marketsResult.markets);

  if (!marketsResult.markets.length) {
    throw new Error("no markets found, create a market first");
  }
  const [market] = marketsResult.markets

  // create an order using generic
  // CarbonWallet.sendTx, no type checking
  // on inputs
  const genericTxValue: MsgCreateOrder = {
    creator: connectedSDK.wallet.bech32Address,
    isPostOnly: false,
    isReduceOnly: false,
    market: market.name,
    orderType: "limit",
    price: "1",
    quantity: "100",
    side: "buy",
    stopPrice: "",
    timeInForce: "gtc",
    triggerType: "",
    referralAddress: "",
    referralCommission: 0,
  }
  const genericTxCallResult = await connectedSDK.wallet.sendTx({
    typeUrl: CarbonTx.Types.MsgCreateOrder,
    value: genericTxValue,
  })
  console.log("call generic tx", genericTxCallResult)

  // create an order using Order Module
  // for better input type checking
  const moduleCallResult = await connectedSDK.order.create({
    market: market.name,
    orderType: OrderModule.OrderType.Limit,
    price: new BigNumber(100),
    quantity: new BigNumber(market.minQuantity),
    side: OrderModule.OrderSide.Buy,
  });
  console.log("call from module", moduleCallResult);
})().catch(console.error).finally(() => process.exit(0));

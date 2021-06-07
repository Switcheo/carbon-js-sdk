import Long from "long";
import { CarbonSDK } from "./_sdk";
import "./_setup";

const TRPC_ENDPOINT = process.env.TRPC_ENDPOINT ?? "http://localhost:26657";

(async () => {
  const sdk = await CarbonSDK.instance({
    network: CarbonSDK.Network.LocalHost,
    config: {
      rpcURL: TRPC_ENDPOINT,
    },
  });

  // query all tokens
  const tokens = await sdk.query.coin.TokenAll({})
  console.log("tokens", tokens);

  // query all markets
  const markets = await sdk.query.market.MarketAll({})
  console.log("markets", markets);

  // query all orders
  const orders = await sdk.query.order.OrderAll({})
  console.log("orders", orders);

  // query all profiles with pagination
  const profiles = await sdk.query.profile.ProfileAll({
    pagination: {
      limit: Long.fromNumber(1),
      countTotal: true,
      offset: Long.fromNumber(0),
      key: Buffer.alloc(0),
    }
  })
  console.log("profiles", profiles);
})().catch(console.error).finally(() => process.exit(0));

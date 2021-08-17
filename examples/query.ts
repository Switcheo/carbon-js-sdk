import Long from "long";
import { CarbonSDK } from "./_sdk";
import "./_setup";

(async () => {
  const sdk = await CarbonSDK.instance({
    network: CarbonSDK.Network.LocalHost,
    config: {
      rpcUrl: process.env.TRPC_ENDPOINT,
    },
  });

  // query all tokens
  const tokens = await sdk.query.coin.TokenAll({})
  console.log("tokens", tokens);

  // query all token mappings
  const mappings = await sdk.query.coin.WrapperMappings({})
  console.log("mappings", mappings);

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

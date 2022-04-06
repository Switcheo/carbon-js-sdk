import Long from "long";
import { QueryAllTransactionRequest } from "../lib/codec";
import { CarbonSDK, CarbonTx, GenericUtils } from "./_sdk";
import "./_setup";

(async () => {
  const sdk = await CarbonSDK.instance({
    network: CarbonSDK.Network.LocalHost,
    config: {
      tmRpcUrl: process.env.TRPC_ENDPOINT,
    },
  });

  // GRPC Queries

  // query market stats
  const marketStats = await sdk.query.marketstats.MarketStats({});
  console.log("marketStats", marketStats);

  // query txn fees
  const fees = await sdk.query.fee.MsgFeeAll({})
  console.log("fees", fees);

  // query all tokens
  const tokens = await sdk.query.coin.TokenAll({
    pagination: {
      limit: new Long(100),
      offset: new Long(0),
      key: new Uint8Array(),
      countTotal: true,
    },
  });
  console.log("tokens", tokens);

  // query all token mappings
  const mappings = await sdk.query.coin.WrapperMappings({});
  console.log("mappings", mappings);

  // query all markets
  const markets = await sdk.query.market.MarketAll({});
  console.log("markets", markets);

  // query all orders;
  const orders = await sdk.query.order.OrderAll({
    address: "",
    market: "",
    orderType: "",
    orderStatus: "",
  });
  console.log("orders", orders);

  // query all profiles with pagination
  const profiles = await sdk.query.profile.ProfileAll({
    username: "",
  });
  console.log("profiles", profiles);

  // query 10 latest blocks
  const blocksResponse = await sdk.query.misc.BlockAll({
    pagination: {
      page: new Long(1),
      pageSize: new Long(10),
    },
  });
  console.log("latest block", blocksResponse.blocks[0]);

  // query 10 latest transactions
  const txnsResponse = await sdk.query.misc.TransactionAll(
    QueryAllTransactionRequest.fromPartial({
    pagination: {
      page: new Long(1),
      pageSize: new Long(10),
    },
  }));
  console.log("latest txn", txnsResponse.transactions[0]);

  // query all transaction MessageTypes
  const messageTypeReponse = await sdk.query.misc.MessageTypeAll({});
  console.log("message types", messageTypeReponse.messageTypes);
  
  const firstMessageType = messageTypeReponse.messageTypes[0].messageType;

  // filter transactions with MessageType
  const filteredTxns = await sdk.query.misc.TransactionAll(
    QueryAllTransactionRequest.fromPartial({
      msgTypeFilters: [firstMessageType],
      pagination: {
        page: new Long(1),
        pageSize: new Long(10),
      },
    }));
  console.log("filtered txns by messageType:", firstMessageType, filteredTxns.transactions[0]);

  // Tendermint Queries
  // Note: sdk.query.chain is an instance of BlockchainClient
  // BlockchainClient is a wrapper of StargateClient
  // StargateClient is a wrapper of Tendermint34Client

  // query latest block
  const block = await sdk.query.chain.getBlock();
  console.log("block", block)
  console.log("block tx hashes", block.txs.map(GenericUtils.computeTxHash))

  const txHash = GenericUtils.computeTxHash(block.txs[0])!;

  // get tx
  const txs = await sdk.query.chain.searchTx({
    tags: [{
      key: "tx.hash",
      value: txHash,
    }]
  })
  const [tx] = txs; 
  console.log("tx", tx)
  console.log("tx hash", tx.hash)
  console.log("tx events", JSON.parse(tx.rawLog))

  // decode tx
  const decodedTx = CarbonTx.decode(tx.tx)
  console.log("tx decoded", JSON.stringify(decodedTx))
  console.log("tx msgs", decodedTx?.body?.messages)

})().catch(console.error).finally(() => process.exit(0));

import Long from "long";
import { QueryAllTransactionRequest } from "../lib/codec/Switcheo/carbon/misc/query";
import { PageRequest } from "../lib/codec/cosmos/base/query/v1beta1/pagination";
import { CarbonSDK, CarbonTx, GenericUtils } from "./_sdk";
import "./_setup";

(async () => {
  const sdk = await CarbonSDK.instance();

  // GRPC Queries

  // query market stats
  const marketStats = await sdk.query.marketstats.MarketStats({
    pagination: PageRequest.fromPartial({
      limit: new Long(5),
    }),
  });
  console.log("marketStats", marketStats);

  // query msg type gas costs
  const msgGasCosts = await sdk.query.fee.MsgGasCostAll({
    pagination: PageRequest.fromPartial({
      limit: new Long(5),
    }),
  });
  console.log("msg gas costs", msgGasCosts);

  // query txn min gas price
  const minGasPrices = await sdk.query.fee.MinGasPriceAll({
    pagination: PageRequest.fromPartial({
      limit: new Long(5),
    }),
  });
  console.log("min gas prices", minGasPrices);

  // query all tokens
  const tokens = await sdk.query.coin.TokenAll({
    pagination: PageRequest.fromPartial({
      limit: new Long(20),
    }),
  });
  console.log("tokens", tokens);

  // query all token mappings
  const mappings = await sdk.query.coin.WrapperMappings({
    pagination: PageRequest.fromPartial({
      limit: new Long(5),
    }),
  });
  console.log("mappings", mappings);

  // query all markets
  const markets = await sdk.query.market.MarketAll({
    pagination: PageRequest.fromPartial({
      limit: new Long(5),
    }),
  });
  console.log("markets", markets);

  // query all orders;
  const orders = await sdk.query.order.OrderAll({
    address: "",
    marketId: "",
    orderType: "",
    orderStatus: "",
    pagination: PageRequest.fromPartial({
      limit: new Long(5),
    }),
  });
  console.log("orders", orders);

  // query all profiles with pagination
  const profiles = await sdk.query.profile.ProfileAll({
    username: "",
    pagination: PageRequest.fromPartial({
      limit: new Long(5),
    }),
  });
  console.log("profiles", profiles);

  // query 10 latest blocks
  const blocksResponse = await sdk.query.misc.BlockAll({
    pagination: PageRequest.fromPartial({
      limit: new Long(5),
    }),
  });
  console.log("latest block", blocksResponse.blocks[0]);

  // query 10 latest transactions
  const txnsResponse = await sdk.query.misc.TransactionAll(
    QueryAllTransactionRequest.fromPartial({
      pagination: PageRequest.fromPartial({
        limit: new Long(5),
      }),
    })
  );
  console.log("latest txn", txnsResponse.transactions[0]);

  // query all transaction MessageTypes
  const messageTypeReponse = await sdk.query.misc.MessageTypeAll({
    pagination: PageRequest.fromPartial({
      limit: new Long(5),
    }),
  });
  console.log("message types", messageTypeReponse.messageTypes);

  const firstMessageType = messageTypeReponse.messageTypes[0]?.messageType;

  // filter transactions with MessageType
  const filteredTxns = await sdk.query.misc.TransactionAll(
    QueryAllTransactionRequest.fromPartial({
      msgTypeFilters: [firstMessageType],
      pagination: PageRequest.fromPartial({
        limit: new Long(5),
      }),
    })
  );
  console.log("filtered txns by messageType:", firstMessageType, filteredTxns.transactions[0]);

  // Tendermint Queries
  // Note: sdk.query.chain is an instance of BlockchainClient
  // BlockchainClient is a wrapper of StargateClient
  // StargateClient is a wrapper of Tendermint34Client

  // query latest block
  const block = await sdk.query.chain.getBlock();
  console.log("block", block);
  console.log("block tx hashes", block.txs.map(GenericUtils.computeTxHash));

  const txHash = GenericUtils.computeTxHash(block.txs[0])!;

  // get tx
  const txs = await sdk.query.chain.searchTx([{
    key: "tx.hash",
    value: txHash,
  }]);
  const [tx] = txs;
  console.log("tx", tx);
  console.log("tx hash", tx.hash);
  console.log("tx events", JSON.parse(tx.rawLog));

  // decode tx
  const decodedTx = CarbonTx.decode(tx.tx);
  console.log("tx decoded", JSON.stringify(decodedTx));
  console.log("tx msgs", decodedTx?.body?.messages);
})()
  .catch(console.error)
  .finally(() => process.exit(0));

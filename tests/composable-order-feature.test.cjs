/* eslint-disable @typescript-eslint/no-require-imports */
/* global __dirname, require */
const assert = require("node:assert/strict");
const path = require("node:path");
const test = require("node:test");

const root = path.resolve(__dirname, "..");

const ORDER_TYPE_URLS = {
  create: "/Switcheo.carbon.order.MsgCreateOrder",
  edit: "/Switcheo.carbon.order.MsgEditOrder",
  cancel: "/Switcheo.carbon.order.MsgCancelOrder",
  cancelAll: "/Switcheo.carbon.order.MsgCancelAll",
  setLeverage: "/Switcheo.carbon.leverage.MsgSetLeverage",
};

test("the order feature composes a focused query client over the shared RPC transport", async () => {
  const { composeQueries } = require(path.join(root, "lib/compose"));
  const { orderFeature } = require(path.join(root, "lib/features/order"));
  const { QueryGetOrderResponse } = require(path.join(root, "lib/codec/Switcheo/carbon/order/query"));
  const requests = [];
  const rpc = {
    async request(service, method, data) {
      requests.push({ service, method, data });
      return QueryGetOrderResponse.encode({}).finish();
    },
  };

  const query = composeQueries(rpc, [orderFeature]);
  await query.order.Order({ id: "order-1" });

  assert.equal(requests.length, 1);
  assert.equal(requests[0].service, "Switcheo.carbon.order.Query");
  assert.equal(requests[0].method, "Order");
  assert.ok(requests[0].data instanceof Uint8Array);
});

test("the order feature composes the existing transaction module without the full SDK", async () => {
  const { composeModules } = require(path.join(root, "lib/compose"));
  const { orderFeature } = require(path.join(root, "lib/features/order"));
  const sent = [];
  const wallet = {
    bech32Address: "swth1creator",
    async sendTx(message, options) {
      sent.push({ message, options });
      return { transactionHash: "ABC" };
    },
  };
  const provider = {
    getConnectedWallet: () => wallet,
    log: () => undefined,
  };

  const modules = composeModules(provider, [orderFeature]);
  const result = await modules.order.cancel({ id: "42" });

  assert.deepEqual(result, { transactionHash: "ABC" });
  assert.equal(sent.length, 1);
  assert.equal(sent[0].message.typeUrl, ORDER_TYPE_URLS.cancel);
  assert.equal(sent[0].message.value.creator, "swth1creator");
  assert.equal(sent[0].message.value.id, "42");
});

test("the order feature registry contains only its signing message types", () => {
  const { createFeatureRegistry } = require(path.join(root, "lib/compose"));
  const { orderFeature, OrderMessageTypeUrl } = require(path.join(root, "lib/features/order"));
  const orderTx = require(path.join(root, "lib/codec/Switcheo/carbon/order/tx"));
  const leverageTx = require(path.join(root, "lib/codec/Switcheo/carbon/leverage/tx"));

  const registry = createFeatureRegistry([orderFeature]);

  assert.deepEqual(OrderMessageTypeUrl, ORDER_TYPE_URLS);
  assert.equal(registry.lookupType(ORDER_TYPE_URLS.create), orderTx.MsgCreateOrder);
  assert.equal(registry.lookupType(ORDER_TYPE_URLS.edit), orderTx.MsgEditOrder);
  assert.equal(registry.lookupType(ORDER_TYPE_URLS.cancel), orderTx.MsgCancelOrder);
  assert.equal(registry.lookupType(ORDER_TYPE_URLS.cancelAll), orderTx.MsgCancelAll);
  assert.equal(registry.lookupType(ORDER_TYPE_URLS.setLeverage), leverageTx.MsgSetLeverage);
  assert.equal(registry.lookupType("/cosmos.authz.v1beta1.GenericAuthorization"), undefined);
  assert.equal(registry.lookupType("/cosmwasm.wasm.v1.MsgExecuteContract"), undefined);
});

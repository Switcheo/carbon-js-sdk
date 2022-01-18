import { Insights } from "@carbon-sdk/index";
import { TypeUtils } from "@carbon-sdk/util";
import { Network } from "./network";

type NodeNet = TypeUtils.SimpleMap<Insights.NodeItem[]>;

// Add hard-coded nodes here
export const nodesByNet: NodeNet = {
  [Network.MainNet]: [{
    nodeId: "shadowmainnet1",
    rpcUrl: "https://shadow-tm-api.carbon.network/",
    wsUrl: "wss://shadow-ws-api.carbon.network/ws",
    faucetUrl: "",
    insightsUrl: "https://api-insights.carbon.network",
    restUrl: "https://shadow-api.carbon.network",
    moniker: "Shadow Mainnet 1",
    appBuild: "mainnet",
    lastupdated: "2022-01-03T03:56:10.190Z",
    rpcUptime: "0",
    wsUptime: "0",
    insightUptime: "100",
    tmWsUrl: "wss://shadow-tm-api.carbon.network/"
  }, {
    nodeId: "shadowmainnet2",
    rpcUrl: "http://18.139.169.234:26657",
    wsUrl: "ws://18.139.169.234:5000/ws",
    faucetUrl: "",
    insightsUrl: "https://api-insights.carbon.network",
    restUrl: "http://18.139.169.234:1317",
    moniker: "Shadow Mainnet 2",
    appBuild: "mainnet",
    lastupdated: "2022-01-03T03:56:10.190Z",
    rpcUptime: "0",
    wsUptime: "0",
    insightUptime: "100",
    tmWsUrl: "wss://shadow-tm-api.carbon.network/"
  }],
  [Network.DevNet]: [{
    nodeId: "devnetlatest",
    rpcUrl: "https://dev39911-tm-api.carbon.network",
    wsUrl: "wss://dev39911-ws-api.carbon.network/ws",
    faucetUrl: "",
    insightsUrl: "https://api-insights.carbon.network",
    restUrl: "https://dev39911-api.carbon.network",
    moniker: "Devnet Latest",
    appBuild: "devnet",
    lastupdated: "2022-01-17T10:00:00.190Z",
    rpcUptime: "0",
    wsUptime: "0",
    insightUptime: "100",
    tmWsUrl: "wss://dev39911-tm-api.carbon.network/"
  }],
};

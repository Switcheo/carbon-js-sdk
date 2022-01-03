import { Insights } from "@carbon-sdk/index";
import { TypeUtils } from "@carbon-sdk/util";
import { Network } from "./network";

type NodeNet = TypeUtils.SimpleMap<Insights.NodeItem[]>;

// Add hard-coded nodes here
export const nodesByNet: NodeNet = {
  [Network.MainNet]: [{
    nodeId: "shadowmainnet1",
    rpcUrl: "https://54.255.76.60:26657",
    wsUrl: "ws://54.255.76.60:5000/ws",
    faucetUrl: "",
    insightsUrl: "https://api-insights.carbon.network",
    restUrl: "https://54.255.76.60:1317",
    moniker: "Shadow Mainnet 1",
    appBuild: "mainnet",
    lastupdated: "2022-01-03T03:56:10.190Z",
    rpcUptime: "0",
    wsUptime: "0",
    insightUptime: "100",
  }, {
    nodeId: "shadowmainnet2",
    rpcUrl: "https://18.139.169.234:26657",
    wsUrl: "ws://18.139.169.234:5000/ws",
    faucetUrl: "",
    insightsUrl: "https://api-insights.carbon.network",
    restUrl: "https://18.139.169.234:1317",
    moniker: "Shadow Mainnet 2",
    appBuild: "mainnet",
    lastupdated: "2022-01-03T03:56:10.190Z",
    rpcUptime: "0",
    wsUptime: "0",
    insightUptime: "100",
  }],
};

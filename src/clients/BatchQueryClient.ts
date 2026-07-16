import { HttpBatchClient, HttpBatchClientOptions, HttpEndpoint } from "@cosmjs/tendermint-rpc";

export interface BatchQueryClientOptions extends HttpBatchClientOptions { }

class BatchQueryClient extends HttpBatchClient {
  public constructor(endpoint: string | HttpEndpoint, options: Partial<BatchQueryClientOptions> = {}) {
    const normalizedEndpoint = typeof endpoint === "string" && !endpoint.includes("://")
      ? `http://${endpoint}`
      : endpoint;
    super(normalizedEndpoint, options);
  }
}

export default BatchQueryClient;

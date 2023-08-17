import { GrpcQueryClient } from "@carbon-sdk/util/type";
import * as grpc from "@grpc/grpc-js";

const PASS_THROUGH_SERIALIZE = (bytes: Uint8Array) => Buffer.from(bytes);
const PASS_THROUGH_DESERIALIZE = (buffer: Buffer) => new Uint8Array(buffer);

export class GrpcNodeQueryClient implements GrpcQueryClient {
  private host: string;
  private options: {
    metadata?: grpc.Metadata;
  };
  private client: grpc.Client;

  constructor(
    host: string,
    options: {
      metadata?: grpc.Metadata;
    } = {}
  ) {
    this.host = host;
    this.options = options;

    this.client = new grpc.Client(this.host, grpc.credentials.createSsl());
  }

  request(serviceName: string, methodName: string, data: Uint8Array): Promise<Uint8Array> {

    return new Promise((resolve, reject) => {
      const method = `/${serviceName}/${methodName}`;
      const metadata: grpc.Metadata = this.options.metadata ?? grpc.Metadata.fromHttp2Headers({});
      this.client.makeUnaryRequest(method, PASS_THROUGH_SERIALIZE, PASS_THROUGH_DESERIALIZE, data, metadata, (error, result) => {
        if (error || !result) {
          reject(error)
        } else {
          resolve(result)
        }
      });
    });
  }
}

export default GrpcNodeQueryClient;

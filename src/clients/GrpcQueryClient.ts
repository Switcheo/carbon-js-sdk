import { ProtobufRpcClient } from "@cosmjs/stargate";
import { grpc } from "@improbable-eng/grpc-web";
import { NodeHttpTransport } from "@improbable-eng/grpc-web-node-http-transport";

export class GrpcWebError extends Error {
  constructor(message: string, public code: grpc.Code, public metadata: grpc.Metadata) {
    super(message);
  }
}

const passThrough = (incoming: Uint8Array) => incoming;
const passThroughBuffer = (incoming: Uint8Array) => Buffer.from(incoming);

export class GrpcQueryClient implements ProtobufRpcClient {
  private host: string;
  private options: {
    transport?: grpc.TransportFactory;

    metadata?: grpc.Metadata;
  };
  private useGrpcJs: boolean;

  constructor(
    host: string,
    options: {
      transport?: grpc.TransportFactory;

      metadata?: grpc.Metadata;
    } = {}
  ) {
    this.host = host;
    this.options = options;
    this.useGrpcJs = GrpcQueryClient.hasNodeGrpc() && typeof window === "undefined";
  }

  static hasNodeGrpc(): boolean {
    try {
      return require("@grpc/grpc-js").version; // eslint-disable-line 
    } catch (error) {
      return false;
    }
  }

  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array> {
    return this.useGrpcJs ? this._requestGrpc(service, method, data) : this._requestGrpcWeb(service, method, data);
  }

  _requestGrpc(service: string, method: string, data: Uint8Array): Promise<Uint8Array> {
    const path = ["", service, method].join("/");
    try {
      const { credentials, makeGenericClientConstructor } = require("@grpc/grpc-js"); // eslint-disable-line 

      const client = new (makeGenericClientConstructor({
        runQuery: {
          path,
          requestStream: false,
          responseStream: false,
          requestSerialize: passThroughBuffer,
          requestDeserialize: passThrough,
          responseSerialize: passThroughBuffer,
          responseDeserialize: passThrough,
        }
      }, service))(this.host, credentials.createSsl());

      return new Promise((resolve, reject) => {
        client.runQuery(data, (error: Error, value: Uint8Array) => {
          if (error) reject(error)
          else resolve(value);
        })
      })
    } catch (error) {
      if (error?.message?.startsWith?.("Cannot find module '@grpc/grpc-js'")) {
        throw new Error("Please install @grpc/grpc-js, refer to README.md for more information.");
      }
      throw error;
    }
  }

  /**
   * Uses grpc-web module on cosmos-sdk to simulate gRPC queries
   * throught HTTP/1.1.
   * see https://github.com/cosmos/cosmos-sdk/issues/7345
   */
  _requestGrpcWeb(serviceName: string, methodName: string, data: Uint8Array): Promise<Uint8Array> {
    return new Promise((resolve, reject) => {
      grpc.unary({
        methodName,
        service: { serviceName },
        requestStream: false,
        responseStream: false,
        requestType: {} as any,
        responseType: {
          deserializeBinary: (data: Uint8Array) => data,
        } as any,
      }, {
        request: {
          ...data,
          toObject: () => data,
          serializeBinary: () => data,
        },
        host: this.host,
        metadata: this.options.metadata,
        transport: NodeHttpTransport(),
        debug: false,
        onEnd: function (response) {
          if (response.status === grpc.Code.OK) {
            resolve(response.message as unknown as Uint8Array);
          } else {
            const err = new Error(response.statusMessage) as any;
            err.code = response.status;
            err.metadata = response.trailers;
            reject(err);
          }
        },
      });
    });
  }
}

export default GrpcQueryClient;

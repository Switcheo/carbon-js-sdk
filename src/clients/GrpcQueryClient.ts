import { ProtobufRpcClient } from "@cosmjs/stargate";
import { credentials, makeGenericClientConstructor } from "@grpc/grpc-js";
import { grpc } from "@improbable-eng/grpc-web";

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

  constructor(
    host: string,
    options: {
      transport?: grpc.TransportFactory;

      metadata?: grpc.Metadata;
    } = {}
  ) {
    this.host = host;
    this.options = options;
  }

  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array> {
    const isNode = typeof window === "undefined";
    return isNode ? this._requestGrpc(service, method, data) : this._requestGrpcWeb(service, method, data);
  }

  _requestGrpc(service: string, method: string, data: Uint8Array): Promise<Uint8Array> {
    const path = ["", service, method].join("/");

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
        transport: this.options.transport,
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

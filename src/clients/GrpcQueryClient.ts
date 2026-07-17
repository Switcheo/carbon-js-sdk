import { ProtobufRpcClient } from "@cosmjs/stargate";
import * as grpcWebNamespace from "@improbable-eng/grpc-web";
import type { grpc as GrpcTypes } from "@improbable-eng/grpc-web";

type GrpcWebModule = { grpc: typeof GrpcTypes };
const grpcWebModule = (
  "grpc" in grpcWebNamespace
    ? grpcWebNamespace
    : (grpcWebNamespace as unknown as { default: GrpcWebModule }).default
) as GrpcWebModule;
const { grpc } = grpcWebModule;

export class GrpcWebError extends Error {
  constructor(message: string, public code: GrpcTypes.Code, public metadata: GrpcTypes.Metadata) {
    super(message);
  }
}

/**
 * Uses grpc-web module on cosmos-sdk to simulate gRPC queries
 * throught HTTP/1.1.
 * see https://github.com/cosmos/cosmos-sdk/issues/7345
 */
export class GrpcQueryClient implements ProtobufRpcClient {
  private host: string;
  private options: {
    transport?: GrpcTypes.TransportFactory;

    metadata?: GrpcTypes.Metadata;
  };

  constructor(
    host: string,
    options: {
      transport?: GrpcTypes.TransportFactory;

      metadata?: GrpcTypes.Metadata;
    } = {}
  ) {
    this.host = host;
    this.options = options;
  }

  request(serviceName: string, methodName: string, data: Uint8Array): Promise<Uint8Array> {
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

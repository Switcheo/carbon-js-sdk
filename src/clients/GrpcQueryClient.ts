import { ProtobufRpcClient } from "@cosmjs/stargate";
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";

interface UnaryMethodDefinitionishR extends grpc.UnaryMethodDefinition<any, any> {
  requestStream: any;
  responseStream: any;
}

type UnaryMethodDefinitionish = UnaryMethodDefinitionishR;

export class GrpcWebError extends Error {
  constructor(message: string, public code: grpc.Code, public metadata: grpc.Metadata) {
    super(message);
  }
}

export class GrpcQueryClient implements ProtobufRpcClient {
  private host: string;
  private options: {
    transport?: grpc.TransportFactory;

    debug?: boolean;
    metadata?: grpc.Metadata;
  };

  constructor(
    host: string,
    options: {
      transport?: grpc.TransportFactory;

      debug?: boolean;
      metadata?: grpc.Metadata;
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
        responseType: {} as any,
      }, {
        request: {
          ...data,
          toObject: () => data,
          serializeBinary: () => data,
        },
        host: this.host,
        metadata: this.options.metadata,
        transport: this.options.transport,
        debug: this.options.debug,
        onEnd: function (response) {
          console.log("xx onEnd response", response)
          if (response.status === grpc.Code.Unknown && response.statusMessage === "Response closed without grpc-status (Headers only)") {
            resolve(new Uint8Array())
          } else if (response.status === grpc.Code.OK) {
            resolve(response.message as unknown as Uint8Array);
          } else {
            console.error(response)
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

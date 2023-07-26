import { GrpcWebClientBase, MethodDescriptor, MethodType } from "grpc-web";

const GENERIC_METHOD_DESCRIPTOR = new MethodDescriptor("", MethodType.UNARY, Uint8Array, Uint8Array, (req: Uint8Array) => req, (rsp: Uint8Array) => rsp);
type GrpcClient = any;

class GrpcQueryClient {
  private config: {
    isXhr: true;
    client: GrpcWebClientBase;
    url: string;
  } | {
    isXhr: false;
    client: GrpcClient;
  };

  constructor(url: string, isInsecure: boolean = false) {
    if (typeof XMLHttpRequest === "function") {
      // web grpc client
      this.config = {
        isXhr: true,
        client: new GrpcWebClientBase({
          withCredentials: !isInsecure,
        }),
        url,
      }
    } else {
      throw new Error("GrpcQueryClient is not available on node environment yet.");
      // nodejs grpc client
      // lazy import to avoid loading http2 module on web
      // const { Client, credentials } = require("@grpc/grpc-js");
      // this.config = {
      //   isXhr: false,
      //   client: new Client(url, isInsecure ? credentials.createInsecure() : credentials.createSsl()),
      // }
    }
  }

  serializeRequest = (value: Uint8Array) => {
    return value as Buffer
  }
  deserializeResponse = (buffer: Buffer) => {
    return buffer
  }

  async request(service: string, method: string, data: Uint8Array): Promise<Uint8Array> {
    return new Promise((resolve, reject) => {
      if (this.config.isXhr) {
        this.config.client.thenableCall<Uint8Array, Uint8Array>(
          `${this.config.url}/${service}/${method}`,
          data,
          {},
          GENERIC_METHOD_DESCRIPTOR,
        ).then(resolve).catch(reject);
      } else {
        this.config.client.makeUnaryRequest(
          `/${service}/${method}`,
          this.serializeRequest,
          this.deserializeResponse,
          data,
          (err: Error, value: Uint8Array) => {
            if (err)
              reject(err)
            else
              resolve(value ?? new Uint8Array())
          })
      }
    })
  }
}

export default GrpcQueryClient;

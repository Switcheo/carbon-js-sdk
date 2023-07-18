import { ChannelCredentials, Client, credentials } from "@grpc/grpc-js";

class GrpcQueryClient extends Client {
  constructor(url: string, creds: ChannelCredentials = credentials.createSsl()) {
    super(url, creds);
  }

  serializeRequest = (value: Uint8Array) => {
    return value as Buffer
  }
  deserializeResponse = (buffer: Buffer) => {
    return buffer
  }

  async request(service: string, method: string, data: Uint8Array): Promise<Uint8Array> {
    return new Promise((resolve, reject) => {
      this.makeUnaryRequest(
        `/${service}/${method}`,
        this.serializeRequest,
        this.deserializeResponse,
        data,
        (err, value) => {
          if (err)
            reject(err)
          else
            resolve(value ?? new Uint8Array())
        })
    })
  }
}

export default GrpcQueryClient;

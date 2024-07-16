/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Observable } from "rxjs";
import { Empty } from "../google/protobuf/empty";
import { map } from "rxjs/operators";
import { Vote } from "../tendermint/oracle/types";

export const protobufPackage = "oraclesvc";

/** Query defines the gRPC querier service. */
export interface Query {
  StreamOracleData(request: Observable<Vote>): Promise<Empty>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.StreamOracleData = this.StreamOracleData.bind(this);
  }
  StreamOracleData(request: Observable<Vote>): Promise<Empty> {
    const data = request.pipe(map((request) => Vote.encode(request).finish()));
    const promise = this.rpc.clientStreamingRequest(
      "oraclesvc.Query",
      "StreamOracleData",
      data
    );
    return promise.then((data) => Empty.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
  clientStreamingRequest(
    service: string,
    method: string,
    data: Observable<Uint8Array>
  ): Promise<Uint8Array>;
  serverStreamingRequest(
    service: string,
    method: string,
    data: Uint8Array
  ): Observable<Uint8Array>;
  bidirectionalStreamingRequest(
    service: string,
    method: string,
    data: Observable<Uint8Array>
  ): Observable<Uint8Array>;
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

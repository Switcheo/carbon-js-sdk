import BaseModule from "./base";

export class OracleModule extends BaseModule {
}

export namespace OracleModule {
  export interface CreateVoteParams {
    oracleId: string;
    timestamp: number;
    data: string;
  }
}

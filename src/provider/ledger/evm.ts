interface Signature {
  v: string,
  s: string,
  r: string,
}

export interface EthApp {
  getAddress(
    path: string,
    boolDisplay?: boolean,
    boolChaincode?: boolean,
  ): Promise<{
    publicKey: string
    address: string
    chainCode?: string
  }>
  signTransaction(path: string, messageHex: string): Promise<Signature>
  transport: {
    close(): Promise<void>
  }
}

export interface EvmLedger {
  readonly ethApp: EthApp;
  getBIP44Path(): string;
  signTransaction(msg: string, bip44String?: string): Promise<string>;
}
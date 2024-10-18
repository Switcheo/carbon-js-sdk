export interface EthApp {
  transport: {
    close(): Promise<void>
  }
}

export interface EvmLedger {
  readonly ethApp: EthApp;
  getBIP44Path(): string
  signTransaction(msg: string, bip44String?: string): Promise<string>;
}
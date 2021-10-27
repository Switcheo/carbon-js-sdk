import { ethers } from 'ethers'
import { EthLedgerAccount } from './EthLedgerAccount'

export class EthLedgerSigner extends ethers.Signer {
  public readonly ledger: EthLedgerAccount

  constructor(provider: ethers.providers.Provider, ledger: EthLedgerAccount) {
    super()
    ethers.utils.defineReadOnly(this, 'provider', provider)
    this.ledger = ledger
  }

  connect(): EthLedgerSigner { // eslint-disable-line class-methods-use-this
    throw new Error('invalid instantiation')
  }

  async getAddress() {
    return this.ledger.displayAddress
  }

  private parseTx(tx: ethers.providers.TransactionRequest): ethers.UnsignedTransaction {
    const { from, ...txProps } = tx
    return {
      ...txProps,
      nonce: parseInt(tx.nonce?.toString() ?? '0', 10)
    }
  }
  private serializeTx(tx: ethers.providers.TransactionRequest): string {
    return ethers.utils.serializeTransaction(this.parseTx(tx))
  }

  async sendTransaction(transaction: ethers.providers.TransactionRequest): Promise<ethers.providers.TransactionResponse> {
    const signature = await this.signTransaction(transaction)
    const unsignedTx = this.parseTx(transaction)
    const signedTx = ethers.utils.serializeTransaction(unsignedTx, signature)
    const txResponse = this.provider!.sendTransaction(signedTx)
    return txResponse
  }

  async signTransaction(transaction: ethers.providers.TransactionRequest): Promise<string> {
    const tx = await ethers.utils.resolveProperties(transaction)
    const unsignedTx = this.serializeTx(tx)
    const bipString = this.ledger.getBIP44Path()
    const signatureResult = await this.ledger.ethApp.signTransaction(bipString, unsignedTx.substring(2))
    const signature = ethers.utils.joinSignature({
      v: parseInt(signatureResult.v, 16),
      r: `0x${signatureResult.r}`,
      s: `0x${signatureResult.s}`,
    })
    return signature
  }

  async signMessage(message: string): Promise<string> {
    if (message.startsWith('0x')) {
      message = message.substring(2) // eslint-disable-line no-param-reassign
    }
    const signature = await this.ledger.sign(message)
    return signature
  }
}

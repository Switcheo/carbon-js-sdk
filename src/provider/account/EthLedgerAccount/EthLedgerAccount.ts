import { AddressOptions, ETHAddress } from '@carbon-sdk/util/address'
import { getLedgerTransport } from '@carbon-sdk/util/ledger'
import EthApp from '@ledgerhq/hw-app-eth'
import { ethers } from 'ethers'

const CONNECT_POLL_INTERVAL = 3000 // ms
const CONNECT_POLL_ATTEMPTS = 10 // attempts

const COIN_TYPE = ETHAddress.coinType()

export class EthLedgerAccount {

  public options: AddressOptions = {}
  public readonly publicKey: string
  public readonly scriptHash: string
  public readonly displayAddress: string

  public readonly ethApp: typeof EthApp

  private static _connectPolling = false

  // private key derivation path specified under BIP 44
  private bip44String?: string

  private constructor(ethApp: typeof EthApp, publicKey: string, address: string, bip44String?: string) {
    this.ethApp = ethApp
    this.publicKey = publicKey
    this.scriptHash = ETHAddress.publicKeyToScriptHash(publicKey)
    this.displayAddress = address
    this.bip44String = bip44String
  }

  static async connect() {
    // const usbDevices = await this.getUSBDevices()

    // const usbDevice = usbDevices?.[0] ?? ''
    let connectResult: [typeof EthApp, string, string] | null = null
    let connectionAttempts = 0

    EthLedgerAccount._connectPolling = true

    while (connectionAttempts < CONNECT_POLL_ATTEMPTS) {
      connectionAttempts++

      // external signal to stop polling (e.g. timeout)
      // exit loop
      if (!EthLedgerAccount._connectPolling) {
        break
      }

      // attempt ccnnect
      connectResult = await new Promise((resolve, reject) => {
        let timedOut = false

        // start timeout to kill connection when interval duration
        // is reached. Kills connection by resolving 
        let timeoutId = setTimeout(() => {
          // set timeout to true so that if connection is successful
          // after timeout, it can be ignored.
          timedOut = true

          // returns null result to indicate connection failure
          resolve(null)
        }, CONNECT_POLL_INTERVAL)

        EthLedgerAccount.tryConnect().then(result => {
          // check for timeout signal, abandon result if timed out
          if (timedOut) return

          // clear timeout timer, so it doesn't trigger timeout action
          clearTimeout(timeoutId)

          // return positive connection result
          resolve(result)
        }).catch(reject)
      })

      // connection successful, exit loop
      if (connectResult) {
        break
      }
    }

    // failed to connect after specified timeout
    if (!connectResult) {
      throw new Error('Failed to connect with USB device, please try again.')
    }

    const [ledger, publicKey, address] = connectResult
    return new EthLedgerAccount(ledger, publicKey, address)
  }

  /**
   * Used to try connecting with ledger, executes a public key request
   * on USB device to detect ETH app connection
   */
  private static async tryConnect(): Promise<[typeof EthApp, string, string]> {
    try {
      const transport = await getLedgerTransport()

      // get public key to assert that NEO app is open
      const ethApp = new EthApp(transport)
      const bipString = EthLedgerAccount.getETHBIP44String()
      const { publicKey, address } = await ethApp.getAddress(bipString)

      return [ethApp, publicKey, address]
    } catch (err) {
      console.error(err)
      if (err instanceof Error) {
        if (err.message) {
          throw new Error('ETH app is not open')
        }
      }
      throw err
    }
  }

  async changeBIP44Path(bip44String: string) {
    const { publicKey, address } = await this.ethApp.getAddress(bip44String)
    return new EthLedgerAccount(this.ethApp, publicKey, address, bip44String)
  }

  getBIP44Path(): string {
    return this.getBIP44String()
  }

  configureAddress(options: AddressOptions) {
    this.options = options
  }

  async fetchAddress(bip44String?: string): Promise<string> {
    const bipString = this.getBIP44String(bip44String)
    const { address } = await this.useEthApp().getAddress(bipString)
    return address
  }

  public static getETHBIP44String(address = 0, change = COIN_TYPE, account = 44): string {
    // Ledger Live uses 44'/60'/x'/0/0
    return `${account}'/${change}'/${address}'/0/0`
  }
  public static getETHShortBIP44String(address = 0, change = COIN_TYPE, account = 44): string {
    // Ledger MEW / MyCrypto uses 44'/60'/0'/x
    return `${account}'/${change}'/0'/${address}`
  }

  async privateKey(): Promise<string> {
    throw new Error('Cannot retrieve private key from Ledger')
  }

  async sign(msg: string, bip44String?: string) {
    const bipString = this.getBIP44String(bip44String)
    const ethApp = this.useEthApp()
    const result = await ethApp.signPersonalMessage(bipString, msg)
    const signature = ethers.utils.joinSignature({
      v: result.v,
      r: `0x${result.r}`,
      s: `0x${result.s}`,
    })
    return signature
  }

  async signTransaction(msg: string, bip44String?: string) {
    const bipString = this.getBIP44String(bip44String)
    const ethApp = this.useEthApp()
    const result = await ethApp.signTransaction(bipString, msg)
    const signature = ethers.utils.joinSignature({
      v: parseInt(result.v, 16),
      r: `0x${result.r}`,
      s: `0x${result.s}`,
    })
    return signature
  }

  private getBIP44String(overrideBIP44?: string) {
    return overrideBIP44 ?? this.bip44String ?? EthLedgerAccount.getETHBIP44String()
  }

  private useEthApp() {
    if (!this.ethApp) {
      throw new Error('Ledger is not initialized')
    }

    return this.ethApp
  }
}

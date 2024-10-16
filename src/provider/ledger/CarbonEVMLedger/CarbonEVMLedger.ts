import type Transport from "@ledgerhq/hw-transport";
import { log } from "@ledgerhq/logs";

import { ethers } from "ethers";

import { decodeTxInfo, splitPath } from "./utils";

const defaultPath: string = "m/44'/118'/0'/0/0";

function waiter(duration: number): Promise<void> {
  return new Promise((resolve) => {
      setTimeout(resolve, duration);
  });
}

class CarbonEVMLedger {
  transport: Transport;
  private path: string;

  constructor(transport: Transport, path: string = defaultPath, scrambleKey = "w0w") {
    this.path = path;
    this.transport = transport;
    transport.decorateAppAPIMethods(
      this,
      [
        // "getChallange",                  | ⚠️
        // "provideERC20TokenInformation",  | Those methods are not decorated as they're
        // "setExternalPlugin",             | being used inside of the `signTransaction` flow
        // "setPlugin",                     | and shouldn't be locking the transport
        // "provideDomainName",             | ⚠️
        // "provideNFTInformation",         |
        "getAddress",
        "signTransaction",
        "signEIP712Tx",
      ],
      scrambleKey,
    );
  }

  _retry<T = any>(callback: () => Promise<T>, timeout?: number): Promise<T> {
    return new Promise(async (resolve, reject) => {
      if (timeout && timeout > 0) {
          setTimeout(() => { reject(new Error("timeout")); }, timeout);
      }

      // Wait up to 5 seconds
      for (let i = 0; i < 50; i++) {
          try {
              const result = await callback();
              return resolve(result);
          } catch (error) {
              if (error.id !== "TransportLocked") {
                  return reject(error);
              }
          }
          await waiter(100);
      }

      return reject(new Error("timeout"));
    });
  }

  async signEIP712Tx(transaction: ethers.providers.TransactionRequest): Promise<string> {
    const tx = await ethers.utils.resolveProperties(transaction);
    const baseTx: ethers.utils.UnsignedTransaction = {
        chainId: (tx.chainId || undefined),
        data: (tx.data || undefined),
        gasLimit: (tx.gasLimit || undefined),
        gasPrice: (tx.gasPrice || undefined),
        nonce: (tx.nonce ? ethers.BigNumber.from(tx.nonce).toNumber(): undefined),
        to: (tx.to || undefined),
        value: (tx.value || undefined),
    };

    const unsignedTx = ethers.utils.serializeTransaction(baseTx).substring(2);
    const sig = await this._retry(() => this.signTransaction(this.path, unsignedTx));

    return ethers.utils.serializeTransaction(baseTx, {
        v: ethers.BigNumber.from("0x" + sig.v).toNumber(),
        r: ("0x" + sig.r),
        s: ("0x" + sig.s),
    });
  }

  /**
   * You can sign a transaction and retrieve v, r, s given the raw transaction and the BIP 32 path of the account to sign.
   *
   * @param path: the BIP32 path to sign the transaction on
   * @param rawTxHex: the raw ethereum transaction in hexadecimal to sign
   * @param resolution: resolution is an object with all "resolved" metadata necessary to allow the device to clear sign information. This includes: ERC20 token information, plugins, contracts, NFT signatures,... You must explicitly provide something to avoid having a warning. By default, you can use Ledger's service or your own resolution service. See services/types.js for the contract. Setting the value to "null" will fallback everything to blind signing but will still allow the device to sign the transaction.
   * @example
   import { ledgerService } from "@ledgerhq/hw-app-eth"
   const tx = "e8018504e3b292008252089428ee52a8f3d6e5d15f8b131996950d7f296c7952872bd72a2487400080"; // raw tx to sign
   const resolution = await ledgerService.resolveTransaction(tx);
   const result = eth.signTransaction("44'/60'/0'/0/0", tx, resolution);
   console.log(result);
   */
   async signTransaction(
    path: string,
    rawTxHex: string,
  ): Promise<{
    s: string;
    v: string;
    r: string;
  }> {

    const rawTx = Buffer.from(rawTxHex, "hex");
    const { vrsOffset, txType, chainId, chainIdTruncated } = decodeTxInfo(rawTx);

    const paths = splitPath(path);
    let response;
    let offset = 0;
    while (offset !== rawTx.length) {
      const first = offset === 0;
      const maxChunkSize = first ? 150 - 1 - paths.length * 4 : 150;
      let chunkSize = offset + maxChunkSize > rawTx.length ? rawTx.length - offset : maxChunkSize;

      if (vrsOffset != 0 && offset + chunkSize >= vrsOffset) {
        // Make sure that the chunk doesn't end right on the EIP 155 marker if set
        chunkSize = rawTx.length - offset;
      }

      const buffer = Buffer.alloc(first ? 1 + paths.length * 4 + chunkSize : chunkSize);

      if (first) {
        buffer[0] = paths.length;
        paths.forEach((element, index) => {
          buffer.writeUInt32BE(element, 1 + 4 * index);
        });
        rawTx.copy(buffer, 1 + 4 * paths.length, offset, offset + chunkSize);
      } else {
        rawTx.copy(buffer, 0, offset, offset + chunkSize);
      }

      response = await this.transport
        .send(0xe0, 0x04, first ? 0x00 : 0x80, 0x00, buffer)
        .catch(e => {
          throw (e as Error).message;
        });

      offset += chunkSize;
    }
    if (!response) {
      throw new Error('Something went wrong');
    }

    const response_byte: number = response[0];
    let v = "";

    if (chainId.times(2).plus(35).plus(1).isGreaterThan(255)) {
      const oneByteChainId = (chainIdTruncated * 2 + 35) % 256;

      const ecc_parity = Math.abs(response_byte - oneByteChainId);

      if (txType != null) {
        // For EIP2930 and EIP1559 tx, v is simply the parity.
        v = ecc_parity % 2 == 1 ? "00" : "01";
      } else {
        // Legacy type transaction with a big chain ID
        v = chainId.times(2).plus(35).plus(ecc_parity).toString(16);
      }
    } else {
      v = response_byte.toString(16);
    }

    // Make sure v has is prefixed with a 0 if its length is odd ("1" -> "01").
    if (v.length % 2 == 1) {
      v = "0" + v;
    }

    const r = response.slice(1, 1 + 32).toString("hex");
    const s = response.slice(1 + 32, 1 + 32 + 32).toString("hex");
    return { v, r, s };
  }

  /**
   * Method returning a 4 bytes TLV challenge as an hexa string
   *
   * @returns {Promise<string>}
   */
  async getChallenge(): Promise<string> {
    enum APDU_FIELDS {
      CLA = 0xe0,
      INS = 0x20,
      P1 = 0x00,
      P2 = 0x00,
      LC = 0x00,
    }
    return this.transport
      .send(APDU_FIELDS.CLA, APDU_FIELDS.INS, APDU_FIELDS.P1, APDU_FIELDS.P2)
      .then(res => {
        const [, fourBytesChallenge, statusCode] =
          new RegExp("(.*)(.{4}$)").exec(res.toString("hex")) || [];

        if (statusCode !== "9000") {
          throw new Error(
            `An error happened while generating the challenge. Status code: ${statusCode}`,
          );
        }
        return `0x${fourBytesChallenge}`;
      })
      .catch(e => {
        log("error", "couldn't request a challenge", e);
        throw e;
      });
  }

  /**
   * provides a domain name (like ENS) to be displayed during transactions in place of the address it is associated to. It shall be run just before a transaction involving the associated address that would be displayed on the device.
   *
   * @param data an stringied buffer of some TLV encoded data to represent the domain
   * @returns a boolean
   */
  async provideDomainName(data: string): Promise<boolean> {
    enum APDU_FIELDS {
      CLA = 0xe0,
      INS = 0x22,
      P1_FIRST_CHUNK = 0x01,
      P1_FOLLOWING_CHUNK = 0x00,
      P2 = 0x00,
    }
    const buffer = Buffer.from(data, "hex");
    const payload = Buffer.concat([Buffer.from(intAsHexBytes(buffer.length, 2), "hex"), buffer]);

    const bufferChunks = new Array(Math.ceil(payload.length / 256))
      .fill(null)
      .map((_, i) => payload.slice(i * 255, (i + 1) * 255));
    for (const chunk of bufferChunks) {
      const isFirstChunk = chunk === bufferChunks[0];
      await this.transport.send(
        APDU_FIELDS.CLA,
        APDU_FIELDS.INS,
        isFirstChunk ? APDU_FIELDS.P1_FIRST_CHUNK : APDU_FIELDS.P1_FOLLOWING_CHUNK,
        APDU_FIELDS.P2,
        chunk,
      );
    }

    return true;
  }
}

export default CarbonEVMLedger

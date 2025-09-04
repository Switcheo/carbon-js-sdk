export function toUint8Array(input: Uint8Array | Buffer): Uint8Array {
  if (input instanceof Buffer) {
    return new Uint8Array(input.buffer, input.byteOffset, input.byteLength)
  }
  return input
}

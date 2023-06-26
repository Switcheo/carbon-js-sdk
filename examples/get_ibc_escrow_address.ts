import { AddressUtils } from "../lib";
import crypto from 'crypto';
import "./_setup";

function getEscrowAddress(portID: string, channelID: string, prefix: string) {
  const version = 'ics20-1';
  const contents = `${portID}/${channelID}`;
  const preImage = Buffer.concat([Buffer.from(version, 'utf8'), Buffer.from([0]), Buffer.from(contents, 'utf8')]);
  const hash = crypto.createHash('sha256').update(preImage).digest();
  return AddressUtils.SWTHAddress.encode(Buffer.from(hash).toString('hex'), { bech32Prefix: prefix });
}

// only need to change channel and prefix 
const channel = 'channel-123'
const prefix = 'stars'

const address = getEscrowAddress('transfer', channel, prefix);
console.log("Escrow Address: ", address);

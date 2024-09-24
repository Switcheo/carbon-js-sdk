import { AminoMsg, StdSignDoc } from "@cosmjs/amino";
import { StdFee } from "@cosmjs/stargate";

type MsgSignData = {
  // cosmos bech32
  signer: string
  // base64 encoded
  data: string
}
export const constructAdr36SignDoc = (address: string, message: string): StdSignDoc => {
  const msgSignData: MsgSignData = constructMsgSignData(address, message)
  const msgs: AminoMsg[] = [{ type: 'sign/MsgSignData', value: msgSignData }]
  const fee: StdFee = {
    gas: '0',
    amount: [],
  }
  const signDoc: StdSignDoc = {
    chain_id: '',
    account_number: '0',
    sequence: '0',
    fee,
    msgs,
    memo: '',
  }
  return signDoc
}

export const constructMsgSignData = (address: string, message: string): MsgSignData => {
  return { signer: address, data: Buffer.from(message).toString('base64') }
}
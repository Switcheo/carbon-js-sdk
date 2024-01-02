import { TxTypes } from "@carbon-sdk/codec"
import { UNAUTHORIZED_MSGS } from "./tx"

export const AuthorizedSignlessMsgs = Object.values(TxTypes)
  .filter((msg: string) => !UNAUTHORIZED_MSGS.includes(msg) && !msg.endsWith("Response")) ?? []
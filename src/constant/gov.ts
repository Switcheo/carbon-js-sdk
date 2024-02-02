import { Network } from "./network";

export const GovModuleAddress = {
  [Network.MainNet]: "swth10d07y265gmmuvt4z0w9aw880jnsr700j9uen92",
  [Network.TestNet]: "tswth10d07y265gmmuvt4z0w9aw880jnsr700jptgru0",
  [Network.DevNet]: "swth10d07y265gmmuvt4z0w9aw880jnsr700j9uen92",
  [Network.LocalHost]: "tswth10d07y265gmmuvt4z0w9aw880jnsr700jptgru0",
} as const;
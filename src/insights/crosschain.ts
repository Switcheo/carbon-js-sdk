import { QueryByTimeRequest } from "./common";


export interface QueryCrosschainVolumeRequest extends QueryByTimeRequest { }

export interface CrossChainVolume {
  absoluteVolume: string
  netVolume: string
  inflow: string
  outflow: string
  denom: string
}

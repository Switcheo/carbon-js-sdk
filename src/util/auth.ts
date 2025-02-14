import { Network } from '@carbon-sdk/constant'
import dayjs from 'dayjs'

import { DEFAULT_PUBLIC_KEY_MESSAGE } from './evm'
export const expirybufferSeconds = 30

export type AccessTokenResponse = {
  access_token: string
  token_type: string
  expires_in: number
  expires_at: number
  refresh_token: string
}

export enum GrantType {
  SignatureCosmos = 'signature_cosmos',
  SignatureEth = 'signature_eth',
  RefreshToken = 'refresh_token',
}

export type GrantRequest = {
  grant_type: GrantType
} & ({
  message?: string
  public_key?: string
  signature?: string
  refresh_token: string
} | {
  message: string
  public_key: string
  signature: string
  refresh_token?: string
})

export const getAuthMessage = (): string => {
  const timestamp = dayjs().format('YYYY/MM/DD HH:mm:ss Z')
  return `${DEFAULT_PUBLIC_KEY_MESSAGE}\n[${timestamp}]`
}

export const hasExpired = (exp: number = 0): boolean => {
  const currentUnix = dayjs().unix()
  return (currentUnix + expirybufferSeconds) >= exp
}

export const hasRefreshTokenExpired = (refreshToken: string) => {
  const payloadStr: string | undefined = refreshToken.split('.')[1]
  if (!payloadStr) return true
  const payload = JSON.parse(Buffer.from(payloadStr, 'base64').toString())
  return hasExpired(payload.exp)
}

export const isValidIssuer = (iss: string = '', network: Network) => {
  switch (network) {
    case Network.MainNet:
      return iss === 'demex-auth'
    case Network.DevNet:
      return iss === 'demex-auth-dev'
    case Network.TestNet:
      return iss === 'demex-auth-test'
    default:
      return iss === 'demex-auth-local'

  }
}

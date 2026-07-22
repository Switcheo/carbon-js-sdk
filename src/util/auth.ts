import { Network } from '@carbon-sdk/constant'
import dayjs from 'dayjs'
import { jwtDecode } from 'jwt-decode'

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

export const JWT_ACCESS_TOKEN_USE = 'accessToken'
export const JWT_REFRESH_TOKEN_USE = 'refreshToken'
export type JwtTokenUse = typeof JWT_ACCESS_TOKEN_USE | typeof JWT_REFRESH_TOKEN_USE

type SessionTokenHeader = {
  alg?: unknown
  typ?: unknown
}

type SessionTokenClaims = {
  iss?: unknown
  aud?: unknown
  sub?: unknown
  iat?: unknown
  exp?: unknown
  token_use?: unknown
}

function getTokenHeaderType(tokenUse: JwtTokenUse): string {
  return tokenUse === JWT_ACCESS_TOKEN_USE ? 'at+jwt' : 'rt+jwt'
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

export const getAuthMessage = (message: string): string => {
  const timestamp = dayjs().format('YYYY/MM/DD HH:mm:ss Z')
  return `${message}\n[${timestamp}]`
}

export const hasExpired = (exp: number = 0): boolean => {
  const currentUnix = dayjs().unix()
  return (currentUnix + expirybufferSeconds) >= exp
}

export const isOpaqueRefreshToken = (refreshToken: string): boolean =>
  typeof refreshToken === 'string'
  && /^[A-Za-z0-9_-]{42}[AEIMQUYcgkosw048]$/.test(refreshToken)

export const hasRefreshTokenExpired = (refreshToken: string) => {
  if (isOpaqueRefreshToken(refreshToken)) return false
  try {
    const { exp } = jwtDecode<SessionTokenClaims>(refreshToken)
    return !Number.isSafeInteger(exp) || hasExpired(exp as number)
  } catch {
    return true
  }
}

export const getExpectedTokenIssuer = (network: Network): string => {
  switch (network) {
    case Network.MainNet:
      return 'demex-auth'
    case Network.DevNet:
      return 'demex-auth-dev'
    case Network.TestNet:
      return 'demex-auth-test'
    default:
      return 'demex-auth-local'
  }
}

export const isValidIssuer = (iss: string = '', network: Network) =>
  iss === getExpectedTokenIssuer(network)

/**
 * Checks whether an unverified JWT envelope is suitable for local session reuse.
 * Resource servers remain responsible for signature verification and authorization.
 */
const isJwtSessionTokenUsable = (
  token: string,
  network: Network,
  expectedTokenUse: JwtTokenUse,
  expectedSubject: string,
  requireUnexpired: boolean,
): boolean => {
  if (typeof token !== 'string' || token.length === 0
    || typeof expectedSubject !== 'string' || expectedSubject.length === 0) return false

  try {
    const header = jwtDecode<SessionTokenHeader>(token, { header: true })
    const claims = jwtDecode<SessionTokenClaims>(token)
    const expectedIssuer = getExpectedTokenIssuer(network)
    const now = dayjs().unix()

    return header.alg === 'ES256'
      && header.typ === getTokenHeaderType(expectedTokenUse)
      && claims.iss === expectedIssuer
      && claims.aud === expectedIssuer
      && claims.sub === expectedSubject
      && claims.token_use === expectedTokenUse
      && Number.isSafeInteger(claims.iat)
      && Number.isSafeInteger(claims.exp)
      && (claims.iat as number) > 0
      && (claims.iat as number) <= now + expirybufferSeconds
      && (claims.exp as number) > (claims.iat as number)
      && (!requireUnexpired || !hasExpired(claims.exp as number))
  } catch {
    return false
  }
}

export const isSessionTokenUsable = (
  token: string,
  network: Network,
  expectedTokenUse: JwtTokenUse,
  expectedSubject: string,
): boolean => isJwtSessionTokenUsable(token, network, expectedTokenUse, expectedSubject, true)

/**
 * Opaque refresh credentials carry no client-readable wallet or environment
 * claims. Bind them to the strict access-token envelope returned alongside the
 * credential, while allowing that access token itself to have expired.
 */
export const isRefreshSessionUsable = (
  refreshToken: string,
  accessToken: string,
  network: Network,
  expectedSubject: string,
): boolean => isOpaqueRefreshToken(refreshToken)
  ? isJwtSessionTokenUsable(accessToken, network, JWT_ACCESS_TOKEN_USE, expectedSubject, false)
  : isSessionTokenUsable(refreshToken, network, JWT_REFRESH_TOKEN_USE, expectedSubject)

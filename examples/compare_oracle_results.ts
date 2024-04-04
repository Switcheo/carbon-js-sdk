import nodeFetch from "node-fetch";

function fetch(url: string, init?: RequestInit): Promise<Response> {
  if (typeof window !== "undefined" && window.fetch) {
    return window.fetch(url, { ...init });
  } else {
    return nodeFetch(url, init as any) as unknown as Promise<Response>;
  }
}

interface SimpleMap<T = unknown> {
  [index: string]: T;
}

(async () => {
  const TESTNET_ORACLE_URL = "https://test-api.carbon.network/carbon/oracle/v1/results_latest"
  const MAINNET_ORACLE_URL = "https://api.carbon.network/carbon/oracle/v1/results_latest"

  // make get request to testnet oracle api and mainnet and compare
  const testnetOracles = await fetch(TESTNET_ORACLE_URL).then((res) => res.json());
  const mainnetOracles = await fetch(MAINNET_ORACLE_URL).then((res) => res.json());

  // convert testnet oracles to map and compare
  const testnetMap: SimpleMap<string> = {}

  for (const oracle of testnetOracles.results) {
    const oracleId: string = oracle.oracle_id
    const price: string = oracle.data
    testnetMap[oracleId] = price
  }

  for (const oracle of mainnetOracles.results) {
    const oracleId: string = oracle.oracle_id
    const price: string = oracle.data
    const testnetPrice = testnetMap[oracleId]
    if (!testnetPrice) {
      console.log(`WARNING! MISSING ORACLE FROM TESTNET: ${oracleId} \n`)
      continue
    }
    // check if price diff between mainnet and testnet oracles differ by more than 1%
    const priceDiff = parseFloat(price) / parseFloat(testnetPrice)
    if (priceDiff > parseFloat("1.01") || priceDiff < parseFloat("0.99")) {
      console.log(`${oracleId}: ${price}, ${testnetPrice}, diff: ${priceDiff} \n`)
    }
  }
})().catch(console.error).finally(() => process.exit(0));

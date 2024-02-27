import nodeFetch from "node-fetch";

function fetch(url: string, init?: RequestInit): Promise<Response> {
  if (typeof window !== "undefined" && window.fetch) {
    return window.fetch(url, { ...init });
  } else {
    return nodeFetch(url, init as any) as unknown as Promise<Response>;
  }
}

interface OracleParams {
  minTurnOutPercentage: string
  maxResultAge: string
  securityType: string
  resultStrategy: string
  resolution: string
}

interface SimpleMap<OracleParams> {
    [index: string]: OracleParams;
}

(async () => {
    const TESTNET_ORACLE_URL = "https://test-api.carbon.network/carbon/oracle/v1/oracles?pagination.limit=100"
    const MAINNET_ORACLE_URL = "https://api.carbon.network/carbon/oracle/v1/oracles?pagination.limit=100"

    // make get request to testnet oracle api and mainnet and compare
    const testnetOracles = await fetch(TESTNET_ORACLE_URL).then((res) => res.json());
    const mainnetOracles = await fetch(MAINNET_ORACLE_URL).then((res) => res.json());

    // convert testnet oracles to map and compare
    const testnetMap : SimpleMap<OracleParams> = {}
    
    for (const oracle of testnetOracles.oracles) {
      const id: string = oracle.id
      const { min_turnout_percentage, max_result_age, security_type, result_strategy, resolution } = oracle
      const oracleParam: OracleParams = {
        minTurnOutPercentage: min_turnout_percentage,
        maxResultAge: max_result_age,
        securityType: security_type,
        resultStrategy: result_strategy,
        resolution
      }
      testnetMap[id] = oracleParam
    }

    for (const oracle of mainnetOracles.oracles) {
      const id: string = oracle.id
      const { min_turnout_percentage, max_result_age, security_type, result_strategy, resolution } = oracle
      const testnetOracleParam = testnetMap[id]
      if (!testnetOracleParam) {
          console.log(`WARNING! MISSING ORACLE FROM TESTNET: ${id} \n`)
          continue
      }

      let warningMsg = ""

      if (testnetOracleParam.minTurnOutPercentage != min_turnout_percentage) {
        warningMsg += `testnet minTurnOut: ${testnetOracleParam.minTurnOutPercentage}, mainnet minTurnOut: ${min_turnout_percentage} \n`
      }

      if (testnetOracleParam.maxResultAge != max_result_age) {
        warningMsg += `testnet maxResultAge: ${testnetOracleParam.maxResultAge}, mainnet maxResultAge: ${max_result_age} \n`
      }

      if (testnetOracleParam.securityType != security_type) {
        warningMsg += `testnet securityType: ${testnetOracleParam.securityType}, mainnet securityType: ${security_type} \n`
      }

      if (testnetOracleParam.resultStrategy != result_strategy) {
        warningMsg += `testnet resultStrategy: ${testnetOracleParam.resultStrategy}, mainnet resultStrategy: ${result_strategy} \n`
      }

      if (testnetOracleParam.resolution != resolution) {
        warningMsg += `testnet resolution: ${testnetOracleParam.resolution}, mainnet resolution: ${resolution} \n`
      }

      if (warningMsg.length == 0) {
        continue
      }

      console.log(`WARNING: the following oracle params are different for oracle: ${id}\n`+ warningMsg)
    }
  })().catch(console.error).finally(() => process.exit(0));

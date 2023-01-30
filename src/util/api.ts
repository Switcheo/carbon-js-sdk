import { fetch } from "./fetch";
import querystring from "query-string";

export interface RequestResult {
  status: number;
  statusText: string;
  url: string;
  headers: Headers;
  data?: any;
}

/**
 * API endpoint specifications.
 *
 * @see HTTP<PathSpecs> for details on usage.
 */
export interface PathSpecs {
  [index: string]: string;
}

export interface PathParams {
  [index: string]: any;
}

export interface HTTPOpts {
  debugMode?: boolean;
}

export interface ResponseParser {
  (response: Response): Promise<RequestResult>;
}

/**
 * Helper class for abstracting URL manipulation specifically for
 * API endpoints.
 *
 */
export class HTTP<PathSpecs> {
  public apiPrefix: string;
  public apiEndpoints: PathSpecs;
  public debugMode: boolean;

  /**
   * Constructor for `HTTP` helper class.
   *
   * `apiEndpoints` example:
   * ```javascript
   *	{
   *		getBalance: "/zilliqa/addresses/:address",
   *		listTransactions: "/zilliqa/addresses/:address/txs",
   *	};
   * ```
   *
   * @param apiPrefix prefix to add for all endpoints URL construction.
   * @param apiEndpoints see `apiEndpoints` example above.
   */
  constructor(apiPrefix: string, apiEndpoints: PathSpecs, opts?: HTTPOpts) {
    this.apiPrefix = apiPrefix;
    this.apiEndpoints = apiEndpoints;
    this.debugMode = opts?.debugMode ?? false;
  }

  /**
   * Path generator to obtain URL for a specific endpoint
   * provided in the constructor.
   *
   * example usage:
   * ```javascript
   * const http = new HTTP("http://localhost/api", { getUser: "/users/:user_id/detail" });
   * const url = http.path("getUser", { user_id: 42 }, { access_token: "awesomeAccessToken" });
   * // url: http://localhost/api/users/42/detail?access_token=awesomeAccessToken
   * ```
   *
   * @param path a key of apiEndpoints provided in the constructor.
   * @param routeParams object map for route parameters.
   * @param queryParams object map for query parameters.
   */
  public path = (path: keyof PathSpecs, routeParams?: PathParams, queryParams?: PathParams) => {
    let url = `${this.apiPrefix}${this.apiEndpoints[path]}`;

    if (this.debugMode) {
      this.debugLog("path", url);
    }

    // substitute route params
    if (routeParams) {
      for (const paramKey in routeParams) {
        url = url.replace(`:${paramKey}`, routeParams[paramKey]);
      }
    }

    // append query params
    if (queryParams) {
      url += `?${querystring.stringify(queryParams)}`;
    }
    return url;
  };

  /**
   * Executes HTTP GET request with fetch
   */
  public get = ({ url, headers }: any) => {
    return fetch(url, {
      method: "GET",
      headers,
    });
  };

  /**
   * Executes HTTP POST request with fetch
   */
  public post = (options: any) => {
    return fetch(options.url, {
      method: "POST",
      headers: {
        "Content-Type": options.content_type || "application/json",
        ...options.headers,
      },
      body: JSON.stringify(options.body),
    });
  };

  /**
   * Executes HTTP DELETE request with fetch
   */
  public del = (options: any) => {
    return fetch(options.url, {
      method: "DELETE",
      headers: {
        "Content-Type": options.content_type || "application/json",
        ...options.headers,
      },
      body: JSON.stringify(options.body),
    });
  };

  /**
   * Executes HTTP multipart POST request with fetch
   */
  public raw = (options: any) => {
    const { url, ...otherOpts } = options;
    return fetch(url, otherOpts);
  };

  /**
   * A helper message to log methods when they are called
   * HTTP#debugMode must be set to true to turn on logging.
   * @param {any[]} args - items to be logged
   */
  private debugLog(...args: any[]) {
    if (!this.debugMode) return;

    console.log(...args);
  }
}

export class RequestError extends Error {
  public result: RequestResult;
  constructor(result: RequestResult, message?: string) {
    super(message);
    this.result = result;
    this.message = message || result.statusText;
  }
}

const defaultResponseParser: ResponseParser = async (response: Response) => {
  const { status, statusText, headers, url } = response;
  const result: RequestResult = { status, statusText, headers, url };
  try {
    const responseJson = await response.json();
    result.data = responseJson;
  } catch (e) {}

  if (response.status >= 400 && response.status < 600) {
    throw new RequestError(result, result.data?.error || "unknown error");
  }

  return result;
};

type RequestOpts = Omit<RequestInit, "body"> & {
  body?: any;
};

export type APIRequester = (options?: RequestOpts, parser?: ResponseParser) => Promise<RequestResult>;
export interface APIExecutor {
  get: APIRequester;
  post: APIRequester;
  delete: APIRequester;
  raw: APIRequester;
}
export interface EndpointMap {
  [key: string]: string;
}
export interface APIHandler<M extends EndpointMap> {
  path: (path: keyof M, routeParams?: PathParams, queryParams?: PathParams) => APIExecutor;
}

export class APIManager<M extends EndpointMap> implements APIHandler<M> {
  public readonly http: HTTP<M>;

  constructor(
    public readonly apiPrefix: string,
    public readonly endpoints: M,
    public readonly responseParser: ResponseParser = defaultResponseParser
  ) {
    this.http = new HTTP(apiPrefix, endpoints);
  }

  private createExecutor = (url: string): APIExecutor => ({
    get: async (options: RequestOpts = {}, parser: ResponseParser = this.responseParser) => this.http.get({ url, ...options }).then(parser),
    post: async (options: RequestOpts = {}, parser: ResponseParser = this.responseParser) =>
      this.http.post({ url, ...options }).then(parser),
    delete: async (options: RequestOpts = {}, parser: ResponseParser = this.responseParser) =>
      this.http.del({ url, ...options }).then(parser),
    raw: async (options: RequestOpts = {}, parser: ResponseParser = this.responseParser) => this.http.raw({ url, ...options }).then(parser),
  });

  public path(path: keyof M, routeParams?: PathParams, queryParams?: PathParams): APIExecutor {
    const url = this.http.path(path, routeParams, queryParams);
    return this.createExecutor(url);
  }
}

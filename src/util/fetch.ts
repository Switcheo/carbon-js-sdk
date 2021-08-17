import nodeFetch from 'node-fetch';

export function fetch(
  url: string,
  init?: RequestInit,
): Promise<Response> {
  if (typeof window !== 'undefined' && window.fetch) {
    return window.fetch(url, { ...init });
  } else {
    return nodeFetch(url, init as any) as unknown as Promise<Response>;
  }
};

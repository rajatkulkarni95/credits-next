// A simple fetch that'll be used in swr for data fetching

import { BearerToken } from "../constants";

export default async function fetcher<JSON = any>(
  input: RequestInfo,
  init?: RequestInit
): Promise<JSON> {
  const res = await fetch(input, {
    headers: { Authorization: `Bearer ${BearerToken}` },
  });
  return res.json();
}

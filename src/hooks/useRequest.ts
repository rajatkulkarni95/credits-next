import useSWR from "swr";
import { constants, API_KEY } from "../constants";
import fetcher from "../utils/fetcher";

export const useRequest = (path: string) => {
  if (!path) {
    throw new Error("path is required");
  }
  const authorization = `?api_key=${API_KEY}`;
  const url = `${constants.baseUrl}${path}${authorization}`;
  const { data, error } = useSWR(url, fetcher);

  return { data, error };
};

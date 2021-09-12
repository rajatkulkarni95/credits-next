import useSWR from "swr";
import { BASE_URL } from "../constants";
import fetcher from "../utils/fetcher";

export const useRequest = (path: string) => {
  if (!path) {
    throw new Error("path is required");
  }
  const authorization = `?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`;
  const url = `${BASE_URL}${path}${authorization}`;
  const { data, error } = useSWR(url, fetcher);

  return { data, error };
};

import useSWR from "swr";
import camelcaseKeys from "camelcase-keys";
import { constants } from "../constants";
import fetcher from "../utils/fetcher";

export const useRequest = (path: string) => {
  if (!path) {
    throw new Error("path is required");
  }

  const url = `${constants.baseUrl}${path}`;
  let { data, error } = useSWR(url, fetcher);

  // Convert the api values to camelCase
  data = camelcaseKeys(data, { deep: true });

  return { data, error };
};

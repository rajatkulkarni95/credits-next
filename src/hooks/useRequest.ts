import useSWR from "swr";
import { BASE_URL } from "../constants";

export const useRequest = (path: string) => {
  if (!path) {
    throw new Error("path is required");
  }

  const url = `${BASE_URL}${path}`;
  const { data, error } = useSWR(url);

  return { data, error };
};

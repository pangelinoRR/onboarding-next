"use client";

import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { getNewReleases } from "../lib/actions";

export function useGetNewReleases(): UseQueryResult {
  return useQuery({
    queryKey: ["get-new-releases"],
    queryFn: async () => {
      const result = await getNewReleases();
      return result;
    },
  });
}

"use client";

import { UseQueryResult, useQuery } from "@tanstack/react-query";
import axios from "@/app/lib/axios";

export function useGetNewReleases(): UseQueryResult {
  return useQuery({
    queryKey: ["get-new-releases"],
    queryFn: async () => {
      const result = await axios.get("albums/new-releases");
      return result;
    },
  });
}

"use client";

import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { getNewReleases } from "../lib/actions";
import { SpotifyListResponse } from "@/types/responses";
import { Album } from "@/types/models";

export function useGetNewReleases(): UseQueryResult<
  SpotifyListResponse<Album>
> {
  return useQuery({
    queryKey: ["get-new-releases"],
    queryFn: async () => {
      const result = await getNewReleases();
      return result;
    },
  });
}

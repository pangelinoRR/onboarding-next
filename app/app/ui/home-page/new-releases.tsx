"use client";

import { useGetNewReleases } from "@/app/hooks/useGetNewReleases";

export default function NewReleases() {
  const { data, isLoading, error } = useGetNewReleases();

  if (isLoading) return <p>Loading...</p>;

  if (error) {
    console.log(error);
    return <p>failed</p>;
  }

  console.log(data);

  return <p>Success</p>;
}

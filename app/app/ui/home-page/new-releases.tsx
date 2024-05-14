"use client";

import { useGetNewReleases } from "@/app/hooks/useGetNewReleases";
import NewReleasesList from "./new-releases-list";
import { Grid, Skeleton } from "@mui/material";

export default function NewReleases() {
  const { data, isLoading, error } = useGetNewReleases();

  if (isLoading) {
    return (
      <Grid container columnSpacing={5}>
        <Grid item xs={3}>
          <Skeleton variant="rounded" sx={{ width: "100%", height: "256px" }} />
          <Skeleton
            variant="rounded"
            sx={{ width: "100%", height: "24px", marginTop: "8px" }}
          />
        </Grid>
        <Grid item xs={3}>
          <Skeleton variant="rounded" sx={{ width: "100%", height: "256px" }} />
          <Skeleton
            variant="rounded"
            sx={{ width: "100%", height: "24px", marginTop: "8px" }}
          />
        </Grid>
        <Grid item xs={3}>
          <Skeleton variant="rounded" sx={{ width: "100%", height: "256px" }} />
          <Skeleton
            variant="rounded"
            sx={{ width: "100%", height: "24px", marginTop: "8px" }}
          />
        </Grid>
        <Grid item xs={3}>
          <Skeleton variant="rounded" sx={{ width: "100%", height: "256px" }} />
          <Skeleton
            variant="rounded"
            sx={{ width: "100%", height: "24px", marginTop: "8px" }}
          />
        </Grid>
      </Grid>
    );
  }

  if (error || !data) {
    return <p>failed</p>;
  }

  console.log(data);

  return <NewReleasesList newReleases={data.items} />;
}

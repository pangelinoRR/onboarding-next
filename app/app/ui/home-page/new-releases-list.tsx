import { Album } from "@/types/models";
import { Grid } from "@mui/material";
import { NewReleasesListItem } from "./new-releases-list-item";

export default function NewReleasesList({
  newReleases,
}: Readonly<{ newReleases: Album[] }>) {
  return (
    <Grid container columnSpacing={5} rowSpacing={4}>
      {newReleases.map((newRelease) => (
        <Grid key={newRelease.id} item xs={3}>
          <NewReleasesListItem newRelease={newRelease} />
        </Grid>
      ))}
    </Grid>
  );
}

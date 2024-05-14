import { Album } from "@/types/models";
import { Stack, Typography } from "@mui/material";
import Image from "next/image";

export function NewReleasesListItem({
  newRelease,
}: Readonly<{ newRelease: Album }>) {
  return (
    <Stack direction="column" spacing={2}>
      <Stack
        direction="column"
        sx={{
          width: "100%",
          position: "relative",
          aspectRatio: "1 / 1",
        }}
      >
        <Image
          style={{ borderRadius: "8px" }}
          src={newRelease.images[0].url}
          alt={newRelease.name}
          fill
        />
      </Stack>
      <Stack direction="column" spacing={1}>
        <Typography sx={{ fontWeight: "bold", fontSize: "1.10rem" }}>
          {newRelease.name}
        </Typography>
        <Typography sx={{ color: "primary.main", fontSize: "0.9rem" }}>
          {newRelease.artists[0].name}
        </Typography>
      </Stack>
    </Stack>
  );
}

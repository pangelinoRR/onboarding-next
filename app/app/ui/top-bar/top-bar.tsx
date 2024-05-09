import { Stack, Typography } from "@mui/material";

export default function TopBar() {
  return (
    <section>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ paddingY: "24px", minHeight: "80px" }}
      >
        <Typography
          variant="h1"
          sx={{
            borderBottom: "4px solid black",
            fontSize: "1.25rem",
            fontWeight: "700",
            letterSpacing: "0.2rem",
            paddingBottom: "8px",
            paddingRight: "24px",
          }}
        >
          Onboarding App
        </Typography>
        <Stack>
          <p>Profile</p>
        </Stack>
      </Stack>
    </section>
  );
}

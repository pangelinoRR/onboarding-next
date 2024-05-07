import { Box, Stack, Typography } from "@mui/material";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Stack direction="row" sx={{ height: "100vh", width: "100vw" }}>
      <Box
        sx={{ padding: "64px", backgroundColor: "primary.main", width: "50%" }}
      >
        <Typography
          sx={{
            borderBottom: "8px solid black",
            fontSize: "4rem",
            fontWeight: "700",
            letterSpacing: "2px",
            paddingBottom: "16px",
          }}
          component="h1"
        >
          Onboarding App
        </Typography>
      </Box>
      <Box
        sx={{
          padding: "64px",
          backgroundColor: "backgroundGrey.main",
          width: "50%",
        }}
      >
        {children}
      </Box>
    </Stack>
  );
}

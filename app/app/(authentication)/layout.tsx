import { Box, Stack, Typography } from "@mui/material";
import { Roboto } from "next/font/google";
import { ThemeProvider } from "@mui/material";
import theme from "@/themes/theme";
import "../globals.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <ThemeProvider theme={theme}>
        <body className={roboto.className}>
          <Stack direction="row" sx={{ height: "100vh", width: "100vw" }}>
            <Box
              sx={{
                padding: "64px",
                backgroundColor: "primary.main",
                width: "50%",
              }}
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
        </body>
      </ThemeProvider>
    </html>
  );
}

import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack, ThemeProvider } from "@mui/material";
import theme from "@/themes/theme";
import Sidebar from "../ui/sidebar/sidebar";
import TopBar from "../ui/top-bar/top-bar";
import "../globals.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import QueryClientContextProvider from "../providers/query-client-context-provider";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider theme={theme}>
        <QueryClientContextProvider>
          <body className={roboto.className}>
            <Stack direction="row">
              <Sidebar />
              <Stack
                direction="column"
                spacing={2}
                sx={{
                  backgroundColor: "backgroundGrey.main",
                  flexGrow: 1,
                  paddingX: "80px",
                  paddingBottom: "80px",
                }}
              >
                <TopBar />
                <main>{children}</main>
              </Stack>
            </Stack>
          </body>
        </QueryClientContextProvider>
      </ThemeProvider>
    </html>
  );
}

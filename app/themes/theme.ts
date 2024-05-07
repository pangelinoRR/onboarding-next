"use client";

import { Theme, colors, createTheme } from "@mui/material";

/**
 * Application theme for Material UI.
 */
const theme: Theme = createTheme({
  palette: {
    primary: {
      main: colors.amber[500],
    },
    secondary: {
      main: "#e6a3d1",
    },
    backgroundGrey: {
      main: colors.grey[100],
    },
    borderGrey: {
      main: "#c4c4c4",
    },
    error: {
      main: "#EF4444",
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: "white",
        },
      },
    },
  },
  typography: {
    allVariants: {
      lineHeight: 1.15,
    },
  },
});

export default theme;

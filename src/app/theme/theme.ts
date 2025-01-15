"use client";

import { createTheme } from "@mui/material/styles";
import { typography } from "./typography";
import { darkPalette } from "./palette";

export const theme = createTheme({
  direction: "rtl",
  spacing: (factor: number) => `${factor}rem`,
  typography,
  palette: darkPalette,
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
      xxl: 1440,
    },
  },
});

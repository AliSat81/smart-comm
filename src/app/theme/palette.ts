import { PaletteOptions } from "@mui/material";

export const darkPalette: PaletteOptions | undefined = {
  mode: "dark",
  primary: {
    dark: "#009B9D",
    main: "#00AAAD",
    light: "#98CBCC",
    "400": "#2BB3B6",
    "200": "#57BDBF",
    "100": "#6DC2C3",
    contrastText: "#333539",
  },
  grey: {
    600: "#333539",
    500: "#444549",
    400: "#545659",
    300: "#656669",
    200: "#868789",
    100: "#A7A8A9",
  },
  background: {
    default: "#333539",
    paper: "#444549",
  },
  error: {
    dark: "#EF4444",
    main: "#FF8585",
  },
  success: {
    dark: "#44EF63",
    main: "#85FF9F",
  },
  warning: {
    dark: "#F2CF0D",
    main: "#EFD544",
  },
  info: {
    dark: "#4480EF",
    main: "#85C8FF",
  },
};

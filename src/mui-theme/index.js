// https://mui.com/material-ui/customization/theming/

import { createTheme } from "@mui/material";
import { rem } from "utils/pxToRem";

export default createTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: "#fff",
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: "#0066ff",
      main: "#0044ff",
      // dark: will be calculated from palette.secondary.main,
      contrastText: "#ffcc00",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          cursor: "pointer !important",
          borderRadius: "8px !important",
          border: "none",
          textTransform: "none",
          boxShadow: "none !important",
          fontSize: `${rem(16)} !important`,
          lineHeight: `${rem(18)} !important`,
          fontWeight: "500 !important",
          padding: `${rem(12)} 0`,
          transition: "all 0.2s ease-in-out",
          height: `${rem(48)}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          flexDirection: "row-reverse",
          // whiteSpace: "nowrap",
          "@media (max-width: 768px)": {
            height: `${rem(40)}`,
            lineHeight: `${rem(16)} !important`,
          },
          "&:hover": {
            border: "none",
            boxShadow: "none !important",
          },
          svg: {
            maxWidth: "20px",
            minWidth: "20px",
            maxHeight: "20px",
            minHeight: "20px",
            marginRight: 0,
            display:"none",

          },
        },
        noHovered: {
          "&:hover": {
            svg:{
              display:"flex"
            }
          },
        },
        outlined: {
          color: "#121212",
          background: "#FAFAFA",
          padding: `${rem(16)} ${rem(40)}`,
          border: "2px solid transparent",
          "&:hover": {
            color: "#FAFAFA",
            background: "#121212",
            border: "2px solid #3B3B3B",
          },
        },
        contained: {
          padding: `${rem(16)} ${rem(40)}`,
          color: "#FAFAFA",
          background: "#121212",
          border: "2px solid #3B3B3B",
          "&:hover": {
            color: "#121212",
            background: "#FAFAFA",
            border: "2px solid transparent",
          },
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: rem(16),
          paddingRight: rem(16),
          "@media (min-width:1440px)": {
            maxWidth: "1440px",
            width: "100%",
          },
          "@media (min-width:1200px)": {
            paddingLeft: rem(16),
            paddingRight: rem(16),
          },
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          maxWidth: "none",
        },
      },
    },
  },
  typography: {
    fontFamily: "Inter",
    h1: {
      fontSize: rem(56),
      fontWeight: 700,
      lineHeight: rem(64),
      color: "#fff",
      "@media (max-width: 768px)": {
        fontSize: rem(16),
        fontWeight: 400,
        lineHeight: rem(20),
        color: "#fff",
      },
    },
  },
});

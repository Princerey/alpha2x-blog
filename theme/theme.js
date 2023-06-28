import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Montserrat",
    fontSize: 16,
    fontWeight: 500,
  },
  palette: {
    primary: {
      main: "#3d3d3d", // Set your desired primary color
    },
    secondary: {
      main: "#71338B", // Set your desired secondary color
    },
  },
  MuiButton: {
    defaultProps: {
      disableRipple: true,
      disableElevation: true,
    },
    styleOverrides: {
      root: {
        borderRadius: "0.3rem !important",
      },
    },
  },
});

export default theme;
import { createMuiTheme } from "@material-ui/core/styles";

export const specials = {
  light: {
    aboutBg: "#f9f9f9",
  },
};
export const lightTheme = createMuiTheme({
  cards: {
    bgColor: "#fff",
    headerColor: "initial",
  },
  aboutBg: "#f9f9f9",
  palette: {
    type: "light",
    primary: {
      main: "#00adff",
      contrastText: "#fff", //button text white instead of black
    },
    background: {
      //3b457d
      default: "#ffffff",
    },
  },

  overrides: {
    MuiButton: {
      root: {
        textTransform: "none",
      },
      label: {
        color: "#000",
      },
    },
  },
});

export const darkTheme = createMuiTheme({
  cards: {
    bgColor: "#2c2c2c",
    headerColor: "#bbb",
  },
  palette: {
    type: "dark",
  },

  overrides: {
    MuiButton: {
      root: {
        textTransform: "none",
      },
      label: {
        color: "#fff",
      },
    },
  },
});

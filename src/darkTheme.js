import { createMuiTheme } from "@material-ui/core/styles";

//svg color 00B0FF
const darkTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#00adff",
      contrastText: "#fff", //button text white instead of black
    },
    background: {
      //3b457d
      default: "#000000",
    },
  },
  typography: {
    color: "#e6e6e6",
    button: {
      textTransform: "none",
    },
  },
});

export default darkTheme;

import { createMuiTheme } from "@material-ui/core/styles";
import blueGrey from "@material-ui/core/colors/blueGrey";
import lightBlue from "@material-ui/core/colors/lightBlue";

const theme = createMuiTheme({
  palette: {
    primary: blueGrey,
    secondary: lightBlue,
  },
  status: {
    danger: "red",
  },
});

export default theme;

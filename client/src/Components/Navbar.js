import React from "react";
import { Typography, AppBar, Toolbar, Button } from "@material-ui/core";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import DashboardRoundedIcon from "@material-ui/icons/DashboardRounded";
import {
  createMuiTheme,
  ThemeProvider,
  makeStyles,
} from "@material-ui/core/styles";

const theme = createMuiTheme({
  overrides: {
      MuiAppBar : {
          colorPrimary : {
              backgroundColor : "#fce42b"
          },
          root : {
            height : "8%"
          }
      },
      MuiTypography : {
          h5 : {
              color : "dimgrey"
          }
      }
  },
});

const useStyles = makeStyles((theme) => ({
  largeButton: {
    width: "50%",
    margin: "0% 2%",
  },
}));
const Navbar = () => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <div>
        <AppBar position="fixed">
          <Toolbar>
            <Typography variant="h5">EasierChef</Typography>
          </Toolbar>
        </AppBar>
      </div>
    </ThemeProvider>
  );
};

export default Navbar;

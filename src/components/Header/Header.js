import React from "react";

import { Grid, AppBar, Toolbar, Typography } from "@material-ui/core";
import DuoIcon from "@material-ui/icons/Duo";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  offset: theme.mixins.toolbar,
}));

const Header = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <AppBar position="fixed">
        <Toolbar>
          <Grid justify="space-between" container>
            <Grid item>
              <Typography>Video Streamer</Typography>
            </Grid>
            <Grid item>
              <DuoIcon />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <div className={classes.offset} />
      <div className={classes.offset} />
    </React.Fragment>
  );
};

export default Header;

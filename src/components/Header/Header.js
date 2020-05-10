import React from "react";

import { Grid, AppBar, Toolbar } from "@material-ui/core";
import DuoIcon from "@material-ui/icons/Duo";

import FastSearchList from "../FastSearchList/FastSearchList";

import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  offset: theme.mixins.toolbar,
}));

const fastSearchItems = [
  "ReactJS",
  "NodeJS",
  "REDUX",
  "CSS FLEX",
  "Laravel",
  "PHP 8",
  "Nova Futura Day Trade",
  "Andre Moraes",
];

const Header = ({ handleFastSearchClick }) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <AppBar position="fixed">
        <Toolbar>
          <Grid justify="space-between" container>
            <Grid item>
              <DuoIcon fontSize="large" />
            </Grid>
            <FastSearchList
              words={fastSearchItems}
              fastSearchClicked={handleFastSearchClick}
            />
          </Grid>
        </Toolbar>
      </AppBar>
      <div className={classes.offset} />
      <div className={classes.offset} />
    </React.Fragment>
  );
};

export default Header;

import React from "react";
import { Grid } from "@material-ui/core";
import FastSearchItem from "./FastSearchItem/FastSearchItem";

const FastSearchList = ({ words, fastSearchClicked }) => {
  const list = words.map((word, itemKey) => {
    return (
      <FastSearchItem key={itemKey} clicked={fastSearchClicked} word={word} />
    );
  });
  return <Grid item>{list}</Grid>;
};

export default FastSearchList;

import React from "react";
import { Button } from "@material-ui/core";

const FastSearchItem = ({ clicked, word }) => {
  return (
    <Button color="inherit" onClick={() => clicked(word)}>
      {word}
    </Button>
  );
};

export default FastSearchItem;

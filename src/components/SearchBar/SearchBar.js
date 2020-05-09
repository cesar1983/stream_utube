import React from "react";
import { Paper, TextField } from "@material-ui/core";

import classes from "./SearchBar.module.css";

class SearchBar extends React.Component {
  state = {
    searchTerms: "",
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { searchTerm } = this.state;
    const { onFormSubmit } = this.props;

    onFormSubmit(searchTerm);
  };

  handleChange = (event) => {
    this.setState({ searchTerm: event.target.value });
  };

  render() {
    return (
      <Paper elevation={6} style={{ padding: "25px" }}>
        <form onSubmit={this.handleSubmit}>
          <TextField
            className={classes.searchTermInputField}
            label="Search..."
            onChange={this.handleChange}
          />
        </form>
      </Paper>
    );
  }
}

export default SearchBar;

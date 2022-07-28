import React, { Component } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./dropDown.css";

class DropDown extends Component {
  constructor() {
    super();
    this.state = { name: "" };
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }
  render(props) {
    return (
      <Box>
        <InputLabel>Name</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={this.state.name}
          label="Name"
          className="width"
          onChange={(event) => this.handleNameChange(event)}
        >
          <MenuItem value={"Name1"}>Name1</MenuItem>
          <MenuItem value={"Name2"}>Name2</MenuItem>
          <MenuItem value={"Name3"}>Name3</MenuItem>
        </Select>
      </Box>
    );
  }
}
export default DropDown;

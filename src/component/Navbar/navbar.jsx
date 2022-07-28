import React, { Component } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import "./navbar.css";

class Navbar extends Component {
  render(props) {
    return (
      <div>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar variant="dense" className="heading">
              <Typography variant="h6" component="div">
                {this.props.Heading}
              </Typography>
            </Toolbar>
          </AppBar>
        </Box>
      </div>
    );
  }
}

export default Navbar;

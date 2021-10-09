import React from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
// import { white } from "@mui/material/colors";

function TrainInfoFormBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "white" }}>
        <Toolbar></Toolbar>
      </AppBar>
    </Box>
  );
}

export default TrainInfoFormBar;

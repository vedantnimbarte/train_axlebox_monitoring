import React from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

function AxleTempList() {
  return (
    <Box>
      <Paper
        sx={{
          margin: 2,
          width: "30vw",
          height: "30vh",
          padding: 1,
        }}
      >
        <Typography>Axle Box Temperature Details</Typography>
      </Paper>
    </Box>
  );
}

export default AxleTempList;

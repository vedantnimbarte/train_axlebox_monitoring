import React from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import Card from "@mui/material/Card";
import { Colors, FontSizes } from "../../../themes";

function AxleTempList() {
  return (
    <Paper
      elevation={5}
      sx={{
        margin: 2,
      }}
    >
      <Box
        sx={{
          backgroundColor: Colors.primary,
          color: Colors.white,
          textAlign: "center",
          fontSize: FontSizes.lg,
          borderRadius: 1,
        }}
      >
        <Typography>Axle Box Temp.</Typography>
      </Box>
      <List
        sx={{
          backgroundColor: Colors.white,
          position: "relative",
          overflow: "auto",
          maxHeight: "90vh",
        }}
      >
        <Card sx={{ padding: 1, height: "10rem" }}>
          <Typography>ello</Typography>
        </Card>
      </List>
    </Paper>
  );
}

export default AxleTempList;

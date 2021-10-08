import React from "react";
import { Box, Grid } from "@mui/material";
import { TopBar, TrainsList } from "../components";
function Dashboard() {
  return (
    <Box container sx={{ height: "100vh" }}>
      <TopBar />
      <TopBar />
      <Box sx={{ display: "flex" }}>
        <Grid md={2}>
          <TrainsList />
        </Grid>
      </Box>
    </Box>
  );
}

export default Dashboard;

import React from "react";
import { Box, Grid } from "@mui/material";
import { TopBar, TrainsList, TempDetails } from "../components";
function Dashboard() {
  return (
    <Box container sx={{ height: "100vh" }}>
      <TopBar />
      <TopBar />
      <Box sx={{ display: "flex" }}>
        <Grid md={2}>
          <TrainsList />
        </Grid>
        <Grid md={2}>
          <TempDetails />
        </Grid>
      </Box>
    </Box>
  );
}

export default Dashboard;

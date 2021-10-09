import React from "react";
import { Box, Grid } from "@mui/material";
import {
  TopBar,
  TrainsList,
  TempDetails,
  TrainDetails,
  CoachTempChart,
  TrainInfoFormBar,
} from "../components";
function Dashboard() {
  return (
    <Box container sx={{ height: "100vh" }}>
      <TopBar />
      <TrainInfoFormBar />
      <Box sx={{ display: "flex" }}>
        <Grid md={2}>
          <TrainsList />
        </Grid>
        <Grid md={2}>
          <TempDetails />
          <TrainDetails />
          <CoachTempChart />
        </Grid>
      </Box>
    </Box>
  );
}

export default Dashboard;

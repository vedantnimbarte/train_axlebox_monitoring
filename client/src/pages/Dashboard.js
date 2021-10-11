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
    <Box>
      <TopBar />
      <TrainInfoFormBar />
      <Grid sm={12} md={12} lg={12} sx={{ display: "flex" }}>
        <Grid md={2.5}>
          <TrainsList />
        </Grid>
        <Grid md={4}>
          <TempDetails />
          <TrainDetails />
          <CoachTempChart />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Dashboard;

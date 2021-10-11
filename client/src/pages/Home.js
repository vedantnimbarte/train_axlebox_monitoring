import React from "react";
import { Box, Grid } from "@mui/material";
import {
  TrainsList,
  TempDetails,
  TrainDetails,
  CoachTempChart,
  TrainInfoFormBar,
  AxleTempList,
} from "../components";

function Home() {
  return (
    <Box sx={{ padding: 0, margin: 0, display: "block" }}>
      <TrainInfoFormBar />
      <Grid sm={12} md={12} lg={12} sx={{ display: "flex" }}>
        <Grid md={3}>
          <TrainsList />
        </Grid>
        <Grid md={5}>
          <TempDetails />
          <TrainDetails />
          <CoachTempChart />
        </Grid>
        <Grid md={4}>
          <AxleTempList />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Home;

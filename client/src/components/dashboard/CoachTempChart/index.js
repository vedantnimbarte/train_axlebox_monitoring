import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { purple } from "@mui/material/colors";
import { Bar } from "react-chartjs-2";
import { Colors, FontSizes } from "../../../themes";

function CoachTempChart() {
  const data = {
    labels: ["C1", "C2", "C3", "C4", "C5", "C6"],
    datasets: [
      {
        label: "Coach Temp Hits",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: Colors.primary,
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <Paper
      sx={{
        margin: 2,
        height: "40vh",
      }}
    >
      <Typography
        sx={{
          color: Colors.white,
          textAlign: "center",
          marginBottom: 1,
          backgroundColor: Colors.primary,
          borderRadius: 1,
          fontSize: FontSizes.lg,
          letterSpacing: 1,
        }}
      >
        Coach Wise Temp.
      </Typography>
      <Box sx={{ padding: 2, overflow: "none" }}>
        <Bar data={data} options={options} />
      </Box>
    </Paper>
  );
}

export default CoachTempChart;

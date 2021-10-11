import React from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Colors, FontSizes } from "../../../themes";

function TrainDetails() {
  const trainInfo = [
    { key: 1, title: "Train Date", value: "0.00" },
    { key: 2, title: "Train Time", value: "0.00" },
    { key: 3, title: "Direction", value: "0.00" },
  ];
  return (
    <Paper
      sx={{
        margin: 2,
        width: "30vw",
        height: "25vh",
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
        Train Info
      </Typography>
      {trainInfo.map((item) => (
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: "10px 40px",
          }}
          key={item.key}
        >
          <Typography
            sx={{
              color: Colors.primary,
              fontWeight: 700,
              fontSize: FontSizes.md,
            }}
          >
            {item.title}
          </Typography>
          <Typography sx={{ fontWeight: 700, fontSize: FontSizes.md }}>
            {item.value}
          </Typography>
        </Box>
      ))}
    </Paper>
  );
}

export default TrainDetails;

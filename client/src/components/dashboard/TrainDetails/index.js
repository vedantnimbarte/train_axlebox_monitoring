import React from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { purple } from "@mui/material/colors";

function TrainDetails() {
  return (
    <Paper
      sx={{
        margin: 2,
        width: "45vw",
        height: "30vh",
        padding: 1,
      }}
    >
      <Typography
        variant="h5"
        sx={{ color: purple[700], textAlign: "center", marginBottom: 2 }}
      >
        Train Info
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px 40px",
        }}
      >
        <Typography sx={{ color: purple[700], fontWeight: 700 }}>
          Train Date
        </Typography>
        <Typography sx={{ fontWeight: 700 }}>0.00</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px 40px",
        }}
      >
        <Typography sx={{ color: purple[700], fontWeight: 700 }}>
          Train Time
        </Typography>
        <Typography sx={{ fontWeight: 700 }}>0.00</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px 40px",
        }}
      >
        <Typography sx={{ color: purple[700], fontWeight: 700 }}>
          Direction
        </Typography>
        <Typography sx={{ fontWeight: 700 }}>Down</Typography>
      </Box>
    </Paper>
  );
}

export default TrainDetails;

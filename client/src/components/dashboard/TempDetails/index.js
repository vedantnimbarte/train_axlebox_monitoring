import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { purple, grey } from "@mui/material/colors";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";

function TempDetails() {
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
        Axle Box Temp. Details
      </Typography>
      <Box sx={{ display: "flex", textAlign: "center" }}>
        <Grid md={4}>
          <Box sx={{ margin: 1 }}>
            <Typography sx={{ fontSize: 12, fontWeight: 500 }}>
              Max Temp
            </Typography>
            <Typography
              variant="h3"
              sx={{ color: purple[500], fontWeight: 800 }}
            >
              40.04
            </Typography>
          </Box>
        </Grid>
        <Grid md={4}>
          <Box sx={{ margin: 1 }}>
            <Typography sx={{ fontSize: 12, fontWeight: 500 }}>
              Min Temp
            </Typography>
            <Typography
              variant="h3"
              sx={{ color: purple[500], fontWeight: 800 }}
            >
              40.04
            </Typography>
          </Box>
        </Grid>
        <Grid md={4}>
          <Card
            sx={{
              backgroundColor: grey[700],
              width: "80%",
              display: "flex",
              alignItems: "center",
              margin: 1,
              paddingLeft: 1,
              justifyContent: "space-between",
            }}
          >
            <Typography sx={{ color: "white" }}>Total Warning</Typography>
            <Card sx={{ padding: 1, margin: 1 }}>12</Card>
          </Card>
          <Card
            sx={{
              backgroundColor: grey[700],
              width: "80%",
              display: "flex",
              alignItems: "center",
              margin: 1,
              paddingLeft: 1,
              justifyContent: "space-between",
            }}
          >
            <Typography sx={{ color: "white" }}>Total Alarm</Typography>
            <Card sx={{ padding: 1, margin: 1 }}>12</Card>
          </Card>
        </Grid>
      </Box>
    </Paper>
  );
}

export default TempDetails;

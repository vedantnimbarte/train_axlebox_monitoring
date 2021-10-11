import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { purple, grey } from "@mui/material/colors";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import { Colors, FontSizes } from "../../../themes";

function TempDetails() {
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
          marginBottom: 2,
          fontSize: FontSizes.lg,
          backgroundColor: Colors.primary,
          borderRadius: 1,
          letterSpacing: 1,
        }}
      >
        Axle Box Temp. Details
      </Typography>
      <Box sx={{ display: "flex", textAlign: "center", alignItems: "center" }}>
        <Grid md={3}>
          <Box sx={{ margin: 1 }}>
            <Typography sx={{ fontSize: FontSizes.md, fontWeight: 500 }}>
              Max Temp
            </Typography>
            <Typography
              sx={{
                color: Colors.primary,
                fontWeight: 800,
                fontSize: FontSizes.xxl,
              }}
            >
              40.04
            </Typography>
          </Box>
        </Grid>
        <Grid md={3}>
          <Box sx={{ margin: 1 }}>
            <Typography sx={{ fontSize: FontSizes.md, fontWeight: 500 }}>
              Min Temp
            </Typography>
            <Typography
              sx={{
                color: Colors.primary,
                fontWeight: 800,
                fontSize: FontSizes.xxl,
              }}
            >
              40.04
            </Typography>
          </Box>
        </Grid>
        <Grid md={6}>
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
            <Typography
              sx={{
                color: "white",
                fontSize: FontSizes.sm,
                fontWeight: "800",
                letterSpacing: 1,
              }}
            >
              Total Warning
            </Typography>
            <Card
              sx={{
                padding: 1,
                margin: 1,
                color: Colors.primary,
                fontSize: FontSizes.sm,
              }}
            >
              12
            </Card>
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
            <Typography
              sx={{
                color: Colors.white,
                fontSize: FontSizes.sm,
                fontWeight: "800",
                letterSpacing: 1,
              }}
            >
              Total Alarm
            </Typography>
            <Card
              sx={{
                padding: 1,
                margin: 1,
                fontSize: FontSizes.sm,
                color: Colors.primary,
              }}
            >
              12
            </Card>
          </Card>
        </Grid>
      </Box>
    </Paper>
  );
}

export default TempDetails;

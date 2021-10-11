import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Colors, FontSizes } from "../themes";

function ControlPanel() {
  const menu = [
    { id: 1, title: "System Configuration", icon: "images/system.png" },
    { id: 2, title: "Alarm Configuration", icon: "images/alarm.png" },
    { id: 3, title: "User Management", icon: "images/user.png" },
    {
      id: 4,
      title: "Emergency Contact Mamagenent",
      icon: "images/emergency_contact.png",
    },
  ];
  return (
    <Box
      sx={{
        display: "flex",
        padding: 3,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {menu.map((item) => (
        <Grid
          sm={6}
          md={12}
          sx={{
            width: "20vw",
            margin: 1,
            alignItems: "center",
            backgroundColor: Colors.white,
            boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
            borderRadius: 1,
          }}
        >
          <Box sx={{ textAlign: "center", cursor: "pointer" }}>
            <img
              src={item.icon}
              alt={item.title}
              style={{
                height: "10vh",
                width: "5vw",
                marginTop: 20,
                marginBottom: 20,
              }}
            />
            <Typography
              sx={{
                fontSize: FontSizes.md,
                backgroundColor: Colors.primary,
                color: Colors.white,
                padding: 1,
                letterSpacing: 1,
              }}
            >
              {item.title}
            </Typography>
          </Box>
        </Grid>
      ))}
    </Box>
  );
}

export default ControlPanel;

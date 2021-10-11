import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
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
        <Card
          sx={{
            width: "20vw",
            margin: 1,
            // padding: 2,
            alignItems: "center",
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
        </Card>
      ))}
    </Box>
  );
}

export default ControlPanel;

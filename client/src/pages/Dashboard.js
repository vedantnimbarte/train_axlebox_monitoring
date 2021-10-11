import React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { TopBar } from "../components";
import { Colors } from "../themes";
import Home from "./Home";

function Dashboard() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TopBar />
      <TabContext value={value}>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "divider",
            backgroundColor: Colors.white,
          }}
        >
          <TabList onChange={handleChange} aria-label="navigation">
            <Tab label="Home" value="1" />
            <Tab label="Control Panel" value="2" />
            <Tab label="Settings" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1" sx={{ padding: 0 }}>
          <Home />
        </TabPanel>
        <TabPanel value="2" sx={{ padding: 0 }}>
          Item Two
        </TabPanel>
        <TabPanel value="3" sx={{ padding: 0 }}>
          Item Three
        </TabPanel>
      </TabContext>
    </Box>
  );
}

export default Dashboard;

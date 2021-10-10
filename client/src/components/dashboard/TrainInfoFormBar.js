import React from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Grid from "@mui/material/Grid";

function TrainInfoFormBar() {
  return (
    <Box>
      <AppBar position="static" sx={{ backgroundColor: "white", padding: 1 }}>
        <Toolbar>
          <Grid sx={{ display: "flex", width: 1 }}>
            <TextField
              id="outlined-basic"
              label="Train No"
              variant="outlined"
              required
            />
            <FormControl sx={{ width: 0.1 }}>
              <InputLabel id="demo-simple-select-label">Train Type</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                // value={age}
                label="Age"
                // onChange={handleChange}
              >
                <MenuItem value={10}>Wagon</MenuItem>
                <MenuItem value={20}>ICF</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <TextField
              id="outlined-basic"
              label="No of locomotive"
              variant="outlined"
              required
            />
            <FormControl sx={{ width: 0.2 }}>
              <InputLabel id="demo-simple-select-label">
                Locomotive Type
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                // value={age}
                label="Age"
                // onChange={handleChange}
              >
                <MenuItem value={10}>Wagon</MenuItem>
                <MenuItem value={20}>ICF</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default TrainInfoFormBar;

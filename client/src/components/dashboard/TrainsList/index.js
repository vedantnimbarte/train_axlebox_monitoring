import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { purple } from "@mui/material/colors";
import { Colors, FontSizes } from "../../../themes";

export default function TrainsList() {
  return (
    <Paper
      elevation={5}
      sx={{
        margin: 2,
      }}
    >
      <Box
        sx={{
          backgroundColor: Colors.primary,
          color: Colors.white,
          textAlign: "center",
          fontSize: FontSizes.lg,
          borderRadius: 1,
        }}
      >
        <Typography>Trains</Typography>
      </Box>
      <List
        sx={{
          width: "100%",
          maxWidth: 360,
          bgcolor: "background.paper",
          position: "relative",
          overflow: "auto",
          maxHeight: "75vh",
          "& ul": { padding: 0 },
        }}
        subheader={<li />}
      >
        {[0, 1, 2, 3, 4].map((sectionId) => (
          <li key={`section-${sectionId}`}>
            <ul>
              <ListSubheader>{`I'm sticky ${sectionId}`}</ListSubheader>
              {[0, 1, 2].map((item) => (
                <ListItem key={`item-${sectionId}-${item}`}>
                  <ListItemText primary={`Item ${item}`} />
                </ListItem>
              ))}
            </ul>
          </li>
        ))}
      </List>
    </Paper>
  );
}

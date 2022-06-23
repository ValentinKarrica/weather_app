import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import ForumIcon from "@mui/icons-material/Forum";
import AirIcon from "@mui/icons-material/Air";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { Settings } from "@mui/icons-material";
import { useHistory } from "react-router-dom";

const MainListItems = () => {
  const history = useHistory();
  return (
    <React.Fragment>
      <ListItemButton
        onClick={() => {
          history.push("/dashboard");
        }}
      >
        <ListItemIcon>
          <AirIcon />
        </ListItemIcon>
        <ListItemText primary="Weather" />
      </ListItemButton>

      <ListItemButton>
        <ListItemIcon>
          <ForumIcon />{" "}
        </ListItemIcon>
        <ListItemText primary="Chat" />
      </ListItemButton>

      <ListItemButton
        onClick={() => {
          history.push("/settings");
        }}
      >
        <ListItemIcon>
          <Settings />
        </ListItemIcon>
        <ListItemText primary="Settings" />
      </ListItemButton>
    </React.Fragment>
  );
};
export default MainListItems;



export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Saved reports
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItemButton>
  </React.Fragment>
);

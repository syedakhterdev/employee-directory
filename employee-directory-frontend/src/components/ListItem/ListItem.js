import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import PersonAddIcon from "@material-ui/icons/PersonAdd";

import { NavLink } from "react-router-dom";

export const MainListItems = (props) => (
  <div>
      <NavLink
        style={{ color: "rgba(0, 0, 0, 0.87)", textDecoration: "none" }}
        to={"/employees"}
      >
        <ListItem button>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Employees" />
        </ListItem>
      </NavLink>
  </div>
);

export const SecondaryListItems = (props) => (
  <div>
      <NavLink
        style={{ color: "rgba(0, 0, 0, 0.87)", textDecoration: "none" }}
        to={"/addEmployee"}
      >
        <ListItem button>
          <ListItemIcon>
            <PersonAddIcon />
          </ListItemIcon>
          <ListItemText primary="Add Employee" />
        </ListItem>
      </NavLink>
  </div>
);

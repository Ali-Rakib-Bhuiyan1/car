import React, { useState } from "react";

import {
    Divider,

  Drawer,

  IconButton,
  List,
  ListItem,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import Button from '@mui/material/Button';
import useAuth from '../../../hooks/useAuth';
import { NavLink } from "react-router-dom";

const useStyles = makeStyles(()=>({
    navlinks:{
        textDecoration:"none",
        color:"#900C3F",
        fontSize: "14px",
    },
    icon:{
        color: "white"
    }
}));


function DrawerComponent() {
    const { user, logout } = useAuth();
    const classes = useStyles();
    const [openDrawer, setOpenDrawer] = useState(false);

    return (
      <>
        <Drawer
          open={openDrawer}
          onClose={() => setOpenDrawer(false)}
        >
          <List>
          <ListItem onClick={() => setOpenDrawer(false)}>
              <ListItemText>
                <NavLink style={{ textDecoration: 'none'}} to="/home" className={classes.navlinks}>Home</NavLink>
              </ListItemText>
            </ListItem>
            <Divider/>
            <ListItem onClick={() => setOpenDrawer(false)}>
              <ListItemText>
                <NavLink  style={{ textDecoration: 'none' }} className={classes.navlinks} to="/explorePlants" >Explore Plants</NavLink>
              </ListItemText>
            </ListItem>
            <Divider variant="middle"/>
            <ListItem>
            {user?.displayName && <ListItemText className={classes.navlinks}>{user.displayName}</ListItemText>}
            </ListItem>
            <Divider variant="middle"/>
            <ListItem onClick={() => setOpenDrawer(false)}>
              <ListItemText>
            {
               user?.email ?
              <>
              <NavLink style={{ textDecoration: 'none' }} className={classes.navlinks} to="/dashboard">
              Dashboard
              </NavLink>
              <Divider variant="middle"/>
              <Button onClick={logout} style={{ textDecoration: 'none' }} className={classes.navlinks} >Logout</Button>
              </>
              :
              <NavLink style={{ textDecoration: 'none' }} className={classes.navlinks} to="/login">
              Login
              </NavLink>
            }
              </ListItemText>
            </ListItem>
            <Divider variant="middle"/>
          </List>
        </Drawer>
        <IconButton onClick={() => setOpenDrawer(!openDrawer)}className={classes.icon}>
          <MenuIcon />
        </IconButton>
      </>
    );
  }
export default DrawerComponent;

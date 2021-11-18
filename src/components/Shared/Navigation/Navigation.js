import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import Button from '@mui/material/Button';
import useAuth from '../../../hooks/useAuth';
import { NavLink } from "react-router-dom";
import Drawer from "../Drawer/DrawerCom";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    //marginLeft: theme.spacing(20),
    textAlign:"start",
    display: "flex",
    marginBottom: "14px",
  },
  logo: {
    flexGrow: "1",
    textAlign:"start",
    cursor: "pointer",
    marginBottom: "14px",

  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "15px",
    margin: "8px",
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
  },
}));

function Navigation() {
  const { user, logout } = useAuth();
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar position="static" >
      <CssBaseline  />
      <Toolbar >
        <Typography variant="h6" className={classes.logo}>
        aments-car
        </Typography>
        {isMobile ? (
          <Drawer />
        ) : (
          <div className={classes.navlinks}>
            <NavLink style={{ textDecoration: 'none', marginRight:'5'}} className={classes.link} to="/home">
              Home
            </NavLink>
            <NavLink style={{ textDecoration: 'none' }} className={classes.link} to="/explorePlants">
             ExploreCar
            </NavLink>
             {user?.displayName && <Typography className={classes.link}>{user.displayName}</Typography>}
            {
            user?.email ?
            <>
            <NavLink style={{ textDecoration: 'none'}} className={classes.link} to="/dashboardPage">
              Dashboard
            </NavLink>
            <Button onClick={logout} sx={{ fw:"bold", color:"white"}} className={classes.link} >Logout</Button>
            </>
            :
            <NavLink style={{ textDecoration: 'none' }} className={classes.link} to="/login">
              Login
            </NavLink>
           }
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}
export default Navigation;
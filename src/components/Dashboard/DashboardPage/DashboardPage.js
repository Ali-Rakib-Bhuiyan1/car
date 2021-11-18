import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import {Divider} from '@material-ui/core';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {
    Switch,
    Route,
    NavLink,
    useRouteMatch
} from "react-router-dom";
import {
    Button,
    List,
    ListItem,
    ListItemButton
 } from '@mui/material';
import DashboardHome from '../DashboardHome/DashboardHome';
import useAuth from '../../../hooks/useAuth';
import AdminRoute from '../../AdminRoute/AdminRoute';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageProducts from '../ManageProducts/ManageProducts';
import ManageOrder from '../ManageOrder/ManageOrder';
import AddProduct from '../AddProduct/AddProduct';
import Review from '../Review/Review';
import Payment from '../Payment/Payment';
import MyBooking from '../MyBooking/MyBooking';

const drawerWidth = 220;

function DashboardPage(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();
    console.log(path,url);
    const {admin, user, logout } = useAuth();
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar/>
            <Divider/>
            <List>
            <ListItem disablePadding>
            <ListItemButton>
            <NavLink to='/' style={{textDecoration:'none', fontWeight:700}}>Home</NavLink>
            </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
            <ListItemButton>
            <NavLink to={`${url}`} style={{textDecoration:'none', fontWeight:700}}>Dashboard</NavLink>
            </ListItemButton>
            </ListItem>
            {admin &&
            <ListItem disablePadding>
            <ListItemButton>
                <NavLink to={`${url}/makeAdmin`} style={{textDecoration:'none',  fontWeight:700}}>Make Admin</NavLink>
            </ListItemButton>
            </ListItem>
            }
            {admin &&
            <ListItem disablePadding>
            <ListItemButton>
               <NavLink to={`${url}/manageProducts`} style={{textDecoration:'none', fontWeight:700}}>Manage Product</NavLink>
            </ListItemButton>
            </ListItem>
            }
            {admin &&
            <ListItem disablePadding>
            <ListItemButton>
                <NavLink to={`${url}/manageOrder`} style={{textDecoration:'none',  fontWeight:700}}>Manage Orders</NavLink>
            </ListItemButton>
            </ListItem>
            }
            <ListItem disablePadding>
            <ListItemButton>
            {admin &&
                <NavLink to={`${url}/addProduct`} style={{textDecoration:'none',  fontWeight:700}}>Add Product</NavLink>
            }
            </ListItemButton>
            </ListItem>
            {!admin &&
            <ListItem disablePadding>
            <ListItemButton>
                <NavLink to={`${url}/myBooking`} style={{textDecoration:'none', fontWeight:700}}>My Booking</NavLink>
            </ListItemButton>
            </ListItem>
            }
            {!admin &&
            <ListItem disablePadding>
            <ListItemButton>
                <NavLink to={`${url}/review`} style={{textDecoration:'none', fontWeight:700}}>Add Review</NavLink>
            </ListItemButton>
            </ListItem>
            }
            {!admin &&
            <ListItem disablePadding>
            <ListItemButton>
                <NavLink to={`${url}/payment`} style={{textDecoration:'none', fontWeight:700}}>Payment</NavLink>
            </ListItemButton>
            </ListItem>
            }
            {user?.email &&
            <ListItem disablePadding>
            <ListItemButton>
              <Button onClick={logout}>Logout</Button>
            </ListItemButton>
            </ListItem>
            }
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex'}}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" sx={{fontWeight:700, textAlign:'center'}} noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />

                <Switch>
                    <Route exact path={path}>
                        <DashboardHome></DashboardHome>
                    </Route>
                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                    <Route path={`${path}/myBooking`}>
                        <MyBooking></MyBooking>
                    </Route>
                    <Route path={`${path}/payment`}>
                        <Payment></Payment>
                    </Route>
                    <Route  path={`${path}/review`}>
                        <Review></Review>
                    </Route>
                    <AdminRoute path={`${path}/manageProducts`}>
                        <ManageProducts></ManageProducts>
                    </AdminRoute>
                    <AdminRoute path={`${path}/addProduct`}>
                        <AddProduct></AddProduct>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageOrder`}>
                        <ManageOrder></ManageOrder>
                    </AdminRoute>
                </Switch>
            </Box>
        </Box>
    );
}

DashboardPage.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default DashboardPage;
import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

import SearchProduct from "./search/SearchProduct";

const NavBar = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    {/* <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton> */}
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        FOODS
                    </Typography>
                    <SearchProduct />
                    {/* ToDo: change this into logout when the user is alreay login */}
                    <Button color="inherit">
                        <Link
                            to='/register'
                            style={{
                                color: "#fff",
                                textDecoration: "none"
                            }}
                        >
                            SignUp
                        </Link>
                    </Button>
                    <Button color="inherit">
                        <Link
                            to='/login'
                            style={{
                                color: "#fff",
                                textDecoration: "none"
                            }}
                        >
                            SignIn
                        </Link>
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default NavBar;
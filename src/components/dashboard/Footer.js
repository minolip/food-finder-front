import React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Fab from '@mui/material/Fab';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Avatar from '@mui/material/Avatar';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';
import { Divider } from '@mui/material';


const StyledFab = styled(Fab)({
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
});

const Footer = () => {

    const [value, setValue] = React.useState(0);

    return (
        <AppBar position="fixed" color="inherit" sx={{ top: 'auto', bottom: 0 }}>
            <Divider/>
            <Toolbar>
                {/* <IconButton color="inherit" aria-label="open drawer">
                    <MenuIcon />
                </IconButton> */}
                <Box sx={{ flexGrow: 1 }} />
                {/* <IconButton color="inherit">
                    <SearchIcon />
                </IconButton>
                <IconButton color="inherit">
                    <MoreIcon />
                </IconButton> */}
                <Typography>&copy; 2022 foodfinder.net</Typography>
            </Toolbar>
        </AppBar>
    );
}

export default Footer;
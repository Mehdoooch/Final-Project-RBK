import React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Sidebar from './Sidebar';
import "./Admin.css"

function Navbar() {

    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };
    return (
        <Box sx={{ flexGrow: 1 }}>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                sx={{ mr: 2 }}
                onClick={toggleDrawer("left", true)}
            >
                <MenuIcon sx={{ color: 'green' }} />
            </IconButton>

            <Sidebar state={state} setState={setState} toggleDrawer={toggleDrawer}></Sidebar>
        </Box>
    )
}

export default Navbar;



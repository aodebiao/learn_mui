import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';

import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {navbarStyles} from './style'
import Toolbar from '@mui/material/Toolbar';
import {mainNavbarItems} from "../const/navbarListItem";
import {useNavigate} from "react-router-dom";

const drawerWidth = 240;

function Navbar(props) {
    const {window} = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };


    const navigate =useNavigate();

    return (

        <Drawer
            anchor='left'
            open={true}
            sx={navbarStyles.drawer}
            variant='permanent'

        >
            <Toolbar/>
            <Divider/>
            <List>
                        {
                            mainNavbarItems.map((item, index) => (
                                <ListItem key={item.id}
                                          disablePadding
                                        onClick={()=> navigate(item.route)}
                                >
                                    <ListItemButton>
                                        <ListItemIcon sx={navbarStyles.icons}>
                                            {item.icon}
                                        </ListItemIcon>
                                        <ListItemText primary={item.label}/>
                                    </ListItemButton>
                                </ListItem>
                            ))
                        }
            </List>
        </Drawer>
    );
}

export default Navbar
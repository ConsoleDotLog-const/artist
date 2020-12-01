import React from 'react';

import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'

const SideDrawer = (props) => {
    return (
        <Drawer
            anchor="right"
            open={props.open}
            onClose={()=> props.onClose(false) }
        >
            <List component="nav">
                <ListItem button onClick={()=>console.log("Header")} className="heading-3">
                   Header
                </ListItem>
                <ListItem button onClick={()=>console.log("Featured")} className="heading-3">
                    Featured
                </ListItem>
                <ListItem button onClick={()=>console.log("Highlights")} className="heading-3">
                    Highlights
                </ListItem>
                <ListItem button onClick={()=>console.log("Pricing")} className="heading-3">
                    Pricing
                </ListItem>
                <ListItem button onClick={()=>console.log("Location")} className="heading-3">
                    Location
                </ListItem>

            </List>
        </Drawer>
    );
};

export default SideDrawer;
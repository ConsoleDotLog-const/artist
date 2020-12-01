import React, { Component } from 'react';


import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/Toolbar'
import MenuIcon from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/Icon'

import SideDrawer from './sideDrawer'


class Header extends Component {

    state={
        drawerOpen: false,
        headerShow: false
    }

    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll)
    }

    handleScroll = () => {
        if(window.scrollY > 0){
                this.setState({
                    headerShow:true
                })
        }else{
            this.setState({
                headerShow:false
            })
        }
    }

    toggleDrawer = (value)=>{
        this.setState({
            drawerOpen: value
        })
    }

    render() {
        return (
            <div className="header">
                <AppBar
                    position="fixed"
                    style={{
                        backgroundColor: this.state.headerShow ? "#2f2f2f" : 'transparent' ,
                        boxShadow:'none',
                        padding: '10px 0px'
                    }}
                >
                   <ToolBar>

                       <div className="header__logo">
                            <div className='heading-1'
                                style={{
                                    textTransform:"uppercase"
                                }}
                            >Youmii</div>
                            <div className='heading-3'>Design Studios</div>
                       </div>

                       <IconButton
                        aria-label="menu"
                        color="inherit"
                        onClick={()=> this.toggleDrawer(true) }
                        
                        
                       >
                           <MenuIcon/>
                       </IconButton>

                       <SideDrawer
                        open={this.state.drawerOpen}
                        onClose={(value)=> this.toggleDrawer(value)}
                       >


                       </SideDrawer>
                     
                   </ToolBar>
                   
                </AppBar>
            </div>
        );
    }
}

export default Header;
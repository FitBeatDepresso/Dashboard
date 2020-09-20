import React, { Component, useState } from 'react';
import "./SideBar.css"

import {NavLink} from "react-router-dom"; 

import {slide as Menu} from "react-burger-menu"; 

import { Button } from '@material-ui/core';


const SideBar = (props) => {

    const [sideBarOpen, setSideBar] = useState(false); 

    const closeSideBar = () => {
        setSideBar(false); 
    }

    const handleStateChange = (state) => {
        setSideBar(state.isOpen); 
    }

    return (
        <Menu isOpen={sideBarOpen} onStateChange={(state) => handleStateChange(state)}> 
            <Button className="CloseNavigation" onClick={closeSideBar}> Close </Button> 

            <NavLink to="/welcome"> 
                <a className="SideBarButton"> 
                    Home Page
                </a>
            </NavLink>

            <NavLink to="/circle"> 
                <a className="SideBarButton"> 
                    Circle Page
                </a>
            </NavLink>

            <NavLink to="/"> 
                <a className="SideBarButton"> 
                    Log Out
                </a>
            </NavLink>
        </Menu>
    );
}

export default SideBar;
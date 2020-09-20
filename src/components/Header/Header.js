import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'; 

import './Header.css';

import { Button } from '@material-ui/core';

//Assets
import headerTitle from '../../assets/img/landingPage/headerTitle.png'


const Header = (props) => {
    return (
        <header className="Header">
           <nav className="Navigation">
                <NavLink to="/"> 
                    <img className="HeaderLogo" src={headerTitle} />
                </NavLink> 
                <div className="Right" style={{ position: "absolute", top: "0", right: "0", margin: "1.5rem 3rem" }}> 
                    <NavLink style={{textDecoration: "none"}} to="/login"> 
                        <Button color="primary" style={{color: "#DE1645", textTransform: "capitalize", fontWeight: "bold", background:"transparent", border: "3px solid #DE1645", borderRadius: "50px", width:"8rem"}}> Login </Button>
                    </NavLink>

                    <NavLink style={{textDecoration: "none"}} to="/signup"> 
                    <Button color="primary" style={{color: "#fff", marginLeft:"1rem", textTransform: "capitalize", fontWeight: "bold", background:"#DE1645", border: "1px solid #DE1645", borderRadius: "50px", width:"8rem"}}> Sign Up </Button>
                    </NavLink>
                </div>
            </nav> 
        </header>
    );
}

export default Header;
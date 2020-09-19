import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'; 

import classes from './Header.css';

import { Button } from '@material-ui/core';

//Assets
import headerTitle from '../../assets/img/landingPage/headerTitle.png'


const Header = (props) => {
    return (
        <header className={classes.Header}>
           <nav className={classes.Navigation}>
                <img className={classes.HeaderLogo} src={headerTitle} />
                <div className={classes.Right}> 
                    <NavLink to="/login"> 
                        <Button color="primary"> Login </Button>
                    </NavLink>
                    <Button color="primary"> Sign Up </Button>
                </div>
            </nav> 
        </header>
    );
}

export default Header;
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'; 

import { Button } from '@material-ui/core';

import classes from './Welcome.css'; 

// Assests
import welcomeImg from '../../assets/img/welcomePage/welcome.png';
import avatar_4 from '../../assets/img/avatar/4.png'

const Welcome = (props) => {
    return (
        <div>
            <div className={classes.Info}> 
                <img className={classes.Avatar} src={avatar_4}/>
                <h1> Welcome, Ayana! </h1>
                <h2> Your mood score: 8/10 </h2>
                <a href="#"> enter score manually  </a>
                <NavLink to="/circle"> 
                    <Button> Check on your circle </Button>
                </NavLink>
            </div>


            <div className={classes.ImgContainer}> 
                <img className={classes.Img} src={welcomeImg}/>
            </div>
        </div>
    );
}

export default Welcome;
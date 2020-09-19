import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'; 

import { Button, InputLabel, Input } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';


import classes from './Login.css'; 

//Assets
import headerTitle from '../../assets/img/landingPage/headerTitle.png'

const Login = (props) => {
    return (
        <div>
            <img src={headerTitle}/>
        
            <div className={classes.Form}>
                <h1> Sign In </h1>
                <FormControl>
                    <InputLabel htmlFor="my-input"> Email Address </InputLabel>
                    <Input id="my-input" aria-describedby="my-helper-text" />
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="my-input"> Password </InputLabel>
                    <Input id="my-input" aria-describedby="my-helper-text" />
                </FormControl>

                
                <div className={classes.Button}>
                    <Button color="primary" > Sign In </Button>
                    <Button color="primary" > Connect with Fitbit account </Button>
                </div>

                <h2> Don't have an account 
                    <NavLink to="/signup">
                        <a> Register now! </a>
                    </NavLink>
                </h2>
            </div>
        </div>
    );
}

export default Login;
import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

import './Landing.css'; 

import { Button } from '@material-ui/core';

import Header from '../../components/Header/Header'; 

// Assets
import landingImg from '../../assets/img/landingPage/landing.png';

const Landing = (props) =>{
    return (
        <div>
            <Header />
            <div> 
                <div className="Text">
                    <h1> stay connected. </h1>
                    <h4> Easily check up and see how your loved ones are truly doing, determined by FitBit activity.  </h4>
                    <NavLink style={{textDecoration: "none"}} to="/login"> 
                        <Button color="primary"> Get started </Button>     
                    </NavLink>           
                </div>

                <div className="ImageContainer"> 
                    <img className="Img" src={landingImg}/>
                </div>
            </div>

            <div className="Footer"> 
                <h4 className="FooterText"> Shout out to 
                <a href=""> Ian </a>,
                <a href=""> Ayana </a>, and 
                <a href=""> Kevin </a> for making this project come true - 
                <a href=""> Chris </a></h4>
            </div>
        </div>
    );
}

export default Landing;
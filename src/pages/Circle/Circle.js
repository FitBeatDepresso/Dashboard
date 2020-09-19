import React, { Component } from 'react';

import { NavLink } from "react-router-dom";

import './Circle.css';


import { Avatar, Button } from '@material-ui/core';

// Assets
import circleImg from '../../assets/img/circlePage/circle.png'

import avatar_1 from '../../assets/img/avatar/1.png';
import avatar_2 from '../../assets/img/avatar/2.png';
import avatar_3 from '../../assets/img/avatar/3.png';
import avatar_4 from '../../assets/img/avatar/4.png';

const Circle = (props) => {
    return (
        <div>
           
            <h1 style={{marginBottom: "0"}}> Your Circle </h1>
            <NavLink style={{textDecoration: "none"}} to="/inviteFriends">
                <a> Invite friends </a>
            </NavLink>

            <div className="CircleContainer">
                <div className="AvatarContainer">
                    <a href="#">
                    <img style={{background: "#A2EF8E"}} src={avatar_1}/>
                    <h3> Name </h3>
                    </a>
                </div>

                <div className="AvatarContainer">
                    <img style={{background: "#F7ED99"}} src={avatar_2}/>
                    <h3> Name </h3>
                </div>

                <div className="AvatarContainer">
                    <img style={{background: "#FF5A5A"}} src={avatar_3}/>
                    <h3> Name </h3>
                    {/* <h3> It looks like "" may not be doing well today <a href="#"> Reach out? </a> </h3> */}
                </div>

                <div className="AvatarContainer">
                    <img style={{background: "#A2EF8E"}} src={avatar_4}/>
                    <h3> Name </h3>
                </div>

            </div>
            <div className="CircleBgImg">
            <img src={circleImg}/>
            </div>
        </div>

    
    );
}

export default Circle;

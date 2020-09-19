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
            <h1> Your Circle </h1>
            <NavLink style={{textDecoration: "none"}} to="/inviteFriends">
                <a> Invite friends </a>
            </NavLink>

            <div className="CircleContainer">
                <div className="AvatarContainer">
                    <img src={avatar_1}/>
                    <h1> Name </h1>
                </div>

                <div className="AvatarContainer">
                    <img src={avatar_2}/>
                    <h1> Name </h1>
                </div>

                <div className="AvatarContainer">
                    <img src={avatar_3}/>
                    <h1> Name </h1>
                    <h3> It looks like "" may not be doing well today <a href="#"> Reach out? </a> </h3>
                </div>

                <div className="AvatarContainer">
                    <img src={avatar_4}/>
                    <h1> Name </h1>
                </div>

            </div>
            <img src={circleImg}/>
        </div>
    );
}

export default Circle;

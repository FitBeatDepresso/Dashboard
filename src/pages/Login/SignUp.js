import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { Button, InputLabel, Input } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';


import './SignUp.css';

//Assets
import headerTitle from '../../assets/img/landingPage/headerTitle.png';
import watchImg from '../../assets/img/loginPage/phone.png';
import {useDispatch} from "react-redux";
import {signupRequested} from "../../slices/accessSlice";


const SignUp = (props) => {
    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setFullName] = useState('');

    return (
        <div>
            <img class="HeaderTitle" src={headerTitle} />

            <div className="Form">
            <h1> Create Account </h1>
            <FormControl className="FormControl">

                    <input id="my-input" placeholder="Name" aria-describedby="my-helper-text" onChange={(evt) => setFullName(evt.target.value)} />
                </FormControl>

                <FormControl className="FormControl">

                    <input id="my-input" placeholder="Email" aria-describedby="my-helper-text"  onChange={(evt) => setEmail(evt.target.value)} />
                </FormControl>
                <FormControl className="FormControl">

                    <input type="password"id="my-input" placeholder="Password" aria-describedby="my-helper-text" onChange={(evt) => setPassword(evt.target.value)}  />
                </FormControl>


                <div className="Button">
                    <Button color="primary" onClick={() => dispatch(signupRequested({email, password, fullName}))}> Register</Button>
                </div>

                <h2> Already have an account?
                    <NavLink to="/login">
                        <a> Login! </a>
                    </NavLink>
                </h2>
            </div>

            <div className="PhoneContainer">
                <img className="Img" src={watchImg}/>
            </div>
        </div>
    );
}

export default SignUp;

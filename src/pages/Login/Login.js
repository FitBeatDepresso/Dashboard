import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import { Button, InputLabel, Input } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';

import { useDispatch } from 'react-redux';
import { loginRequested, loginRequestedu } from "../../slices/accessSlice";


import './Login.css';

//Assets
import headerTitle from '../../assets/img/landingPage/headerTitle.png';
import phoneImg from '../../assets/img/loginPage/watch.png';


const Login = (props) => {
    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginHandler = () => {
        dispatch(loginRequested({ email, password }));
    }

    const fitbit_authencation_url = "https://www.fitbit.com/oauth2/authorize?response_type=token&client_id=22BRXL&redirect_uri=http%3A%2F%2F127.0.0.1%3A3000%2Fwelcome&scope=activity%20heartrate%20location%20nutrition%20profile%20settings%20sleep%20social%20weight&expires_in=604800";

    return (
        <div>
            <NavLink to="/">
                <img class="HeaderTitle" src={headerTitle} />
            </NavLink>

            <div className="Form">
            <h1> Sign In </h1>

                <FormControl className="FormControl">

                    <input id="my-input" placeholder="Email" aria-describedby="my-helper-text" onChange={(evt) => setEmail(evt.target.value)} />
                </FormControl>
                <FormControl className="FormControl">

                    <input type="password"id="my-input" placeholder="Password" aria-describedby="my-helper-text" onChange={(evt) => setPassword(evt.target.value)} />
                </FormControl>


                <div className="Button">
                    <Button color="primary" onClick={loginHandler}> Sign In </Button>
                    {/*<Button color="primary" onClick={window.open(fitbit_authencation_url)} > Connect with Fitbit</Button>*/}
                </div>

                <h2> Don't have an account?
                    <NavLink to="/signup">
                        <a> Register now! </a>
                    </NavLink>
                </h2>
            </div>

            <div className="PhoneContainer">
                <img className="Img" src={phoneImg}/>
            </div>
        </div>
    );
}

export default Login;

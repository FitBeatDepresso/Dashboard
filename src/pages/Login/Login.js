import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { Button, InputLabel, Input } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';

import { useDispatch } from 'react-redux';
import { loginRequested, loginRequestedu } from "../../slices/accessSlice";


import './Login.css';

//Assets
import headerTitle from '../../assets/img/landingPage/headerTitle.png';
import phoneImg from '../../assets/img/loginPage/phone.png';


const Login = (props) => {
    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginHandler = () => {
        dispatch(loginRequested({ email, password }));
    }

    return (
        <div>
            <img class="HeaderTitle" src={headerTitle} />

            <div className="Form">
            <h1> Sign In </h1>
            
                <FormControl>
                    
                    <Input id="my-input" placeholder="Email" aria-describedby="my-helper-text" onChange={(evt) => setEmail(evt.target.value)} />
                </FormControl>
                <FormControl>
                    
                    <Input id="my-input" placeholder="Password" aria-describedby="my-helper-text" onChange={(evt) => setPassword(evt.target.value)} />
                </FormControl>


                <div className="Button">
                    <Button color="primary" onClick={loginHandler}> Sign In </Button>
                    <Button color="primary" > Connect with Fitbit account </Button>
                </div>

                <h2> Don't have an account?
                    <NavLink to="/signup">
                        <a> Register now! </a>
                    </NavLink>
                </h2>
            </div>

            {/* <div className="PhoneContainer"> 
                <img className="Img" src={phoneImg}/>
            </div> */}
        </div>
    );
}

export default Login;

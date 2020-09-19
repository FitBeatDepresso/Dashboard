import React, { useState } from 'react';

import { NavLink } from "react-router-dom";


import { Avatar, Button, FormControl } from '@material-ui/core';
import {useDispatch} from "react-redux";
import {addConnectionRequested} from "../../slices/accessSlice";

// Assets



const InviteFriends = (props) => {

    const dispatch = useDispatch();

    const [email, setEmail] = useState('');

    const addInviteHandler = () => {
        dispatch(addConnectionRequested({email}))
    }
    return (
        <div>
            <FormControl>
                <input placeholder="Email address" onChange={(evt) => setEmail(evt.target.value)}></input>
            </FormControl>
            <Button onClick={addInviteHandler}>Submit</Button>
        </div>
    )
}

export default InviteFriends;

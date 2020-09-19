import React, {Component, useEffect, useState} from 'react';

import { NavLink } from "react-router-dom";

import './Circle.css';

import { Avatar, Button } from '@material-ui/core';
import Modal from 'react-modal';

// Assets
import circleImg from '../../assets/img/circlePage/circle.png'
import mailImg from '../../assets/img/circlePage/mail.png'
import phoneImg from '../../assets/img/circlePage/phone.png'
import avatar_1 from '../../assets/img/avatar/1.png';
import avatar_2 from '../../assets/img/avatar/2.png';
import avatar_3 from '../../assets/img/avatar/3.png';
import avatar_4 from '../../assets/img/avatar/4.png';
import {useDispatch, useSelector} from "react-redux";
import {getConnectionsRequested} from "../../slices/accessSlice";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

const Circle = (props) => {

    const [modalOpen, setModal] = useState(false);


    const openModal = () => {
        setModal(true);
    }

    const closeModal = () => {
        setModal(false);
    }

    const connections = useSelector(state => state.access.connections);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getConnectionsRequested())
    }, [])
    console.log("CONNECTIONS: ", connections);

    return (
        <div>
             <h1 style={{marginBottom: "0"}}> Your Circle </h1>
            <NavLink style={{textDecoration: "none"}} to="/inviteFriends">
                <a> Invite friends </a>
            </NavLink>

            <Modal
                isOpen={modalOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div className="Modal">
                    <button className="ModalButton" onClick={closeModal}> Close </button>
                    <img className="ModalAvatar" src={avatar_1} />

                    <div className="ModalInfo">
                        <h1> Name </h1>
                        <h2> Mood score: 8/10 </h2>
                        <div className="ModalLine"></div>
                       

                        <h3> Reach out to *name* </h3>
                        <div className="Email">
                            {/* Remember to insert email logo */}
                            <img src={mailImg} />
                            <a> sampleemail@gmail.com </a>
                            {/* <img src={mailImg} /> */}
                        </div>

                        <div className="Phone">
                        <img src={phoneImg} />
                            {/* Remember to insert phone logo */}
                            <a> +1 234 567 8910  </a>

                        </div>
                    </div>
                </div>
            </Modal>

            <div className="CircleContainer">
                <div className="AvatarContainer" onClick={openModal}>
                  
                    <img style={{background: "#A2EF8E"}} src={avatar_1}/>
                    <h3> Name </h3>
                    
                </div>

                <div className="AvatarContainer"onClick={openModal}>
                    <img style={{background: "#F7ED99"}} src={avatar_2}/>
                    <h3> Name </h3>
                </div>

                <div className="AvatarContainer"onClick={openModal}>
                    <img style={{background: "#FF5A5A"}} src={avatar_3}/>
                    <h3> Name </h3>
                    {/* <h3> It looks like "" may not be doing well today <a href="#"> Reach out? </a> </h3> */}
                </div>

                <div className="AvatarContainer"onClick={openModal}>
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

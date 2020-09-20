import React, {Component, useEffect, useState} from 'react';

import { NavLink } from "react-router-dom";

import './Circle.css';

import {Avatar, Button, FormControl} from '@material-ui/core';
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
import {addConnectionRequested, getConnectionsRequested} from "../../slices/accessSlice";

import SideBar from '../../components/SideBar/SideBar'; 

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
    const [modalInvitationOpen, setInvitationModal] = useState(false);
    const [email, setEmail] = useState('');
    const [showIndex, setShowIndex] = useState(-1);

    const openModal = (index) => {
        setModal(true);
        setShowIndex(index);
    }

    const closeModal = () => {
        setModal(false);
        setShowIndex(-1);
    }

    const openInvitationModal = () => {
        setInvitationModal(true);
    }

    const closeInvitationModal = () => {
        setInvitationModal(false);
    }

    const connections = useSelector(state => state.access.connections);
    const dispatch = useDispatch();

    const images = [avatar_1, avatar_2, avatar_3, avatar_4];

    useEffect(() => {
        dispatch(getConnectionsRequested())
    }, [])
    console.log("CONNECTIONS: ", connections);

    const addInviteHandler = () => {
        dispatch(addConnectionRequested({email}))
        setInvitationModal(false);
    }

    return (
        <div id="Circle"> 
            <SideBar pageWrapId={"page-wrap-circle"} outerContainerId={"Circle"} />
            <div id="page-wrap-circle"> 
                <h1 style={{marginBottom: "0"}}> Your Circle </h1>
                <a onClick={() => setInvitationModal(true)}> Invite friends </a>
            <Modal
                isOpen={modalOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div className="Modal">
                    <button className="ModalButton" onClick={closeModal}> Close </button>
                    <img className="ModalAvatar" src={images[showIndex % images.length]} />

                    <div className="ModalInfo">
                        <h1> {showIndex < 0 ? "" : connections[showIndex].fullName} </h1>
                        <h2> Mood score: {showIndex < 0 ? 0 : connections[showIndex].moodScore}/10 </h2>
                        <div className="ModalLine"></div>

                        <h3> Reach out to {showIndex < 0 ? "" : connections[showIndex].fullName} </h3>
                        <div className="Email">
                            <img src={mailImg} />
                            <a> {showIndex < 0 ? "" : connections[showIndex].email} </a>
                        </div>

                        <div className="Phone">
                            <img src={phoneImg} />
                            <a> +1 234 567 8910  </a>

                        </div>
                    </div>
                </div>
            </Modal>

            <Modal
                isOpen={modalInvitationOpen}
                onRequestClose={closeInvitationModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div className="Modal InviteModal">
                    <button className="ModalButton" onClick={closeInvitationModal}> Close </button>

                    <div className="ModalInfo">
                        <h1>Invite Friends</h1>
                        <p>Invite your friends and family members to join FitBeatDepresso! You'll be able to see each other's mood scores and easily check up on each other, no matter how far away you physically may be.</p>
                        <h4>Enter their email to have them join your circle!</h4>
                        <FormControl>
                            <input placeholder="Email address" onChange={(evt) => setEmail(evt.target.value)}></input>
                        </FormControl>
                        <Button onClick={addInviteHandler}>Submit</Button>
                    </div>
                </div>
            </Modal>

                <div className="CircleContainer">
                    {
                        (connections || []).map((item, index) => {
                            return(<div className="AvatarContainer" onClick={() => openModal(index)}>
                                <img style={{background: "#A2EF8E"}} src={images[index % images.length]}/>
                                <h3>{item.fullName}</h3>
                            </div>)
                        })
                    }
                    {/*<div className="AvatarContainer" onClick={openModal}>*/}
                    {/*  */}
                    {/*    <img style={{background: "#A2EF8E"}} src={avatar_1}/>*/}
                    {/*    <h3> Name </h3>*/}
                    {/*    */}
                    {/*</div>*/}

                    {/*<div className="AvatarContainer"onClick={openModal}>*/}
                    {/*    <img style={{background: "#F7ED99"}} src={avatar_2}/>*/}
                    {/*    <h3> Name </h3>*/}
                    {/*</div>*/}

                    {/*<div className="AvatarContainer"onClick={openModal}>*/}
                    {/*    <img style={{background: "#FF5A5A"}} src={avatar_3}/>*/}
                    {/*    <h3> Name </h3>*/}
                    {/*    /!* <h3> It looks like "" may not be doing well today <a href="#"> Reach out? </a> </h3> *!/*/}
                    {/*</div>*/}

                    {/*<div className="AvatarContainer"onClick={openModal}>*/}
                    {/*    <img style={{background: "#A2EF8E"}} src={avatar_4}/>*/}
                    {/*    <h3> Name </h3>*/}
                    {/*</div>*/}

                </div>
                <div className="CircleBgImg">
                <img src={circleImg}/>
                </div>
            </div>
        </div>


    );
}

export default Circle;

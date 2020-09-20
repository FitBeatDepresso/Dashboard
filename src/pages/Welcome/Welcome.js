import React, { Component, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { Button, TextField } from '@material-ui/core';
import Modal from 'react-modal';

import './Welcome.css';

// Assests
import SideBar from '../../components/SideBar/SideBar';
import welcomeImg from '../../assets/img/welcomePage/welcome.png';
import avatar_4 from '../../assets/img/avatar/4.png'
import {useDispatch, useSelector} from "react-redux";
import {profileRequested} from "../../slices/accessSlice";

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
};

const Welcome = (props) => {

    var subtitle;

    const user = useSelector(state => state.access.user.userProfile)

    const [name, setName] = useState('Ayana');
    const [avatar, setAvatar] = useState('');
    const [moodScore, setMoodScore] = useState(0);
    const [modalOpen, setModal] = useState(false);
    const [tempScore, setTempScore] = useState('');


    const openModal = () => {
        setModal(true);
    }

    const afterOpenModal = () => {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
      }

    const closeModal = () => {
        setModal(false);
    }

    const updateModal = () => {

        closeModal();
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleChange(e);
        }
    }

    const handleChange = (score) => {
        setTempScore(score.target.value)
        console.log(tempScore);
    }


    useEffect(() => {
        dispatch(profileRequested())
    }, [])
    // useEffect(() => {
    //     // // get the url
    //     var url = window.location.href;
    //     // //getting the access token from url
    //     var access_token = url.split("#")[1].split("=")[1].split("&")[0];
    //     // // get the userid
    //     var userId = url.split("#")[1].split("=")[2].split("&")[0];
    //
    //     console.log("Access token: " + access_token);
    //     console.log("User ID: " + userId);
    //
    //     var xhr_sleep = new XMLHttpRequest();
    //     xhr_sleep.open('GET', 'https://api.fitbit.com/1/user/' + userId + '/sleep/date/today.json');
    //     xhr_sleep.setRequestHeader("Authorization", 'Bearer ' + access_token);
    //     xhr_sleep.onload = function () {
    //         if (xhr_sleep.status === 200) {
    //             console.log(xhr_sleep.responseText);
    //
    //             var sleep_data = JSON.parse(xhr_sleep.responseText);
    //
    //             var timeInBed = sleep_data.summary.totalTimeInBed;
    //
    //             console.log(timeInBed);
    //         }
    //     };
    //     xhr_sleep.send()
    //
    //     var xhr_profile = new XMLHttpRequest();
    //     xhr_profile.open('GET', 'https://api.fitbit.com/1/user/' + userId + '/profile.json');
    //     xhr_profile.setRequestHeader("Authorization", 'Bearer ' + access_token);
    //     xhr_profile.onload = function () {
    //         if (xhr_profile.status === 200) {
    //
    //             var profile_data = JSON.parse(xhr_profile.responseText);
    //             console.log(xhr_profile.responseText);
    //
    //             setName(profile_data.user.fullName);
    //             setAvatar(profile_data.user.avatar);
    //
    //         }
    //     };
    //     xhr_profile.send()
    //
    // })

    return (
        <div id='App'>
            <SideBar pageWrapId={'page-wrap'} outerContainerId={'App'}/>
            <div id={'page-wrap'}>
            <div className="Info">
                { user ?
            <div className="InfoContainer">
                <img className="Avatar" src={avatar_4}/>
                <h1> Welcome, {user.fullName}! </h1>
                <h2 ref={_subtitle => (subtitle = _subtitle)} > Your mood score: {user.moodScore}/10 </h2>

                <a className="Manual" onClick={openModal}>
                    enter score manually
                </a>
                <NavLink to="/circle">
                    <Button> Check on your circle </Button>
                </NavLink>
                </div> : null}
            </div>

            <Modal
                isOpen={modalOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >

                <Button onClick={closeModal}> Close Modal </Button>
                <form noValidate autoComplete="off">
                <input
                    id="my-input"
                    placeholder="Manually enter your mood score"
                    aria-describedby="my-helper-text"
                    onKeyDown={handleKeyDown}
                    onChange={handleChange}
                    // ref={(score) => tempScore = score }
                />
                </form>
                <Button onClick={updateModal}> Done </Button>

            </Modal>


            <div className="ImgContainer">
                <img className="Img" src={welcomeImg}/>
            </div>
            </div>
        </div>
    );
}

export default Welcome;

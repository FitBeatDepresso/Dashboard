import { createSlice, createAction } from '@reduxjs/toolkit'
import Cookies from 'js-cookie'

const accessSlice = createSlice({
    name: 'login',
    initialState: {
        user: {
            isAuthenticated: typeof Cookies.get('auth__flow__fitbeatdepresso__loggedUserObj') !== 'undefined',
            loggedUserObj: Cookies.getJSON('auth__flow__fitbeatdepresso__loggedUserObj'),
            connections: [],
            userProfile: null,
        },
        error: null,
    },
    reducers: {
        loginSucceeded(state, action) {
            state.user = {
                isAuthenticated: true,
                loggedUserObj: action.payload,
            }
        },
        loginFailed(state, action) {
            state.error = action.payload
        },
        profileSucceeded(state, action) {
            state.user = {
                userProfile: action.payload,
            }
        },
        profileFailed(state, action) {
            state.user.isAuthenticated = false;
            state.error = null
        },
        logoutSucceeded(state, action){
            state.user.isAuthenticated = false;
            state.error = null
        },
        logoutFailed(state, action){
            state.error = action.payload
        },
        signupSucceeded(state, action){
            state.user = {
                isAuthenticated: true,
                loggedUserObj: action.payload,
            }
        },
        signupFailed(state, action) {
            state.error = action.payload
        },
        getConnectionsSucceeded(state, action){
            state.connections = action.payload;
        }
        // getStudentPicturesSucceeded(state, action){
        //     state.user.picture = action.payload
        // },
    }
})

export const loginRequested = createAction('login/requested');
export const logoutRequested = createAction('logout/requested');
export const profileRequested = createAction('profile/requested');
export const signupRequested = createAction('signup/requested');
export const getConnectionsRequested = createAction('connections/getRequested');
export const addConnectionRequested = createAction('connections/addRequested');

export const { loginSucceeded, loginFailed, profileSucceeded, profileFailed, logoutSucceeded, logoutFailed, signupSucceeded, signupFailed, getConnectionsSucceeded} = accessSlice.actions

export const authenticationStatus = state => state.access.user.isAuthenticated;

export default accessSlice.reducer

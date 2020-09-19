import { put, call, takeLatest } from 'redux-saga/effects';
import Cookies from 'js-cookie';
import {post, get} from '../utils/api';
import {loginFailed, loginRequested, logoutSucceeded, logoutRequested, profileSucceeded, profileFailed, logoutFailed, profileRequested, loginSucceeded, signupRequested, signupFailed, signupSucceeded} from '../slices/accessSlice';
import {url} from '../utils/config';
import lGet from 'lodash/get';
function* signup(action){
    const {email, password, firstName, lastName} = action.payload;
    try {
        const response = yield call(
            post,
            `${url}/auth/local/signup`,
            {email, password, firstName, lastName}
        );
        const inOneWeek = new Date(new Date().getTime() + (1000 * 60 * 60 * 24 * 7));
        Cookies.set('auth__flow__fitbeatdepresso__loggedUserObj', response.data, {expires: inOneWeek});
        yield put(signupSucceeded(response.data));
    } catch (error){
        // yield put(snackbarError("Please try again"))
        if(lGet(error.response, 'data')) {
            yield put(signupFailed(error))
        } else {
            yield put(signupFailed(error))
        }
    }
}

export function* watchSignup(){
    yield takeLatest(signupRequested.toString(), signup);
}

function* login(action){
    const {email, password} = action.payload;

    try {
        const response = yield call(
            post,
            `${url}/auth/local/login`,
            {email, password}
        );
        const inOneWeek = new Date(new Date().getTime() + (1000 * 60 * 60 * 24 * 7));
        console.log('LOGIN :: ', response.data);
        Cookies.set('auth__flow__fitbeatdepresso__loggedUserObj', response.data, {expires: inOneWeek});
        yield put(loginSucceeded(response.data));
    }
    catch (error){
        // yield put(snackbarError("Incorrect email or password"))
        if(lGet(error.response, 'data')) {
            yield put(loginFailed(error))
        } else {
            yield put(loginFailed(error))
        }
    }
}

export function* watchLogin() {
    yield takeLatest(loginRequested.toString(), login);
}

function* logout() {
    try {
        yield call(get, `${url}/logout`);
        Cookies.remove('auth__flow__embodiment7__loggedUserObj');
        yield put(logoutSucceeded());
    } catch (error) {
        if(lGet(error.response, 'data')) {
            yield put(logoutFailed(error.response.data));
        } else {
            yield put(logoutFailed(error.response));
        }
    }
}

export function* watchLogout() {
    yield takeLatest(logoutRequested.toString(), logout);
}

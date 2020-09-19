import {watchSignup, watchLogout, watchLogin, watchGetConnections, watchAddConnection} from "./accessSaga";
import {all, fork} from 'redux-saga/effects';

export default function* rootSaga(){
    yield all([
        fork(watchLogin),
        fork(watchLogout),
        fork(watchSignup),
        fork(watchGetConnections),
        fork(watchAddConnection),
    ])
}

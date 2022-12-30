import {authAPI, usersAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET-USER-DATA';

let initialState = {
    userId: null,
    login: null,
    email: null,
    password: null,
    rememberMe: false,
    captcha: false,
    isAuth: false
};

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data
            }
        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => ({type: SET_USER_DATA,
    data: {userId, email, login, isAuth}});

export const getAuth = () => {
    return (dispatch) => {

        usersAPI.getAuth().then(data => {
            if (data.resultCode === 0) {
                let {id, email, login} = data.data;
                dispatch(setAuthUserData(id, email, login, true));
            } else {
                let message = data.message;
                dispatch(stopSubmit("login", {_error: message}));
            }
        });
    } // thunk
} //thunk creator

export const sendAuthorization = (email, password, rememberMe) => {
    return (dispatch) => {
        authAPI.sendLogin(email, password, rememberMe).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuth());
            }
        });
    } // thunk
} //thunk creator

export const logout = () => {
    return (dispatch) => {
        authAPI.logout().then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }
        });
    } // thunk
} //thunk creator

export default authReducer;
import {authAPI, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'social-network/auth/SET-USER-DATA';
const GET_CAPTCHA_URL = 'social-network/auth/GET-CAPTCHA-URL';

let initialState = {
    userId: null,
    login: null,
    email: null,
    password: null,
    rememberMe: false,
    captcha: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_URL:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: {userId, email, login, isAuth}
});

export const getCaptchaUrl = (captcha) => ({
    type: GET_CAPTCHA_URL,
    payload: captcha
});

export const getAuth = () => async (dispatch) => {

    let response = await authAPI.getAuth();

    if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }

} //thunk creator

export const sendAuthorization = (email, password, rememberMe) => {
    return async (dispatch) => {
        let response = await authAPI.sendLogin(email, password, rememberMe);

        if (response.data.resultCode === 0) {
            dispatch(getAuth());
        } else {
            if (response.data.resultCode === 10) {
                dispatch(getCaptcha());
            }
            let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
            dispatch(stopSubmit("login", {_error: message}));
        }

    }
} //thunk creator

export const logout = () => {
    return async (dispatch) => {
        let response = await authAPI.logout();

        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false));
        }

    }
} //thunk creator

export const getCaptcha = () => {
    return async (dispatch) => {
        const response = await securityAPI.getCaptcha();
        const captcha = response.data.url;
        dispatch(getCaptchaUrl(captcha));
    }
} //thunk creator

export default authReducer;
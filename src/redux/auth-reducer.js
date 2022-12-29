import {authAPI, usersAPI} from "../api/api";

const SET_USER_DATA = 'SET-USER-DATA';
const SEND_USER_DATA = 'SEND-USER-DATA';

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
                ...action.data,
                isAuth: true
            }
        case SEND_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login) => ({type: SET_USER_DATA, data: {userId, email, login}});
export const sendAuthUserData = (email, password, rememberMe, captcha) => ({type: SEND_USER_DATA,
    data: {email, password, rememberMe, captcha}});


export const getAuth = () => {
    return (dispatch) => {

        usersAPI.getAuth().then(data => {
            if (data.resultCode === 0) {
                let {id, email, login} = data.data;
                dispatch(setAuthUserData(id, email, login));
            }
        });
    } // thunk
} //thunk creator

export const sendAuthorization = (email, password, rememberMe) => {
    return (dispatch) => {
        dispatch(sendAuthUserData(email, password, true, true))
        authAPI.sendLogin().then(data => {
            if (data.resultCode === 0) {
                dispatch(sendAuthUserData(email, password, true, false));
            }
        });
    } // thunk
} //thunk creator

export default authReducer;
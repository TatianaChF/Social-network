import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';

let initialState = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 5},
        {id: 2, message: "It's my first post", likesCount: 15}
    ],
    newPostText: "Hello everyone!",
    profile: null
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: action.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        default:
            return state;
    }

}

// action creators
export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});

// thunk creators
export const getUserProfile = (userId) => {
    return (dispatch) => {

        usersAPI.getUserProfile(userId)
            .then(data => {
                dispatch(setUserProfile(data));
            });

    } // thunk
}

export const getUserStatus = (userId) => {
    return (dispatch) => {
            profileAPI.getStatus(userId)
            .then(response => {
                dispatch(setStatus(response.data));
            });

    } // thunk
}

export const updateUserStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status)
            .then(response => {
                if ( response.data.resultCode === 0 ) {
                    dispatch(setStatus(status));
                }
            });

    } // thunk
}

export default profileReducer;
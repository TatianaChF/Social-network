import {profileAPI, usersAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const ADD_POST = 'social-network/profilePage/ADD-POST';
const SET_USER_PROFILE = 'social-network/profilePage/SET-USER-PROFILE';
const SET_STATUS = 'social-network/profilePage/SET-STATUS';
const DELETE_POST = 'social-network/profilePage/DELETE-POST';
const SET_PHOTO = 'social-network/profilePage/SET-PHOTO';

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
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(post => post.id !== action.postId),
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
        case SET_PHOTO:
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            }
        default:
            return state;
    }

}

// action creators
export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText});
export const deletePost = (postId) => ({type: DELETE_POST, postId});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});
export const setPhoto = (photos) => ({type: SET_PHOTO, photos});

// thunk creators
export const getUserProfile = (userId) => {
    return async (dispatch) => {

        let response = await usersAPI.getUserProfile(userId);

        dispatch(setUserProfile(response.data));

    }
}

export const getUserStatus = (userId) => {
    return async (dispatch) => {
        let response = await profileAPI.getStatus(userId);

        dispatch(setStatus(response.data));

    }
}

export const updateUserStatus = (status) => {
    return async (dispatch) => {
        let response = await profileAPI.updateStatus(status);

        if (response.data.resultCode === 0) {
            dispatch(setStatus(status));
        }

    }
}

export const savePhoto = (photos) => {
    return async (dispatch) => {
        let response = await profileAPI.savePhoto(photos);

        if (response.data.resultCode === 0) {
            dispatch(setPhoto(response.data.data.photos));
        }

    }
}

export const saveProfile = (profile) => {
    return async (dispatch, getState) => {

        const userId = getState().auth.userId;
        const response = await profileAPI.saveProfile(profile);

        if (response.data.resultCode === 0) {
            dispatch(setUserProfile(userId));
        }
        else {
            dispatch(stopSubmit("edit-profile", {_error: response.data.messages[0]}));
            return Promise.reject(response.data.messages[0]);
        }

    }
}

export default profileReducer;
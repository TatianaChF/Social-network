import {usersAPI} from "../api/api";
import {updateObjectArray} from "../utils/object-helpers";

const FOLLOW = 'social-network/usersPage/FOLLOW';
const UNFOLLOW = 'social-network/usersPage/UNFOLLOW';
const SET_USER = 'social-network/usersPage/SET-USER';
const SET_CURRENT_PAGE = 'social-network/usersPage/SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'social-network/usersPage/SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'social-network/usersPage/TOGGLE-IS-FETCHING';
const TOGGLE_IS_LOCKED_BUTTONS = 'social-network/usersPage/TOGGLE-IS-LOCKED-BUTTONS';

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    isLockedButtons: []
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectArray(state.users, action.userId, "id", {followed: true})
            };
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectArray(state.users, action.userId, "id", {followed: false})
            };
        case SET_USER:
            return {...state, users: action.users};
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage};
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalUsersCount};
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching};
        case TOGGLE_IS_LOCKED_BUTTONS:
            return {
                ...state,
                isLockedButtons: action.isFetching
                    ? [...state.isLockedButtons, action.userId]
                    : state.isLockedButtons.filter(id => id !== action.userId)
            };
        default:
            return state;
    }

}

export const followSuccess = (userId) => ({type: FOLLOW, userId});
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USER, users});
export const setPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleIsLockedButtons = (isFetching, userId) => ({type: TOGGLE_IS_LOCKED_BUTTONS, isFetching, userId});

export const requestUsers = (page, pageSize) => {
    return async (dispatch) => {

        dispatch(toggleIsFetching(true));
        dispatch(setPage(page));

        let data = await usersAPI.getUsers(page, pageSize);

        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));

    }
} // thunkCreator

const selectFollowUnfollow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleIsLockedButtons(true, userId));

    let data = await apiMethod(userId);

    dispatch(toggleIsLockedButtons(false, userId));
    if (data.resultCode === 0) {
        dispatch(actionCreator(userId));
    }
};

export const follow = (userId) => {
    return async (dispatch) => {
        let apiMethod = usersAPI.putStateFollow.bind(usersAPI);
        selectFollowUnfollow(dispatch, userId, apiMethod, followSuccess);
    }
} // thunkCreator

export const unfollow = (userId) => {
    return async (dispatch) => {
        let apiMethod = usersAPI.deleteStateFollow.bind(usersAPI);
        selectFollowUnfollow(dispatch, userId, apiMethod, unfollowSuccess);
    }
} // thunkCreator

export default usersReducer;
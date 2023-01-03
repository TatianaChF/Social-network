import {getAuth} from "./auth-reducer";

const SET_INITIALIZATION = "SET-INITIALIZATION";

let initialState = {
    isInitialization: false
}
const appReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_INITIALIZATION:
            return {
                ...state,
                isInitialization: true
            }
        default:
            return state;

    }
}

export const setInitialization = () => ({type: SET_INITIALIZATION});

export const setInitializationApp = () => (dispatch) => {
    dispatch(getAuth());
    dispatch(setInitialization());

}

export default appReducer;
import {getAuth} from "./auth-reducer";

const SET_INITIALIZATION = "social-network/app/SET-INITIALIZATION";

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
    let promise = dispatch(getAuth());
    Promise.all([promise])
        .then(() => {
            dispatch(setInitialization());
        });

}

export default appReducer;
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USER = 'SET-USER';

let initialState = {
    users: [
        // { id: 1, followed: true, fullName: 'Aleksander', status: 'I like cats!',
        //     location: { city: 'St. Petersburg', country: 'Russia' } },
        // { id: 2, followed: true, fullName: 'Tatiana', status: 'I like cats!',
        //     location: { city: 'I am a musician', country: 'Russia' } },
        // { id: 3, followed: false, fullName: 'Irina', status: 'All the best!',
        //     location: { city: 'London', country: 'England' } },
        // { id: 4, followed: false, fullName: 'Anna', status: 'I watch series',
        //     location: { city: 'Berlin', country: 'Germany' } }
    ]
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map( user => {
                    if (user.id === action.userId) {
                        return {...user, followed: true}
                    }
                    return user;
                } )
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map( user => {
                    if (user.id === action.userId) {
                        return {...user, followed: false}
                    }
                    return user;
                } )
            }
        case SET_USER:
            return {...state, users: [ ...state.users, action.users ] }
        default:
            return state;
    }

}

export const followAC = (userId) => ({ type: FOLLOW, userId })
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId })
export const setUserAC = (user) => ({type: SET_USER, user})

export default usersReducer;
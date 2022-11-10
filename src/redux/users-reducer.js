const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USER = 'SET-USER';

let initialState = {
    users: [
        { id: 1, photoUrl: 'https://i.insider.com/61d1c0e2aa741500193b2d18?width=700', followed: true,
            fullName: 'Aleksander', status: 'I like cats!',
            location: { city: 'St. Petersburg', country: 'Russia' } },
        { id: 2, photoUrl: 'https://cdn.mos.cms.futurecdn.net/fiDmrNrJsmGD2t57x4dRdG-1200-80.jpg', followed: true,
            fullName: 'Tatiana', status: 'I like cats!',
            location: { city: 'I am a musician', country: 'Russia' } },
        { id: 3, photoUrl: 'https://www.gannett-cdn.com/presto/2020/03/09/PDTF/1ad7be1a-1b59-438e-9627-700753bc9867-GettyImages-1132562466.jpg',
            followed: false, fullName: 'Irina', status: 'All the best!',
            location: { city: 'London', country: 'England' } },
        { id: 4, photoUrl: 'https://www.farmersalmanac.com/wp-content/uploads/2021/04/forget-me-not-flower-as309740666.jpeg',
            followed: false, fullName: 'Anna', status: 'I watch series',
            location: { city: 'Berlin', country: 'Germany' } }
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
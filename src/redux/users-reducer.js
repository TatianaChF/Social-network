const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';

let initialState = {
    users: [
        { id: 1, followed: true, fullName: 'Aleksander', status: 'I like cats!',
            location: { city: 'St. Petersburg', country: 'Russia' } },
        { id: 2, followed: true, fullName: 'Tatiana', status: 'I like cats!',
            location: { city: 'I am a musician', country: 'Russia' } },
        { id: 3, followed: false, fullName: 'Irina', status: 'All the best!',
            location: { city: 'London', country: 'England' } },
        { id: 4, followed: false, fullName: 'Anna', status: 'I watch series',
            location: { city: 'Berlin', country: 'Germany' } },
    ]
}

const usersReducer = (state = initialState, action) => {

}

export const FollowAC = () => ({ type: FOLLOW })
export const UnfollowAC = () => ({ type: UNFOLLOW })

export default usersReducer;
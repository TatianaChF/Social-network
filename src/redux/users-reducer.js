let initialState = {
    users: [
        { id: 1, fullName: 'Aleksander', status: 'I like cats!',
            location: { city: 'St. Petersburg', country: 'Russia' } },
        { id: 1, fullName: 'Tatiana', status: 'I like cats!',
            location: { city: 'I am a musician', country: 'Russia' } },
        { id: 1, fullName: 'Irina', status: 'All the best!',
            location: { city: 'London', country: 'England' } },
        { id: 1, fullName: 'Anna', status: 'I watch series',
            location: { city: 'Berlin', country: 'Germany' } },
    ]
}

const usersReducer = (state = initialState, action) => {

}

export default usersReducer;
import styles from "./Users.module.css";

const Users = (props) => {

    if(props.users.length === 0) {
        props.setUsers([
            {
                id: 1, photoUrl: 'https://i.insider.com/61d1c0e2aa741500193b2d18?width=700', followed: true,
                fullName: 'Aleksander', status: 'I like cats!',
                location: {city: 'St. Petersburg', country: 'Russia'}
            },
            {
                id: 2, photoUrl: 'https://cdn.mos.cms.futurecdn.net/fiDmrNrJsmGD2t57x4dRdG-1200-80.jpg', followed: true,
                fullName: 'Tatiana', status: 'I like cats!',
                location: {city: 'I am a musician', country: 'Russia'}
            },
            {
                id: 3,
                photoUrl: 'https://www.gannett-cdn.com/presto/2020/03/09/PDTF/1ad7be1a-1b59-438e-9627-700753bc9867-GettyImages-1132562466.jpg',
                followed: false,
                fullName: 'Irina',
                status: 'All the best!',
                location: {city: 'London', country: 'England'}
            },
            {
                id: 4,
                photoUrl: 'https://www.farmersalmanac.com/wp-content/uploads/2021/04/forget-me-not-flower-as309740666.jpeg',
                followed: false,
                fullName: 'Anna',
                status: 'I watch series',
                location: {city: 'Berlin', country: 'Germany'}
            }
        ])
    }

    return (
        <div>
            {
                props.users.map( user => <div key={user.id}>
                    <span>
                        <div>
                            <img src={user.photoUrl} className={styles.userPhoto} />
                        </div>
                        <div>
                            { user.followed
                                ? <button onClick={() => { props.unfollow(user.id) }}>Unfollow</button>
                                : <button onClick={() => { props.follow(user.id) }}>Follow</button> }
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{user.fullName}</div>
                            <div>{user.status}</div>
                        </span>
                        <span>
                            <div>{user.location.city}</div>
                            <div>{user.location.country}</div>
                        </span>
                    </span>
                </div> )
            }
        </div>
    )
}

export default Users;
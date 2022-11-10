const Users = (props) => {
    return (
        <div>
            {
                props.users.map( user => <div key={user.id}>
                    <span>
                        <div>
                            <img src={user.photoUrl} />
                        </div>
                        <div>
                            <button>Follow</button>
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
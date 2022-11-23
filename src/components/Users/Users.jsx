import styles from "./Users.module.css";
import * as axios from "axios";

const Users = (props) => {

    if(props.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then( response =>
            props.setUsers());
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
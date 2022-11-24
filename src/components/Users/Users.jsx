import styles from "./Users.module.css";
import axios from "axios";
import userPhoto from "../../assets/images/defaultUser.jpg";

const Users = (props) => {

    let getUsers = () => {
        if(props.users.length === 0) {

            axios.get("https://social-network.samuraijs.com/api/1.0/users").then( response => {
                props.setUsers(response.data.items);
            });

        }
    }

    return (
        <div>
            <button onClick={getUsers}>GET USERS</button>
            {
                props.users.map( user => <div key={user.id}>
                    <span>
                        <div>
                            <img src={ user.photos.small != null ? user.photos.small : userPhoto } className={styles.userPhoto} />
                        </div>
                        <div>
                            { user.followed
                                ? <button onClick={() => { props.unfollow(user.id) }}>Unfollow</button>
                                : <button onClick={() => { props.follow(user.id) }}>Follow</button> }
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{user.name}</div>
                            <div>{user.status}</div>
                        </span>
                        <span>
                            <div>Moscow</div>
                            <div>Russia</div>
                        </span>
                    </span>
                </div> )
            }
        </div>
    )
}

export default Users;
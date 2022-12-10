import styles from "./Users.module.css";
import userPhoto from "../../assets/images/defaultUser.jpg";
import {NavLink} from "react-router-dom";
import axios from "axios";

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        if (pages.length < 10) {
            pages.push(i);
        }
    }

    return (
        <div>
            <div>
                {pages.map(pageNumber => {
                    return <span className={props.currentPage === pageNumber ? styles.pageChoice : ""}
                                 onClick={() => {
                                     props.onPageChanged(pageNumber);
                                 }}>{pageNumber}</span>
                })}

            </div>
            {
                props.users.map(user => <div key={user.id}>
                    <span>
                        <div>
                            <NavLink to={"/profile/" + user.id}>
                                <img src={user.photos.small != null ? user.photos.small : userPhoto}
                                     className={styles.userPhoto}/>
                            </NavLink>
                        </div>
                        <div>
                            {user.followed
                                ? <button onClick={() => {
                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {
                                        withCredentials: true
                                    })
                                        .then(response => {
                                            if(response.data.resultCode === 0) {
                                                props.unfollow(user.id)
                                            }
                                        })
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {
                                        withCredentials: true
                                    })
                                        .then(response => {
                                            if(response.data.resultCode === 0) {
                                                props.unfollow(user.id)
                                            }
                                        })
                                }}>Follow</button>}
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
                </div>)
            }
        </div>
    )


}

export default Users;
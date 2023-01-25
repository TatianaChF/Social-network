import styles from "./Users.module.css";
import userPhoto from "../../assets/images/defaultUser.jpg";
import {NavLink} from "react-router-dom";
import Paginator from "../common/Paginator/Paginator"

const Users = ({totalUsersCount, pageSize, currentPage, onPageChanged, ...props}) => {

    return (
        <div>
            <Paginator totalUsersCount={totalUsersCount} pageSize={pageSize}
                       currentPage={currentPage} onPageChanged={onPageChanged} />
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
                                ? <button disabled={props.isLockedButtons.some(id => id === user.id)} onClick={() => {
                                    props.unfollow(user.id);
                                }}>Unfollow</button>
                                : <button disabled={props.isLockedButtons.some(id => id === user.id)} onClick={() => {
                                    props.follow(user.id);
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
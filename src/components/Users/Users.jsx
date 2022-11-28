import React from "react";
import styles from "./Users.module.css";
import axios from "axios";
import userPhoto from "../../assets/images/defaultUser.jpg";

class Users extends React.Component {

    componentDidMount() {
        if (this.props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                this.props.setUsers(response.data.items);
            });
        }
    }

    render() {

        let pagesCount = this.props.totalUsersCount / this.props.pageSize;

        return (
            <div>
                <div>
                    <span className={styles.pageChoice}>1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>4</span>
                    <span>5</span>
                </div>
                {
                    this.props.users.map( user => <div key={user.id}>
                    <span>
                        <div>
                            <img src={ user.photos.small != null ? user.photos.small : userPhoto } className={styles.userPhoto} />
                        </div>
                        <div>
                            { user.followed
                                ? <button onClick={() => { this.props.unfollow(user.id) }}>Unfollow</button>
                                : <button onClick={() => { this.props.follow(user.id) }}>Follow</button> }
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
}

export default Users;
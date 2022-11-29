import styles from "./Users.module.css";
import userPhoto from "../../assets/images/defaultUser.jpg";

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
                                     this.onPageChanged(pageNumber);
                                 }}>{pageNumber}</span>
                })}

            </div>
            {
                this.props.users.map(user => <div key={user.id}>
                    <span>
                        <div>
                            <img src={user.photos.small != null ? user.photos.small : userPhoto}
                                 className={styles.userPhoto}/>
                        </div>
                        <div>
                            {user.followed
                                ? <button onClick={() => {
                                    props.unfollow(user.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    props.follow(user.id)
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
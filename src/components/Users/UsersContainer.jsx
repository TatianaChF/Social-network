import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setUserAC, unfollowAC} from "../../redux/users-reducer";

const mapStateToPropsUsers = (state) => {
    return {
         users: state.usersPage.users
    }
}

const mapDispatchToPropsUsers = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUserAC(users));
        }
    }
}

const UsersContainer = connect(mapStateToPropsUsers, mapDispatchToPropsUsers)(Users);

export default UsersContainer;
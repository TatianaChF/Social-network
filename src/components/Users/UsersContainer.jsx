import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setPage, setTotalUsersCount, setUserAC, unfollowAC} from "../../redux/users-reducer";

const mapStateToPropsUsers = (state) => {
    return {
         users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
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
        },
        setPage: (pageNumber) => {
            dispatch(setPage(pageNumber));
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCount(totalCount));
        }
    }
}

const UsersContainer = connect(mapStateToPropsUsers, mapDispatchToPropsUsers)(Users);

export default UsersContainer;
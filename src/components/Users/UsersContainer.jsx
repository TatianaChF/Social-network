import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setPageAC, setTotalUsersCountAC, setUserAC, unfollowAC} from "../../redux/users-reducer";
import UsersAPIComponent from "./Users";

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
            dispatch(setPageAC(pageNumber));
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount));
        }
    }
}

const UsersContainer = connect(mapStateToPropsUsers, mapDispatchToPropsUsers)(UsersAPIComponent);

export default UsersContainer;
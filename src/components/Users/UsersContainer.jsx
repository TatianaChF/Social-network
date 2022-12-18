import React from "react";
import {connect} from "react-redux";
import {
    follow, getUsers,
    setPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching, toggleIsLockedButtons,
    unfollow
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {usersAPI} from "../../api/api";

class UsersContainer extends React.Component {

    componentDidMount() {
        if (this.props.users.length === 0) {

            this.props.getUsers(this.props.currentPage, this.props.pageSize); //thunk

        }
    }

    onPageChanged = (pageNumber) => {

        this.props.getUsers(pageNumber, this.props.pageSize); //thunk

    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users users={this.props.users}
                   totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   onPageChanged={this.onPageChanged}
                   unfollow={this.props.unfollow}
                   follow={this.props.follow}
                   isLockedButtons={this.props.isLockedButtons}
                   toggleIsLockedButtons={this.props.toggleIsLockedButtons} />
        </>
    }
}

const mapStateToPropsUsers = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        isLockedButtons: state.usersPage.isLockedButtons
    }
}

export default connect(mapStateToPropsUsers, {
    follow, unfollow, setPage, toggleIsLockedButtons, getUsers
})(UsersContainer);

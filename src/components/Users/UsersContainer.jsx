import React from "react";
import {connect} from "react-redux";
import {
    follow,
    requestUsers,
    setPage,
    toggleIsLockedButtons,
    unfollow
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {
    getCurrentPage,
    getIsFetching,
    getIsLockedButtons,
    getPageSize,
    getTotalUsersCount,
    getUsers, getUsersHard
} from "../../redux/users-selectors";

class UsersContainer extends React.Component {

    componentDidMount() {
        if (this.props.users.length === 0) {

            this.props.requestUsers(this.props.currentPage, this.props.pageSize); //thunk

        }
    }

    onPageChanged = (pageNumber) => {

        this.props.requestUsers(pageNumber, this.props.pageSize); //thunk

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
        /*users: getUsers(state),*/
        users: getUsersHard(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        isLockedButtons: getIsLockedButtons(state)
    }
}

export default connect(mapStateToPropsUsers, {
    follow, unfollow, setPage, toggleIsLockedButtons, requestUsers
})(UsersContainer);

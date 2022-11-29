import React from "react";
import styles from "./Users.module.css";
import axios from "axios";
import userPhoto from "../../assets/images/defaultUser.jpg";

class UsersAPIComponent extends React.Component {

    componentDidMount() {
        if (this.props.users.length === 0) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
                .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
        }
    }

    onPageChanged = (pageNumber) => {
        this.props.setPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    }

    render() {

    }
}

export default UsersAPIComponent;
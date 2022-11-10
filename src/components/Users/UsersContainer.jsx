import {connect} from "react-redux";
import Users from "./Users";

const mapStateToPropsUsers = (state) => {
    return {
         users: state.usersPage.users
    }
}

const mapDispatchToPropsUsers = () => {

}

const UsersContainer = connect(mapStateToPropsUsers, mapDispatchToPropsUsers)(Users);

export default UsersContainer;
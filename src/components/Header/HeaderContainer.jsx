import React from "react";
import {connect} from "react-redux";
import {getAuth} from "../../redux/auth-reducer";
import Header from "./Header";
import {usersAPI} from "../../api/api";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getAuth();
    }

    render() {
        return (
            <Header {...this.props} />
        )

    }
}

const mapStateToPropsUsers = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}
export default connect(mapStateToPropsUsers, {getAuth})(HeaderContainer);
import React from "react";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/auth-reducer";
import axios from "axios";
import Header from "./Header";
import {usersAPI} from "../../api/api";

class HeaderContainer extends React.Component {
    componentDidMount() {
            usersAPI.getAuth().then(data => {
                if(data.resultCode === 0) {
                    let {id, email, login } = data.data;
                    this.props.setAuthUserData(id, email, login);
                }
            });
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
export default connect(mapStateToPropsUsers, {setAuthUserData})(HeaderContainer);
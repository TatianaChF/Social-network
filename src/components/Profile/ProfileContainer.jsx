import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, setUserProfile} from "../../redux/profile-reducer";
import {Navigate, useLocation, useNavigate, useParams} from "react-router-dom";
import {usersAPI} from "../../api/api";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.router.params.userId;

        this.props.getUserProfile(userId); // thunk
    }

    render() {
        if (!this.props.isAuth) return <Navigate to="/login" />;
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }

}

function withRouter(Component) {
    function ComponentWithRouterProps(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{location, navigate, params}}
            />
        );
    }

    return ComponentWithRouterProps;
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {getUserProfile})(withRouter(ProfileContainer));
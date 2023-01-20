import React, {useEffect, useState} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, getUserStatus, updateUserStatus} from "../../redux/profile-reducer";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

const ProfileContainerHooks = (props) => {

    let [userId, setUserId] = useState(props.router.params.userId);

    useEffect( () => {
        if (!userId) {
            setUserId(props.authorizedUserId);
        }
        props.getUserProfile(userId); // thunk
        props.getUserStatus(userId);
    }, [userId] )

    return (
        <Profile {...props} profile={props.profile} status={props.status}
                 updateUserStatus={props.updateUserStatus}/>
    )


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
    status: state.profilePage.status,
    isAuth: state.auth.isAuth,
    authorizedUserId: state.auth.userId
});

export default compose(
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainerHooks);

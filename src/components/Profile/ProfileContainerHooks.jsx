import React, {useEffect, useState} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, getUserStatus, savePhoto, updateUserStatus} from "../../redux/profile-reducer";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

const ProfileContainerHooks = (props) => {

    let { userId } = useParams();

    useEffect( () => {
        let user = !!userId
        ? userId : props.authorizedUserId;
        props.getUserProfile(user);
        props.getUserStatus(user);
    }, [userId] );

    return (
        <Profile {...props} profile={props.profile} status={props.status}
                 updateUserStatus={props.updateUserStatus} isOwner={!userId}
                 savePhoto={props.savePhoto} />
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
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus, savePhoto}),
    withRouter,
    withAuthRedirect
)(ProfileContainerHooks);

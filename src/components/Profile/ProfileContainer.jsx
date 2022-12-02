import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/26940`)
            .then(response => {
                this.props.setUserProfile(response.data.items);
            });
    }

    render() {
        return (
            <Profile {...this.props} />
        )
    }

}

let mapStateToProps = (state) => ({

})

export default connect(mapStateToProps)(ProfileContainer);
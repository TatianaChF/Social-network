import React from "react";

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateUserStatus(this.state.status)
    }

    render() {
        return (
            <div>
                {this.state.editMode
                    ? <div>
                        <input autoFocus={true} onBlur={ this.deactivateEditMode } value={this.state.status}/>
                    </div>
                    : <div>
                        <span onDoubleClick={ this.activateEditMode }>{this.props.status}</span>
                    </div>}
            </div>
        )
    }

}

export default ProfileStatus;
import React from "react";

class ProfileStatus extends React.Component {

    state = {
        editMode: false
    }

    activateEditMode() {
        this.setState({
            editMode: true
        })
    }

    render() {
        return (
            <div>
                {this.state.editMode
                    ? <div>
                        <input value={this.props.status}/>
                    </div>
                    : <div>
                        <span>{this.props.status}</span>
                    </div>}
            </div>
        )
    }

}

export default ProfileStatus;
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

    onStatusChange = (element) => {
        this.setState({
            status: element.currentTarget.value
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        debugger
        let props  = this.props;
        let state = this.state;
        console.log("Update!");
    }

    render() {
        return (
            <div>
                {this.state.editMode
                    ? <div>
                        <input onChange={ this.onStatusChange } autoFocus={true} onBlur={ this.deactivateEditMode } value={this.state.status}/>
                    </div>
                    : <div>
                        <span onDoubleClick={ this.activateEditMode }>{ this.props.status || "No status" }</span>
                    </div>}
            </div>
        )
    }

}

export default ProfileStatus;
import React, {useEffect, useState} from "react";

const ProfileStatusHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect( () => {
        setStatus(props.status);
    }, [props.status] );

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateUserStatus(status)
    }

    const onStatusChange = (element) => {
        setStatus(element.currentTarget.value)
    }

    return (
        <div>
            {editMode
                ? <div>
                    <input role="textbox" onChange={ onStatusChange } autoFocus={ true } onBlur={ deactivateEditMode }
                           value={status} />
                </div>
                : <div>
                    <span role="span" onDoubleClick={ activateEditMode } >{ status || "No status" }</span>
                </div>}
        </div>
    )


}

export default ProfileStatusHooks;
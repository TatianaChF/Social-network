import React from "react";
import style from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
    addMessageActionCreator,
    updateNewMessageTextActionCreator,
} from "../../redux/state";

const Dialogs = (props) => {

    let dialogsElement = props.data.dialogsData
        .map( dialog => <DialogItem name={dialog.name} id={dialog.id} /> );

    let messagesElements = props.data.messagesData.map(
        message => <Message message={message.message} />
    );

    let addNewMessage = React.createRef();

    let onMessageChange = () => {
        let text = addNewMessage.current.value;
        let action = updateNewMessageTextActionCreator(text);
        props.dispatch(action);
    }

    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                { dialogsElement }
            </div>
            <div className={style.messages}>
                { messagesElements }
                <div className={style.addMessage}>
                    <textarea onChange={ onMessageChange }
                        ref={ addNewMessage } value={ props.data.newMessageText } ></textarea>
                    <button onClick={ addMessage }>Add message</button>
                </div>
            </div>

        </div>
    )
}

export default Dialogs;
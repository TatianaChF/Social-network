import React from "react";
import style from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
    addMessageActionCreator,
    updateNewMessageTextActionCreator,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

    let state = props.store.getState();

    let onMessageChange = (text) => {
        let action = updateNewMessageTextActionCreator(text);
        props.store.dispatch(action);
    }

    let addMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    }

    return (
        <Dialogs addMessage={addMessage} updateNewMessage={onMessageChange}
                 newMessageText={state.dialogsPage.newMessageText} dialogsData={state.dialogsPage.dialogsData}
                 messagesData={state.dialogsPage.messagesData} />
    )
}

export default DialogsContainer;
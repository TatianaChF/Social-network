import React from "react";
import style from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Navigate} from "react-router-dom";

const Dialogs = (props) => {

    let dialogsElement = props.dialogsData
        .map( dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} /> );

    let messagesElements = props.messagesData.map(
        message => <Message message={message.message} key={message.id} />
    );

    let addNewMessage = React.createRef();

    let onMessageChange = () => {
        let text = addNewMessage.current.value;
        props.updateNewMessage(text);
    }

    let onAddMessage = () => {
        props.addMessage();
    }

    if (!props.isAuth) return <Navigate to="/login" />;

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                { dialogsElement }
            </div>
            <div className={style.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div>
                        <textarea placeholder="Enter your message..."
                                  onChange={ onMessageChange }
                                  ref={ addNewMessage } value={ props.newMessageText } ></textarea>
                    </div>
                    <div>
                        <button onClick={ onAddMessage }>Send</button>
                    </div>
                </div>
                <div className={style.addMessage}>

                </div>
            </div>

        </div>
    )
}

export default Dialogs;
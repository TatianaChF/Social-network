import React from "react";
import style from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

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

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                { dialogsElement }
            </div>
            <div className={style.messages}>
                <div>{messagesElements}</div>
                <DialogsForm onMessageChang={onMessageChange} addNewMessage={addNewMessage} onAddMessage={onAddMessage} />
                <div className={style.addMessage}>
                </div>
            </div>

        </div>
    )
}
const DialogsForm = (props) => {
    return (
        <div>
            <form>
                <div>
                    <div>
                        <textarea placeholder="Enter your message..."
                                  onChange={ props.onMessageChange }
                                  ref={ props.addNewMessage } value={ props.newMessageText } ></textarea>
                    </div>
                    <div>
                        <button onClick={ props.onAddMessage }>Send</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Dialogs;
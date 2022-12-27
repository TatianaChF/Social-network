import React from "react";
import style from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";

const Dialogs = (props) => {

    let dialogsElement = props.dialogsData
        .map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id}/>);

    let messagesElements = props.messagesData.map(
        message => <Message message={message.message} key={message.id}/>
    );

    let addNewMessage = React.createRef();

    let onMessageChange = () => {
        let text = addNewMessage.current.value;
        props.updateNewMessage(text);
    }

    let onAddMessage = () => {
        props.addMessage();
    }

    let addMessage = () => {
        alert("nvrnvj");
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                { dialogsElement }
            </div>
            <div className={style.messages}>
                <div>{messagesElements}</div>
                <div>
                    <DialogsReduxForm onSubmit={addMessage} />
                </div>
            </div>
        </div>
    )
}

const DialogsForm = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder="Enter your message..." name="message" component="textarea" />
                </div>
                <div>
                    <button>Send</button>
                </div>
            </form>
        </div>
    )
}

const DialogsReduxForm = reduxForm({form: "message"})(DialogsForm);

export default Dialogs;
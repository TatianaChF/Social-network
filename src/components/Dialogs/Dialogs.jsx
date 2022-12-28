import React from "react";
import style from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";
import Textarea from "../common/FormsControl/FormsControl";
import {maxLengthCreator, required} from "../../utils/validations";

const Dialogs = (props) => {

    let dialogsElement = props.dialogsData
        .map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id}/>);

    let messagesElements = props.messagesData.map(
        message => <Message message={message.message} key={message.id}/>
    );

    let addMessage = (value) => {
        props.sendMessage(value.newMessageBody);
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                { dialogsElement }
            </div>
            <div className={style.messages}>
                <div>{messagesElements}</div>
                <div>
                    <AddMessageReduxForm onSubmit={addMessage} />
                </div>
            </div>
        </div>
    )
}

const AddMessageForm = (props) => {
    let maxLength = maxLengthCreator(30);
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder="Enter your message..." name="newMessageBody" component={Textarea}
                    validate={[required, maxLength]} />
                </div>
                <div>
                    <button>Send</button>
                </div>
            </form>
        </div>
    )
}

const AddMessageReduxForm = reduxForm({form: "message"})(AddMessageForm);

export default Dialogs;
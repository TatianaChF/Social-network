import {createField, Input, Textarea} from "../../../common/FormsControl/FormsControl";
import {reduxForm} from "redux-form";
import style from "./ProfileDataForm.module.css";

const ProfileDataForm = ({handleSubmit, ...props}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <button className={style.btnSave}>save</button>
            </div>
            {
                props.error &&
                <div className={style.someInputError}>
                    {props.error}
                </div>
            }
            <div>
                <h2>Information</h2>
                <div>
                    <div>
                        <b>Full name</b>: { createField("Full name", "fullName", Input, []) }
                    </div>
                    <div>
                        <b>Looking for a job</b>:
                        { createField("", "lookingForAJob", Input, [], {type: "checkbox"}) }
                    </div>
                    <div>
                        <b>My professional skills</b>:
                        { createField("My professional skills", "lookingForAJobDescription",
                            Textarea, []) }
                    </div>
                    <div>
                        <b>About me</b>:
                        { createField("About me", "aboutMe",
                            Textarea, []) }
                    </div>
                </div>
            </div>
            <div>
                <b>Contacts</b>: {props.profile.contacts
                ? Object.keys(props.profile.contacts).map(key => {
                    return <div key={key} className={style.contacts}>
                        <b>{key}</b>: {createField(key, "contacts." + key, Input, [])}
                    </div>
                })
                : "undefined"}
            </div>
        </form>
    )
}

const ProfileDataFormReduxForm = reduxForm({form: "edit-profile"})(ProfileDataForm);
export default ProfileDataFormReduxForm;
import greenCircle from "../../../../assets/images/green.png";
import redCircle from "../../../../assets/images/red.png";
import style from "../ProfileInfo.module.css";
import Contacts from "../Contacts/Contacts";
import {createField, Input, Textarea} from "../../../common/FormsControl/FormsControl";
import {reduxForm} from "redux-form";
import profile from "../../Profile";

const ProfileDataForm = (props) => {
    return (
        <form>
            {props.isOwner && <div>
                <button onClick={() => {alert("SAVE")}} >save</button>
            </div>}
            <div>
                <h2>Information</h2>
                <div>
                    <div>
                        <b>Full name</b>: { createField("Full name", "fullName", Input, []) }</div>
                    <div>
                        <b>Looking for a job</b>: <img src={props.profile.lookingForAJob ? greenCircle : redCircle}
                                                      className={style.bool} alt="status"/>
                        { createField("", "lookingForAJob", Input, [], {type: "checkbox"}) }
                    </div>
                    <div>
                        <b>My professional skills</b>:
                        { createField("My professional skills", "lookingForAJobDescription",
                            Textarea, []) }
                    </div>
                    <div>
                        <b>About me</b>: {props.profile.aboutMe}
                        { createField("About me", "aboutMe",
                            Textarea, []) }
                    </div>
                </div>
            </div>
            <div>
                <p><b>Contacts</b>: </p> {Object.keys(props.profile.contacts).map(key => {
                return <Contacts key={key} contactTitle={key} contactValue={props.profile.contacts[key]}/>
            })}
            </div>
        </form>
    )
}

const ProfileDataFormReduxForm = reduxForm({form: "edit-profile"})(ProfileDataForm);
export default ProfileDataFormReduxForm;
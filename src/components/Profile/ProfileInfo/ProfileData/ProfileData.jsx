import greenCircle from "../../../../assets/images/green.png";
import redCircle from "../../../../assets/images/red.png";
import style from "./ProfileData.module.css";
import Contacts from "../Contacts/Contacts";

const ProfileData = ({goToEditMode, ...props}) => {
    return (
        <div>
            {props.isOwner && <div>
                <button onClick={goToEditMode} className={style.btnEdit}>edit</button>
            </div>}
            <div>
                <h2>Information</h2>
                <div>
                    <p><b>Full name</b>: {props.profile.fullName}</p>
                    <p><b>Looking for a job</b>: <img src={props.profile.lookingForAJob ? greenCircle : redCircle}
                                                      className={style.bool} alt="status"/>
                    </p>
                    <p><b>My professional skills</b>: {props.profile.lookingForAJobDescription}</p>
                </div>
            </div>
            <div>
                <b>Contacts</b>: {props.profile.contacts
                ? Object.keys(props.profile.contacts).map(key => {
                    return <Contacts key={key} contactTitle={key} contactValue={props.profile.contacts[key]}/>
                })
                : "undefined"}
            </div>
        </div>
    )
}

export default ProfileData;
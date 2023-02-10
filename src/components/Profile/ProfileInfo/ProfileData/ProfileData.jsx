import ProfileStatusHooks from "../ProfileStatus/ProfileStatusHooks";
import greenCircle from "../../../../assets/images/green.png";
import redCircle from "../../../../assets/images/red.png";
import style from "../ProfileInfo.module.css";
import Contacts from "../Contacts/Contacts";

const ProfileData = (props) => {
    return (
        <div>
            {props.isOwner && <div>
                <button onClick={props.goToEditMode} >edit</button>
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
                <p><b>Contacts: </b></p> {Object.keys(props.profile.contacts).map(key => {
                return <Contacts key={key} contactTitle={key} contactValue={props.profile.contacts[key]}/>
            })}
            </div>
        </div>
    )
}

export default ProfileData;
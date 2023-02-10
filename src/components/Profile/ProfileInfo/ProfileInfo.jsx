import style from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import greenCircle from "../../../assets/images/green.png";
import redCircle from "../../../assets/images/red.png";
import defaultAvatar from "../../../assets/images/defaultUser.jpg";
import ProfileStatusHooks from "./ProfileStatus/ProfileStatusHooks";

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }

    const onAvatarSelection = (element) => {
        if (element.target.files.length) {
            props.savePhoto(element.target.files[0]);
        }
    }

    return (
        <div>
            <div className={style.descriptionBlock}>
                <img src={props.profile.photos.large ? props.profile.photos.large : defaultAvatar} alt="avatar"/>
                { props.isOwner && <input type={"file"} onChange={onAvatarSelection} /> }
                <div>
                    <h2>Information</h2>
                    <div>
                        <ProfileStatusHooks status={props.status} updateUserStatus={props.updateUserStatus}/>
                        <p><b>Full name</b>: {props.profile.fullName}</p>
                        <p><b>Looking for a job</b>: <img src={props.profile.lookingForAJob ? greenCircle : redCircle}
                                        className={style.bool} alt="status"/>
                        </p>
                        <p><b>My professional skills</b>: {props.profile.lookingForAJobDescription}</p>
                    </div>
                </div>
                <div>
                    <p><b>Contacts: </b></p> { Object.keys(props.profile.contacts).map( key => {
                    return <Contacts key={key} contactTitle={key} contactValue={props.profile.contacts[key]} />
                } ) }
                </div>
            </div>
        </div>
    )
}

const Contacts = ({contactTitle, contactValue}) => {
    return (
        <div>
            <b>{contactTitle}</b>: {contactValue}
        </div>
    )
}

export default ProfileInfo;
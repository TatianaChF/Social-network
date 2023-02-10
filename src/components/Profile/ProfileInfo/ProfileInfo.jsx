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
                        <p>Id: {props.profile.userId}</p>
                        <p>Looking for a job: <img src={props.profile.lookingForAJob ? greenCircle : redCircle}
                                        className={style.bool} alt="status"/>
                        </p>
                        <p>My professional skills: {props.profile.lookingForAJobDescription}</p>
                    </div>
                </div>
                <div>
                    <ul>
                        <li>GitHub: {props.profile.contacts.github}</li>
                        <li>VK: {props.profile.contacts.vk}</li>
                        <li>Facebook: {props.profile.contacts.facebook}</li>
                        <li>Instagram: {props.profile.contacts.instagram}</li>
                        <li>Twitter: {props.profile.contacts.twitter}</li>
                        <li>Website: {props.profile.contacts.website}</li>
                        <li>Youtube: {props.profile.contacts.youtube}</li>
                        <li>Link: {props.profile.contacts.mainLink}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;
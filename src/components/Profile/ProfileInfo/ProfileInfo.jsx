import style from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import greenCircle from "../../../assets/images/green.png";
import redCircle from "../../../assets/images/red.png";
import defaultAvatar from "../../../assets/images/defaultUser.jpg";
import ProfileStatusHooks from "./ProfileStatus/ProfileStatusHooks";
import ProfileData from "./ProfileData/ProfileData";

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
            </div>
            <ProfileData profile={props.profile} />
        </div>
    )
}

export default ProfileInfo;
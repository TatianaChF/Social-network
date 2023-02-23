import style from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import defaultAvatar from "../../../assets/images/defaultUser.jpg";
import ProfileStatusHooks from "./ProfileStatus/ProfileStatusHooks";
import ProfileData from "./ProfileData/ProfileData";
import ProfileDataForm from "./ProfileDataForm/ProfileDataForm";
import {useState} from "react";

const ProfileInfo = ({profile, ...props}) => {

    const [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader/>
    }

    const onAvatarSelection = (element) => {
        if (element.target.files.length) {
            props.savePhoto(element.target.files[0]);
        }
    }

    const goToEditMode = () => {
        setEditMode(true);
    }

    const onSubmit = (formData) => {
        props.saveProfile(formData).then( () => {
            setEditMode(false);
        } )
    }

    return (
        <div>
            <div className={style.descriptionBlock}>
                <img src={profile.photos.large ? profile.photos.large : defaultAvatar}
                     alt="avatar"
                     className={style.avatar}/>
                { props.isOwner && <input type={"file"} onChange={onAvatarSelection} className={style.photoSelect} /> }

                { editMode
                    ? <ProfileDataForm initialValues={profile}
                                       profile={profile}
                                       onSubmit={onSubmit} />
                    : <ProfileData profile={profile}
                                   isOwner={props.isOwner}
                                   goToEditMode={goToEditMode} /> }

                <ProfileStatusHooks status={props.status} updateUserStatus={props.updateUserStatus}/>
            </div>
        </div>
    )
}

export default ProfileInfo;
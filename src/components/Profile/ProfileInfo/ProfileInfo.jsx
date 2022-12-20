import style from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import greenCircle from "../../../assets/images/green.png";
import redCircle from "../../../assets/images/red.png";
import defaultAvatar from "../../../assets/images/defaultUser.jpg";

const ProfileInfo = (props) => {

    if(!props.profile) {
        return <Preloader />
    }

     return (
         <div>
             <div>
                 <img src="https://oir.mobi/uploads/posts/2021-05/1622211351_27-oir_mobi-p-russkaya-priroda-priroda-krasivo-foto-28.jpg" />
             </div>
             <div className={style.descriptionBlock}>
                     <img src={props.profile.photos.large ? props.profile.photos.large : defaultAvatar}  alt="avatar" />
                 <h2>Информация</h2>
                 <div>
                     <p>Id: {props.profile.userId}</p>
                     <p>Status: <img src={props.profile.lookingForAJob ? greenCircle : redCircle }
                                     className={style.bool} alt="status" />
                     </p>
                     <p>About the job: {props.profile.lookingForAJobDescription}</p>
                     <div>
                         <p>Contacts: </p>
                         <ul>
                             <li>GitHub: {props.profile.contacts.github }</li>
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

         </div>
     )
}

export default ProfileInfo;
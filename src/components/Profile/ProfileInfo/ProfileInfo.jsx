import style from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";

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
                 <img src={props.profile.photos.large}/>
                 ava + description
             </div>
         </div>
     )
}

export default ProfileInfo;
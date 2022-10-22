import style from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
     return (
         <div>
             <div>
                 <img src="https://oir.mobi/uploads/posts/2021-05/1622211351_27-oir_mobi-p-russkaya-priroda-priroda-krasivo-foto-28.jpg" />
             </div>
             <div className={style.descriptionBlock}>
                 ava + description
             </div>
         </div>
     )
}

export default ProfileInfo;
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = (props) => {
debugger;
    return (
        <div>
            <ProfileInfo />
            <MyPostsContainer />
        </div>
    )
}

// store={props.store}
export default Profile;
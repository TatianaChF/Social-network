import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/Post/MyPostsContainer";

const Profile = (props) => {

    return (
        <div>
            <ProfileInfo />
            <MyPostsContainer posts={props.data.posts}
                     newPost={props.data.newPostText}
                     dispatch={props.dispatch} />
        </div>
    )
}

export default Profile;
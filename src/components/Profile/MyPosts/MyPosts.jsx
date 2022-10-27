import React from "react";
import style from './MyPosts.module.css';
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";

const MyPosts = (props) => {

    let postsElement = props.posts.map( post => <Post message={post.message} like_count={post.likesCount} /> )

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
            <div className={style.postsBlock}>
                <h3>My posts</h3>
                <div>
                    <div>
                        <textarea onChange={ onPostChange }
                                  ref={ newPostElement }
                                  value={props.newPost}></textarea>
                    </div>
                    <div>
                        <button onClick={ onAddPost }>Add post</button>
                    </div>
                </div>
                <div className={style.posts}>
                    { postsElement }
                </div>
            </div>
    )
}

export default MyPosts;
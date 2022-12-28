import React from "react";
import style from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";

const MyPosts = (props) => {

    let postsElement = props.posts.map(post => <Post message={post.message} like_count={post.likesCount}/>)

    let newPostElement = React.createRef();

    let onAddPost = (value) => {
        props.addPost(value.newPost);
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={style.postsBlock}>
            <h3>My posts</h3>
            <MyPostReduxForm onSubmit={onAddPost} />
            <div className={style.posts}>
                {postsElement}
            </div>
        </div>
    )
}

const MyPostForm = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder="AddingPost" name="newPost"  component="textarea" />
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </form>
        </div>
    )
}

let MyPostReduxForm = reduxForm({form: "posts"})(MyPostForm);

export default MyPosts;
import React from "react";
import style from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {required, maxLengthCreator} from "../../../utils/validations";
import {Textarea} from "../../common/FormsControl/FormsControl";

let maxLength = maxLengthCreator(10);

const MyPosts = (props) => {

    let postsElement = props.posts.map(post => <Post message={post.message} like_count={post.likesCount}/>)

    let onAddPost = (value) => {
        props.addPost(value.newPostText);
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
                    <Field placeholder="Add text" name="newPostText"  component={Textarea}
                           validate={[required, maxLength]} />
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
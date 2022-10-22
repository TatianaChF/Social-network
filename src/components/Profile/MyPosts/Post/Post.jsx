import style from './Post.module.css';

const Post = (props) => {

    return (
        <div className={style.item}>
            <img src="https://html5css.ru/howto/img_avatar2.png" className="avatar" />
            { props.message }
            <div>
                <span>like</span> { props.like_count }
            </div>
        </div>
    )
}

export default Post;
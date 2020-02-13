import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {
    let postElements = props.postData
        .map(p => <Post message={p.message} likes={p.likes} />);

    let newPostValue = React.createRef();

    let newPost = () => {
        let value = newPostValue.current.value;
        props.addPost(value);
    }

    let onPostChange = () => {
        let value = newPostValue.current.value;
        props.updateNewPostText(value);
    }

    return (
        <div> My posts
        <div className={s.post__new}> New post
            <textarea 
                ref={newPostValue} 
                onChange={onPostChange}
                value={props.newPostText}
                className={s.post__add} 
                name="" id="" cols="10" rows="5"
            />
                <button onClick={ newPost } className={s.post__new_btn}>Add post</button>
            </div>
            <div className={s.post__wrapper}>
                {postElements}
            </div>
        </div>
    )
}

export default MyPosts;
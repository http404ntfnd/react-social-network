import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {
    let postElements = props.postData
        .map(p => <Post message={p.message} likes={p.likes} />);

    return (
        <div> My posts
        <div className={s.post__new}> New post
            <textarea className={s.post__add} name="" id="" cols="10" rows="5" placeholder="What`s new on your life"></textarea>
                <button className={s.post__new_btn}>Add post</button>
            </div>
            <div className={s.post__wrapper}>
                {postElements}
            </div>
        </div>
    )
}

export default MyPosts;
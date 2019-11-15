import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = () => {
    let postData = [
        { message: "My day was good, what about you?", likes: 10 },
        { message: "It`s my first post", likes: 28 },
    ]

    return (
        <div> My posts
        <div className={s.post__new}> New post
            <textarea className={s.post__add} name="" id="" cols="10" rows="5" placeholder="What`s new on your life"></textarea>
                <button className={s.post__new_btn}>Add post</button>
            </div>
            <div className={s.post__wrapper}>
                <Post message={postData[0].message} likes={postData[0].likes} />
                <Post message={postData[1].message} likes={postData[1].likes} />
            </div>
        </div>
    )
}

export default MyPosts;
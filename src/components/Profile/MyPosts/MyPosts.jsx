import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = () => {
    return ( 
    <div> My posts 
        <div className={s.post__new}> New post
            <textarea className={s.post__add} name="" id="" cols="10" rows="5" placeholder="What`s new on your life"></textarea>
            <button className={s.post__new_btn}>Add post</button>
        </div>
        <div className={s.post__wrapper}>
            <Post message="Hi, how are you?" likes="10"/>
            <Post message="It`s my first post" likes="28"/>
        </div>
    </div>
    )
}

export default MyPosts;
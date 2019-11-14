import React from 'react'
import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.post__item}>
            <div className={s.post__wrapper}>
                <img src="https://infuture.ru/filemanager/Flight1.jpg" alt="avatar" className={s.post__ava}/>
                { props.message }
                
            </div>
            <div className={s.post__like}> { props.likes} likes </div>
        </div>
        
    )
}

export default Post;
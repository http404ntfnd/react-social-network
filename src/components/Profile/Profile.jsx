import React from 'react'
import s from './Profile.module.css'

// start import components
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return <main className={s.main}>
        <section>
            <div> ava + description </div>
            <MyPosts />
        </section>
    </main>
}

export default Profile;
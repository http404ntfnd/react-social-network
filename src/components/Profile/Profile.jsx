import React from 'react'
import './Profile.module.css'

// start import components
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return <main>
        <section>
            <div> ava + description </div>
            <MyPosts />
        </section>
    </main>
}

export default Profile;
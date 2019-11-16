import React from 'react';
import s from './Profile.module.css';

// start import components
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = () => {
    return <main className={s.profile__main}>
        <section>
            <ProfileInfo />
            <MyPosts />
        </section>
    </main>
}

export default Profile;
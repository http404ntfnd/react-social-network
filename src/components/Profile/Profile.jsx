import React from 'react';
import './Profile.module.css';

// start import components
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = () => {
    return <main>
        <section>
            <ProfileInfo />
            <MyPosts />
        </section>
    </main>
}

export default Profile;
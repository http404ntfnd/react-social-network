import React from 'react';
import s from './Profile.module.css';

// start import components
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return <main className={s.profile__main}>
        <section>
            <ProfileInfo />
            <MyPosts
                newPostText={props.profilePage.newPostText}
                postData={props.profilePage.postData} 
                addPost={props.addPost}
                updateNewPostText={props.updateNewPostText}/>
        </section>
    </main>
}

export default Profile;
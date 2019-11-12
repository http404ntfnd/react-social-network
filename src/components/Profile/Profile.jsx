import React from 'react'
import classes from './Profile.module.css'

const Profile = () => {
    return <main className={classes.main}>
        <section>
            <img className={classes.main__wallpaper} src="http://hdwpro.com/wp-content/uploads/2017/11/Awesome-Wallpaper.jpg" alt="wallpaper"/>
            <div> ava + description </div>
            <div> My posts </div>
            <div> New posts</div>
            <div> post 1</div>

        </section>
    </main>
}

export default Profile;
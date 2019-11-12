import React from 'react'
import classes from './Navbar.module.css';

const Navbar = () => {
    return <nav className={classes.nav}>
    <ul className={classes.nav__list}>
      <li className={classes.nav__list_item}>
        <a href="#" className={`${classes.nav__list_item} ${classes.nav__list_item_active}`}>Profile</a>
      </li>
      <li className={classes.nav__list_item}>
        <a href="#" className={classes.nav__list_item_link}>Messages</a>
      </li>
      <li className={classes.nav__list_item}>
        <a href="#" className={classes.nav__list_item_link}>News</a>
      </li>
      <li className={classes.nav__list_item}>
        <a href="#" className={classes.nav__list_item_link}>Music</a>
      </li>
      <li className={classes.nav__list_item}>
        <a href="#" className={classes.nav__list_item_link}>Settings</a>
      </li>
    </ul>
  </nav>
}

export default Navbar;
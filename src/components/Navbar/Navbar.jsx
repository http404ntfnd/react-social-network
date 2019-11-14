import React from 'react';
import {NavLink} from "react-router-dom";

import s from './Navbar.module.css';


const Navbar = () => {
    return <nav className={s.nav}>
    <ul className={s.list}>
      <li className={s.item}>
        <NavLink to="/profile" className={`${s.item} ${s.active}`} activeClassName={s.link__active}>Profile</NavLink>
      </li>
      <li className={s.item}>
        <NavLink to="/dialogs" className={s.link} activeClassName={s.link__active}>Messages</NavLink>
      </li>
      <li className={s.item}>
        <NavLink to="/news" className={s.link} activeClassName={s.link__active}>News</NavLink>
      </li>
      <li className={s.item}>
        <NavLink to="/music" className={s.link} activeClassName={s.link__active}>Music</NavLink>
      </li>
      <li className={s.item}>
        <NavLink to="/settings" className={s.link} activeClassName={s.link__active}>Settings</NavLink>
      </li>
    </ul>
  </nav>
}

export default Navbar;
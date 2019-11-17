import React from 'react';
import s from './../Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <li className={s.dialog__conversation_item}>
            <NavLink to={path} className={s.dialog__conversation_link} activeClassName={s.conversation__link_active}>{props.name}</NavLink>
        </li>
    )
}

export default DialogItem;
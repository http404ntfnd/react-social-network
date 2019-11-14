import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';

const Dialogs = () => {
    return (
        <section className={s.dialog__wrapper}>
            <ul className={`${s.dialog__list} ${s.dialog__conversation}`}>
                <li className={s.conversation_item + ' ' + s.active}>
                    <NavLink to="/dialogs/1" >Dima</NavLink>
                </li>
                <li  className={s.conversation_item}>
                    <NavLink to="/dialogs/2">Sasha</NavLink>
                </li>
                <li className={s.conversation_item}>
                    <NavLink to="/dialogs/3" >Artem</NavLink>
                </li>
                <li className={s.conversation_item}>
                    <NavLink to="/dialogs/4" >Leonid</NavLink>
                </li>
            </ul>
            <ul className={`${s.dialog__list} ${s.dialog__messages}`}>
                <li className={s.dialog__messages_item}>
                    Hi
                </li>
                <li className={s.dialog__messages_item}>
                    How are you?
                </li>
                <li className={s.dialog__messages_item}>
                    Do you here?
                </li>
            </ul>
        </section>
    )
}

export default Dialogs;
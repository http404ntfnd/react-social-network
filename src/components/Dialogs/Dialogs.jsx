import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <li className={s.conversation__item}>
            <NavLink to={path} className={s.conversation__link} activeClassName={s.conversation__link_active}>{props.name}</NavLink>
        </li>
    )
}

const Message = (props) => {
    return (
        <li className={s.dialog__messages_item}>{props.message}</li>
    )
}

const Dialogs = (props) => {

    let dialogsData = [
        { id: 1, name: 'Dima' },
        { id: 2, name: 'Artem' },
        { id: 3, name: 'Vitalik' },
        { id: 4, name: 'Leonid' },
        { id: 5, name: 'Sasha' },
        { id: 6, name: 'Yura' },
        { id: 7, name: 'Andrey' },
    ]

    let messageData = [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How are you?' },
        { id: 3, message: 'Hello?' },
        { id: 4, message: 'Do you here?' },
    ]

    let dialogsElements = dialogsData
        .map(d => <DialogItem name={d.name} id={d.id} />);

    let messageElements = messageData
        .map(d => <Message id={d.id} message={d.message} />);

    return (
        <section className={s.dialog__wrapper}>
            <ul className={`${s.dialog__list} ${s.dialog__conversation}`}>
                {dialogsElements}
            </ul>
            <ul className={`${s.dialog__list} ${s.dialog__messages}`}>
                {messageElements}
            </ul>
        </section>
    )
}

export default Dialogs;
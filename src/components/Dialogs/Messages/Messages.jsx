import React from 'react';
import s from './../Dialogs.module.css';

const Messages = (props) => {
    return (
        <li className={s.dialog__messages_item}>{props.message}</li>
    )
}

export default Messages;
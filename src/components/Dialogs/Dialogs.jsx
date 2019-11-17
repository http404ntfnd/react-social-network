import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Messages from './Messages/Messages';


const Dialogs = (props) => {
    let dialogsElements = props.state.dialogsData.map(d => <DialogItem name={d.name} id={d.id} />);

    let messageElements = props.state.messageDate.map(d => <Messages id={d.id} message={d.message} />);

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
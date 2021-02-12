import React from 'react'
import style from './ChatPage.module.scss'
import {Room} from '../../enums';
export default function ChatPage(props: {
    room: Room;
    nickname: string
}) {
    return (
        <div className={style.ChatPage}>
            <h1>Nickname: {props.nickname}</h1>
            <h1>Room: {props.room}</h1>

        </div>
    )
}

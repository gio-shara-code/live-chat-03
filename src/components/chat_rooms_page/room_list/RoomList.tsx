import React from 'react'
import style from './RoomList.module.scss';

export default function RoomList(props) {
    return (
        <div className={style.RoomList}>
            {props.children}
        </div>
    )
}

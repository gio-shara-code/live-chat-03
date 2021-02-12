import React, { Children } from 'react'
import style from './Room.module.scss';

export default function Room(props: {onClick, children: string}) {
    return (
        <li onClick={props.onClick} className={style.Room}>
            {props.children}
        </li>
    )
}

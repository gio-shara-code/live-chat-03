import React from 'react'
import style from './ChatArea.module.scss'
export default function ChatArea(props: { messages: string[] }) {
    return (
        <div className={style.ChatArea}>
            {props.messages.map(msg => {
                
            })}
        </div>
    )
}

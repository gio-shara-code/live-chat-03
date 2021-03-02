import React from 'react'
import ChatInput from '../chat_input/ChatInput'
import style from './ChatController.module.scss'
import SendButton from '../send_button/SendButton'
export default function ChatController() {
    
    return (
        <div className={style.ChatController}>
            <ChatInput/>
            <SendButton/>
        </div>
    )
}

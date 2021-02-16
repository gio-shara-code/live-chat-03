import React, { useState } from 'react'
import style from './ChatPage.module.scss'
import {Room} from '../../enums';
import { io, Socket } from 'socket.io-client';
import ChatController from './chat_controller/ChatController'
export default function ChatPage(props: {
    room: Room;
    nickname: string;
}) {
    const [messages, setMessages] = useState([])
    const [socket, _] = useState(():Socket=> {
        const socket = io('ws://localhost:3000', { 
            auth: {
                nickname: 'Giorgi',
                room: '1'
            },
            hostname: 'localhost'
        });
        
        return socket
    })
    return (
        <div className={style.ChatPage}>
            
            {messages.map(msg => <p>msg</p>)}
            <ChatController/>
        </div>
    )
}

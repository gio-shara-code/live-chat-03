import React, { useState } from 'react'
import style from './ChatPage.module.scss'
import {Room} from '../../enums';
import { io, Socket } from 'socket.io-client';
import ChatController from './chat_controller/ChatController'
import { AuthUser, UserConnection } from '../../models'
import { getRandomUid } from '../../utils/random_generators'
import ChatArea from './chat_area/ChatArea';

export default function ChatPage(props: {
    room: Room;
    nickname: string;
}) {

    const [userConnection, _] = useState(():UserConnection=> {
        const authUser: AuthUser = {
            room: (props.room + 1) || 1,
            user: {
                uid: getRandomUid(props.nickname || '__gio__'),
                enteredOn: Date.now(),
                nickname: props.nickname || '__gio__'
            }
        }
        const socket = io('ws://localhost:3000', { 
            auth: authUser,
            hostname: 'localhost',
        });
        socket.on('message', (msg)=> console.log(msg))
        return {
            socket: socket,
            user: authUser.user
        }
    })

    return (
        <div className={style.ChatPage}>
            <h1>Welcome to the Room-{props.room + 1} </h1>
            <ChatArea userConnection={userConnection}/>
            <ChatController/>
        </div>
    )
}

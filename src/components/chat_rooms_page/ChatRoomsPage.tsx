import React from 'react'
import style from './ChatRoomsPage.module.scss'
import RoomList from './room_list/RoomList';
import ChatRoom from './room_list/room/Room'
import {Room} from '../../enums'
export default function ChatRoomsPage(props: {roomCallback?}) {
    return (
        <div className={style.ChatRoomsPage}>
            <h1>Choose a Room</h1>
            <RoomList>
                <ChatRoom onClick={() => props.roomCallback(Room.One)}>Room 01</ChatRoom>
                <ChatRoom onClick={() => props.roomCallback(Room.Two)}>Room 02</ChatRoom>
                <ChatRoom onClick={() => props.roomCallback(Room.Three)}>Room 03</ChatRoom>
            </RoomList>
        </div>
    )
}

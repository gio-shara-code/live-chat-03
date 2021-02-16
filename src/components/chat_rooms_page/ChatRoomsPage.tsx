import React, { useState } from 'react'
import style from './ChatRoomsPage.module.scss'
import RoomList from './room_list/RoomList';
import ChatRoom from './room_list/room/Room'
import { Room } from '../../enums'
import AnimatedBox from '../animated_box/AnimatedBox'
import SecondaryButton from '../secondary_button/SecondaryButton'

export default function ChatRoomsPage(props: { roomCallback?, backCallback}) {
    const [currentRoom, setRoom] = useState(null);
    function handleRoomClick(room: Room) {
        setRoom(room)
        setTimeout(() => {
            props.roomCallback(room)
        }, 1000)
    }
    return (
        <div className={style.ChatRoomsPage}>
            <AnimatedBox>
                <h1>Choose a Room</h1>
                <RoomList>
                    <ChatRoom onClick={()=> currentRoom == null && handleRoomClick(Room.One)}
                    isActive={currentRoom == Room.One}>Room 01</ChatRoom>
                    <ChatRoom onClick={()=> currentRoom == null && handleRoomClick(Room.Two)}
                    isActive={currentRoom == Room.Two}>Room 02</ChatRoom>
                    <ChatRoom onClick={()=> currentRoom == null && handleRoomClick(Room.Three)}
                    isActive={currentRoom == Room.Three}>Room 03</ChatRoom>
                </RoomList>
                <SecondaryButton 
                onClick={currentRoom == null && props.backCallback}
                isActive={currentRoom == null}
                >Back</SecondaryButton>
            </AnimatedBox>
        </div>
    )
}

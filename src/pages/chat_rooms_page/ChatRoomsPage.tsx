import React, {useState} from "react"
import styles from "./ChatRoomsPage.module.scss"
import RoomList from "./room_list/RoomList"
import ChatRoom from "./room_list/chat_room/ChatRoom"
import {Room} from "../../enums"
import AnimatedBox from "../../components/animated_box/AnimatedBox"
import SecondaryButton from "../../components/secondary_button/SecondaryButton"
import Center from "../../layouts/Center"

interface Props {
  roomCallback(room: Room): void
  backCallback(): void
}

const chatRoomsPage: React.FC<Props> = ({roomCallback, backCallback}) => {
  const [currentRoom, setRoom] = useState(null)
  const handleRoomClick = (room: Room) => {
    setRoom(room)
    setTimeout(() => {
      roomCallback(room)
    }, 1000)
  }
  return (
    <AnimatedBox>
      <div className={styles.ChatRoomsPage}>
        <Center>
          <h1>Choose a Room</h1>
        </Center>

        <div className={styles.ButtonsWrapper}>
          <RoomList>
            <ChatRoom
              role="chat-room-1-button"
              onClick={() => (currentRoom == null ? handleRoomClick(Room.One) : null)}
              isActive={currentRoom == Room.One}
            >
              Room-1
            </ChatRoom>
            <ChatRoom
              onClick={() => (currentRoom == null ? handleRoomClick(Room.Two) : null)}
              isActive={currentRoom == Room.Two}
            >
              Room-2
            </ChatRoom>
            <ChatRoom
              onClick={() => (currentRoom == null ? handleRoomClick(Room.Three) : null)}
              isActive={currentRoom == Room.Three}
            >
              Room-3
            </ChatRoom>
          </RoomList>
          <SecondaryButton
            onClick={currentRoom == null ? backCallback : null}
            isActive={currentRoom == null}
          >
            Back
          </SecondaryButton>
        </div>
      </div>
    </AnimatedBox>
  )
}

export default chatRoomsPage

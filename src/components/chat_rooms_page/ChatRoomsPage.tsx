import React, { useState } from "react";
import style from "./ChatRoomsPage.module.scss";
import RoomList from "./room_list/RoomList";
import ChatRoom from "./room_list/chat_room/ChatRoom";
import { Room } from "../../enums";
import AnimatedBox from "../animated_box/AnimatedBox";
import SecondaryButton from "../secondary_button/SecondaryButton";
import Center from "../../layouts/Center";

export default function ChatRoomsPage(props: { roomCallback?; backCallback }) {
  const [currentRoom, setRoom] = useState(null);
  function handleRoomClick(room: Room) {
    setRoom(room);
    setTimeout(() => {
      props.roomCallback(room);
    }, 1000);
  }
  return (
    <AnimatedBox>
      <div className={style.ChatRoomsPage}>
        <Center>
          <h1>Choose a Room</h1>
        </Center>
        <RoomList>
          <ChatRoom
            onClick={() =>
              currentRoom == null ? handleRoomClick(Room.One) : null
            }
            isActive={currentRoom == Room.One}
          >
            Room-1
          </ChatRoom>
          <ChatRoom
            onClick={() =>
              currentRoom == null ? handleRoomClick(Room.Two) : null
            }
            isActive={currentRoom == Room.Two}
          >
            Room-2
          </ChatRoom>
          <ChatRoom
            onClick={() =>
              currentRoom == null ? handleRoomClick(Room.Three) : null
            }
            isActive={currentRoom == Room.Three}
          >
            Room-3
          </ChatRoom>
        </RoomList>
        <SecondaryButton
          onClick={currentRoom == null ? props.backCallback : null}
          isActive={currentRoom == null}
        >
          Back
        </SecondaryButton>
      </div>
    </AnimatedBox>
  );
}

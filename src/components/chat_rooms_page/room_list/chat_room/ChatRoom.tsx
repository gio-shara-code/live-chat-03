import React from "react";
import style from "./ChatRoom.module.scss";

export default function ChatRoom(props: {
  onClick?;
  children?: string;
  isActive?: boolean;
}) {
  let roomStyle = [style.Room];
  if (props.isActive) roomStyle.push(style.RoomActive);
  return (
    <li>
      <a
        role="chat-room-a"
        onClick={props.onClick}
        className={roomStyle.join(" ")}
      >
        {props.children}
      </a>
    </li>
  );
}

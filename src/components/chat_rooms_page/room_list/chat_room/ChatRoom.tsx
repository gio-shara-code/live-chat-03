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
    <button
      role="chat-room"
      onClick={props.onClick}
      className={roomStyle.join(" ")}
    >
      {props.children}
    </button>
  );
}

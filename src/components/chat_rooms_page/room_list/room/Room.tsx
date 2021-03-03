import React from "react";
import style from "./Room.module.scss";

export default function Room(props: {
  onClick;
  children: string;
  isActive: boolean;
}) {
  let roomStyle = [style.Room];
  if (props.isActive) roomStyle.push(style.RoomActive);
  return (
    <li>
      <a href="#" onClick={props.onClick} className={roomStyle.join(" ")}>
        {props.children}
      </a>
    </li>
  );
}

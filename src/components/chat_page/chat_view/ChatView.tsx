import React from "react";
import ChatArea from "./chat_area/ChatArea";
import ChatController from "./chat_controller/ChatController";
import style from "./ChatView.module.scss";
import Center from "../../../layouts/Center";
export default function ChatView(props: { room: string; onClick }) {
  return (
    <div className={style.ChatView} onClick={props.onClick}>
      <Center>
        <h3>Room-{props.room}</h3>
      </Center>
      <ChatArea />
      <ChatController />
    </div>
  );
}

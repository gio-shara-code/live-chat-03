import React from "react";
import ChatArea from "./chat_area/ChatArea";
import ChatController from "./chat_controller/ChatController";
import style from "./ChatView.module.scss";
import Center from "../../../layouts/Center";
export default function ChatView(props: { room: string }) {
  return (
    <div className={style.ChatView}>
      <Center>
        <h1>Welcome to the Room-{props.room}</h1>
      </Center>
      <ChatArea />
      <ChatController />
    </div>
  );
}

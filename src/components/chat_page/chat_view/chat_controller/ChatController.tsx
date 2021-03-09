import React from "react";
import ChatInput from "./chat_input/ChatInput";
import style from "./ChatController.module.scss";
import { FaPaperPlane } from "react-icons/fa";
import IconComponent from "../../../icon_component/IconComponent";

export default function ChatController() {
  return (
    <div className={style.ChatController}>
      <ChatInput />
      <IconComponent>
        <FaPaperPlane size="inherit" />
      </IconComponent>
    </div>
  );
}

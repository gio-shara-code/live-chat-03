import React from "react";
import style from "./ChatInput.module.scss";
export default function ChatInput() {
  return <input placeholder="Type..." className={style.ChatInput}></input>;
}

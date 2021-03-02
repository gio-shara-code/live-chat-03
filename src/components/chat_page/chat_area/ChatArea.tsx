import React, { useEffect, useState } from "react";
import { Message, UserConnection } from "../../../models";
import style from "./ChatArea.module.scss";
import MessageBubble from "./message_bubble/MessageBubble";
import { getRandomUid } from "../../../utils/random_generators";
export default function ChatArea(props: { userConnection: UserConnection }) {
  const [messages, setMessages] = useState<Message[]>([
    {
      content: "Hello World",
      fromId: props.userConnection.user.uid,
      author: props.userConnection.user.nickname,
      sentOn: Date.now(),
      type: "message",
      id: getRandomUid("Hello World"),
    },
  ]);

  useEffect(() => {
    props.userConnection.socket.on("message", (message: Message) =>
      setMessages((prevMessages) => [...prevMessages, message])
    );
  }, []);

  return (
    <div className={style.ChatArea}>
      {messages.map((msg) => (
        <MessageBubble message={msg} itsMe key={msg.id} />
      ))}
    </div>
  );
}

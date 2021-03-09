import React, { useEffect, useState } from "react";
import { Message, UserConnection } from "../../../../models";
import style from "./ChatArea.module.scss";
import MessageBubble from "./message_bubble/MessageBubble";
import { getRandomUid } from "../../../../utils/random_generators";

const dummyData: Message = {
  content: "Hey, what's up?",
  fromId: "id_wqerrerfwrerwr",
  author: "Author",
  sentOn: Date.now(),
  type: "message",
  id: getRandomUid("Hello World"),
};
export default function ChatArea(props) {
  const [messages, setMessages] = useState<Message[]>([dummyData]);

  // useEffect(() => {
  //   props.userConnection.socket.on("message", (message: Message) =>
  //     setMessages((prevMessages) => [...prevMessages, message])
  //   );
  // }, []);

  return (
    <div className={style.ChatArea}>
      {messages.map((msg) => (
        <MessageBubble message={msg} itsMe={true} key={msg.id} />
      ))}
    </div>
  );
}

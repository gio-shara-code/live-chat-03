import React from "react";
import { Message } from "../../../../../models";
import { getChatTimestamp } from "../../../../../utils/date_format";
import styles from "./MessageBubble.module.scss";
export default function MessageBubble(props: {
  message: Message;
  itsMe?: boolean;
}) {
  const chatBubbleStyle = [styles.MessageBubble];
  const contentStyle = [styles.Content];

  if (props.itsMe) {
    chatBubbleStyle.push(styles.ItsMeMessageBubble);
    contentStyle.push(styles.ItsMeContent);
  }

  return (
    <div className={chatBubbleStyle.join(" ")}>
      <span className={styles.Author}>{props.message.author}</span>
      <div className={contentStyle.join(" ")}>{props.message.content}</div>
      <div>{getChatTimestamp(props.message.sentOn)}</div>
    </div>
  );
}

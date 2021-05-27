import React from "react"
import {Message} from "../../../../../interfaces"
import {convertToHourMinute} from "../../../../../utils/date_format"
import styles from "./MessageBubble.module.scss"

interface Props {
  message: Message
  itsMe?: boolean
}

const messageBubble: React.FC<Props> = ({message, itsMe}) => {
  const chatBubbleStyle = [styles.MessageBubble]
  const contentStyle = [styles.Content]

  if (itsMe) {
    chatBubbleStyle.push(styles.ItsMeMessageBubble)
    contentStyle.push(styles.ItsMeContent)
  }

  return (
    <div className={chatBubbleStyle.join(" ")}>
      <span className={styles.Author}>{message.author}</span>
      <div className={contentStyle.join(" ")}>{message.content}</div>
      <div>{convertToHourMinute(message.sentOn)}</div>
    </div>
  )
}

export default messageBubble

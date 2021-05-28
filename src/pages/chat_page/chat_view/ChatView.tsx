import React, {useRef, useEffect, useState} from "react"
import Messages from "./messages/Messages"
import ChatController from "./chat_controller/ChatController"
import styles from "./ChatView.module.scss"
import {Message, User} from "../../../interfaces"
import ChatInput from "./chat_controller/chat_input/ChatInput"
import {FaPaperPlane} from "react-icons/fa"
import {dummyMessages} from "../../../const"
import {isMessageValid} from "../../../utils/validation"
import {v4} from "uuid"

interface Props {
  user: User
}
const chatView: React.FC<Props> = ({user}) => {
  const [messages, setMessages] = useState<Message[]>(dummyMessages)
  const [message, setMessage] = useState<string>("")

  const messagesEl = useRef<HTMLDivElement>(null)

  const scrollDown = () => {
    messagesEl.current.scrollTop = messagesEl.current.scrollHeight
  }

  const componentDidMount = () => {}

  const updateMessages = (message: Message) => {
    return (messages: Message[]) => [...messages, message]
  }

  const messagesUpdated = () => {
    scrollDown()
  }

  useEffect(componentDidMount, [])
  useEffect(messagesUpdated, [messages])

  const handleChatInputChange = (e: any) => setMessage(e.target.value)
  const handleChatInpuKeyPress = (e: any) => {
    if (e.code === "Enter") {
      if (isMessageValid(message)) {
        const msg: Message = {
          author: "Nick",
          type: "message",
          id: v4(),
          content: message,
          sentOn: Date.now(),
          fromId: "me"
        }

        setMessages(updateMessages(msg))
        setMessage("")
      }
    }
  }

  return (
    <div className={styles.ChatView}>
      <h3>Room-{user.room}</h3>
      <Messages messages={messages} ref={messagesEl} />
      <ChatController>
        <ChatInput
          onChange={handleChatInputChange}
          value={message}
          onKeyPress={handleChatInpuKeyPress}
        />
        <FaPaperPlane className={styles.sendIcon} />
      </ChatController>
    </div>
  )
}

export default chatView

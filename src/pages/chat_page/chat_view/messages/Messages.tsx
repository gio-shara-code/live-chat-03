import React from "react"
import {Message} from "../../../../interfaces"
import style from "./Messages.module.scss"
import MessageBubble from "./message_bubble/MessageBubble"
import ConnectionBubble from "./connection_bubble/ConnectionBubble"
import DisconnectionBubble from "./disconnection_bubble/DisconnectionBubble"

interface Props {
  messages: Message[]
}

const messages = React.forwardRef<HTMLDivElement, Props>(({messages}, ref) => {
  // useEffect(() => {
  //   props.userConnection.socket.on("message", (message: Message) =>
  //     setMessages((prevMessages) => [...prevMessages, message])
  //   );
  // }, []);
  return (
    <div ref={ref} className={style.Messages}>
      {messages.map((message) => {
        return (
          <>
            {message.type === "message" && (
              <MessageBubble message={message} itsMe={message.fromId === "me"} key={message.id} />
            )}

            {message.type === "disconnected" && (
              <DisconnectionBubble nickname={message.author} key={message.id} />
            )}
            {message.type === "connected" && (
              <ConnectionBubble nickname={message.author} key={message.id} />
            )}
          </>
        )
      })}
    </div>
  )
})

export default messages

import React, {useState, useEffect} from "react"
import styles from "./ChatPage.module.scss"
import {Socket} from "socket.io-client"
import {User} from "../../interfaces"
import {socketConnection} from "../../services/socket_io"
import ChatView from "./chat_view/ChatView"
import ParticipantsView from "./participants_view/ParticipantsView"
import {FaBars} from "react-icons/fa"

interface Props {
  user: User
}

const chatPage: React.FC<Props> = ({user}) => {
  const [participantBarVisibility, setParticipantBarVisibility] = useState(false)

  const [socket, setSocket] = useState<Socket>(null)

  const componentDidMount = () => {
    setSocket(socketConnection(user))
    const beforeUnloadBrowserEvent = () => {
      socket?.disconnect()
    }
    const cleanUp = () => {
      window.removeEventListener("beforeunload", beforeUnloadBrowserEvent)
      socket?.disconnect()
    }

    window.addEventListener("beforeunload", beforeUnloadBrowserEvent)

    return cleanUp
  }

  // useEffect(componentDidMount, [])

  const handleMenuBarClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setParticipantBarVisibility(true)
  }

  const handleChatPageClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setParticipantBarVisibility(false)
  }

  return (
    <div className={styles.ChatPage} onClick={handleChatPageClick}>
      <ChatView user={user} />
      <ParticipantsView notVisible={!participantBarVisibility} />
      <FaBars className={styles.menuBar} onClick={(e) => handleMenuBarClick(e)} />
    </div>
  )
}
export default chatPage

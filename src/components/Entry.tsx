import React, {useState} from "react"
import NicknamePage from "../pages/nickname_page/NicknamePage"
import ChatRoomsPage from "../pages/chat_rooms_page/ChatRoomsPage"
import ChatPage from "../pages/chat_page/ChatPage"
import {Page, Room} from "../enums"
import {v4} from "uuid"

const entry = () => {
  const [page, setPage] = useState<Page>(Page.Chat)
  const [nickname, setNickname] = useState("")
  const [room, setRoom] = useState(null)

  function handleNicknamePageCallback(nickname: string) {
    setNickname(nickname)
    setPage(Page.ChatRooms)
  }

  function handleRoomCallback(room: Room) {
    setRoom(room)
    setPage(Page.Chat)
  }

  return (
    <>
      {page === Page.Nickname && <NicknamePage callbackNickname={handleNicknamePageCallback} />}

      {page === Page.ChatRooms && (
        <ChatRoomsPage
          roomCallback={handleRoomCallback}
          backCallback={() => setPage(Page.Nickname)}
        />
      )}
      {page === Page.Chat && (
        <ChatPage user={{enteredOn: Date.now(), nickname: nickname, room: room || "3", id: v4()}} />
      )}
    </>
  )
}

export default entry

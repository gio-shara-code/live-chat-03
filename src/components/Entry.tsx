import React, { useState } from "react";
import NicknamePage from "./nickname_page/NicknamePage";
import ChatRoomsPage from "./chat_rooms_page/ChatRoomsPage";
import ChatPage from "./chat_page/ChatPage";
import { Room } from "../enums";

enum Page {
  Nickname,
  ChatRooms,
  Chat,
}

export default function Entry() {
  const [page, setPage] = useState(Page.Nickname);
  const [nickname, setNickname] = useState("");
  const [room, setRoom] = useState(null);

  let currentPage;

  function handleNicknamePageCallback(nickname: string) {
    setNickname(nickname);
    setPage(Page.ChatRooms);
  }

  function handleRoomCallback(room: Room) {
    setRoom(room);
    setPage(Page.Chat);
  }

  switch (page) {
    case Page.Nickname:
      currentPage = (
        <NicknamePage
          pageTitle="Nickname"
          callbackNickname={handleNicknamePageCallback}
        />
      );
      break;
    case Page.ChatRooms:
      currentPage = (
        <ChatRoomsPage
          roomCallback={handleRoomCallback}
          backCallback={() => setPage(Page.Nickname)}
        />
      );
      break;
    case Page.Chat:
      currentPage = <ChatPage room={room} nickname={nickname} />;
      break;
    default:
      throw new Error();
  }
  return <>{currentPage}</>;
}

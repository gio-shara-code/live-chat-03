import React, { useState, useEffect } from "react";
import style from "./ChatPage.module.scss";
import { Room } from "../../enums";
import { io } from "socket.io-client";
import { AuthUser, UserConnection } from "../../models";
import TopLeftPosition from "../../layouts/TopLeftPosition";
import ChatView from "./chat_view/ChatView";
import ParticipantsView from "./participants_view/ParticipantsView";
import { FaBars } from "react-icons/fa";
import IconComponent from "../icon_component/IconComponent";
export default function ChatPage(props: { room: Room; nickname: string }) {
  const [usersVisible, setUsersVisibility] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener("change", (mediaQuery: MediaQueryListEvent) => {
      setIsMobile(mediaQuery.matches);
    });
    // window.addEventListener("beforeunload", (ev) => {
    //   ev.preventDefault();
    //   userConnection.socket.close();
    // });
    return () => {
      window.removeEventListener;
    };
  }, []);

  // const [userConnection, _] = useState(
  //   (): UserConnection => {
  //     const authUser: AuthUser = {
  //       room: props.room + 1 || 1,
  //       user: {
  //         enteredOn: Date.now(),
  //         nickname: props.nickname || "__gio__",
  //       },
  //     };
  //     const socket = io("ws://localhost:3000", {
  //       auth: authUser,
  //       hostname: "localhost",
  //     });

  //     authUser.user.uid = socket.id;

  //     return {
  //       socket: socket,
  //       user: authUser.user,
  //     };
  //   }
  // );
  function handleChatViewClick(
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) {
    e.preventDefault();
    e.stopPropagation();
    setUsersVisibility(false);
  }

  function handleMenuBarClick(e: React.MouseEvent<SVGElement, MouseEvent>) {
    e.preventDefault();
    e.stopPropagation();
    setUsersVisibility((oldVisibility) => !oldVisibility);
  }

  return (
    <div className={style.ChatPage}>
      <ChatView room="Demo Room" onClick={(e) => handleChatViewClick(e)} />
      <ParticipantsView visible={usersVisible} />
      {isMobile && (
        <TopLeftPosition>
          <IconComponent>
            <FaBars
              fill="black"
              size="inherit"
              onClick={(e) => handleMenuBarClick(e)}
            />
          </IconComponent>
        </TopLeftPosition>
      )}
    </div>
  );
}

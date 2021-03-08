import React, { useState, useEffect } from "react";
import style from "./ChatPage.module.scss";
import { Room } from "../../enums";
import { io } from "socket.io-client";
import { AuthUser, UserConnection } from "../../models";
import TopLeftPosition from "../../layouts/TopLeftPosition";
import ArrowLeftIcon from "../arrow_left_icon/ArrowLeftIcon";
import ChatView from "./chat_view/ChatView";
import ParticipantsView from "./participants_view/ParticipantsView";
export default function ChatPage(props: { room: Room; nickname: string }) {
  useEffect(() => {
    window.addEventListener("beforeunload", (ev) => {
      ev.preventDefault();
      userConnection.socket.close();
    });
  }, []);

  const [userConnection, _] = useState(
    (): UserConnection => {
      const authUser: AuthUser = {
        room: props.room + 1 || 1,
        user: {
          enteredOn: Date.now(),
          nickname: props.nickname || "__gio__",
        },
      };
      const socket = io("ws://localhost:3000", {
        auth: authUser,
        hostname: "localhost",
      });

      authUser.user.uid = socket.id;

      return {
        socket: socket,
        user: authUser.user,
      };
    }
  );
  return (
    <div className={style.ChatPage}>
      <ChatView room="Demo Room" />
      <ParticipantsView />
      <TopLeftPosition>
        <ArrowLeftIcon />
      </TopLeftPosition>
    </div>
  );
}

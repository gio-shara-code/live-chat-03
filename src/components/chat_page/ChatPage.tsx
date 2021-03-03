import React, { useState, useEffect } from "react";
import style from "./ChatPage.module.scss";
import { Room } from "../../enums";
import { io } from "socket.io-client";
import ChatController from "./chat_controller/ChatController";
import { AuthUser, UserConnection } from "../../models";
import ChatArea from "./chat_area/ChatArea";

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
  console.log(userConnection);
  return (
    <div className={style.ChatPage}>
      <h1 style={{ textAlign: "center" }}>
        Welcome to the Room-{props.room + 1}
      </h1>
      <ChatArea userConnection={userConnection} />
      <ChatController />
    </div>
  );
}

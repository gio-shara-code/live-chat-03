import { Socket } from "socket.io-client";
import { Room } from "./enums";

export interface Message {
  content: string;
  sentOn: number;
  fromId: string;
  author: string;
  type: "message" | "connected" | "disconnected";
  id: string;
}

export interface User {
  nickname: string;
  enteredOn: number;
  uid?: string;
}

export interface AuthUser {
  room: Room;
  user: User;
}

export interface UserConnection {
  socket: Socket;
  user: User;
}

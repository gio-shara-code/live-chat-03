import {Room} from "./enums"

export interface Message {
  content?: string
  sentOn?: number
  fromId?: string
  author: string
  type: "message" | "connected" | "disconnected"
  id: string
}

export interface User {
  id?: string
  nickname: string
  enteredOn: number
  room: Room
}

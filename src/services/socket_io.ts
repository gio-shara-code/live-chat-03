import {io, Socket} from "socket.io-client"
import {User} from "../interfaces"

export const socketConnection = (user: User): Socket => {
  const config = {
    transports: ["websocket"],
    auth: user
  }

  const socket = io("ws://localhost:3000", config)

  return socket
}

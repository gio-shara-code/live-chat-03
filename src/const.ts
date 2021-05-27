import {Message, User} from "./interfaces"
import {v4} from "uuid"
import {Room} from "./enums"
import {randomNicknameGenerator} from "./utils/random_generators"

export const dummyUsers: User[] = [
  {
    enteredOn: Date.now(),
    nickname: randomNicknameGenerator(),
    room: Room.Three,
    id: v4()
  },
  {
    enteredOn: Date.now(),
    nickname: randomNicknameGenerator(),
    room: Room.Three,
    id: v4()
  },
  {
    enteredOn: Date.now(),
    nickname: randomNicknameGenerator(),
    room: Room.Three,
    id: v4()
  },
  {
    enteredOn: Date.now(),
    nickname: randomNicknameGenerator(),
    room: Room.Three,
    id: v4()
  },
  {
    enteredOn: Date.now(),
    nickname: randomNicknameGenerator(),
    room: Room.Three,
    id: v4()
  },
  {
    enteredOn: Date.now(),
    nickname: randomNicknameGenerator(),
    room: Room.Three,
    id: v4()
  },
  {
    enteredOn: Date.now(),
    nickname: randomNicknameGenerator(),
    room: Room.Three,
    id: v4()
  },
  {
    enteredOn: Date.now(),
    nickname: randomNicknameGenerator(),
    room: Room.Three,
    id: v4()
  },
  {
    enteredOn: Date.now(),
    nickname: randomNicknameGenerator(),
    room: Room.Three,
    id: v4()
  },
  {
    enteredOn: Date.now(),
    nickname: randomNicknameGenerator(),
    room: Room.Three,
    id: v4()
  },
  {
    enteredOn: Date.now(),
    nickname: randomNicknameGenerator(),
    room: Room.Three,
    id: v4()
  },
  {
    enteredOn: Date.now(),
    nickname: randomNicknameGenerator(),
    room: Room.Three,
    id: v4()
  },
  {
    enteredOn: Date.now(),
    nickname: randomNicknameGenerator(),
    room: Room.Three,
    id: v4()
  },
  {
    enteredOn: Date.now(),
    nickname: randomNicknameGenerator(),
    room: Room.Three,
    id: v4()
  },
  {
    enteredOn: Date.now(),
    nickname: randomNicknameGenerator(),
    room: Room.Three,
    id: v4()
  },
  {
    enteredOn: Date.now(),
    nickname: randomNicknameGenerator(),
    room: Room.Three,
    id: v4()
  },
  {
    enteredOn: Date.now(),
    nickname: randomNicknameGenerator(),
    room: Room.Three,
    id: v4()
  }
]

export const dummyMessages: Message[] = [
  {
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum minima dicta, ipsum ipsa ipsam perspiciatis officia quia, tempore molestias sequi asperiores natus dolores consequatur omnis facere quos, ea nostrum molestiae.  ",
    fromId: "me",
    author: "Nick",
    sentOn: Date.now(),
    type: "message",
    id: v4()
  },
  {
    author: randomNicknameGenerator(),
    type: "connected",
    id: v4()
  },
  {
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum minima dicta, ipsum ipsa ipsam perspiciatis officia quia, tempore molestias sequi asperiores natus dolores consequatur omnis facere quos, ea nostrum molestiae.  ",
    fromId: v4(),
    author: randomNicknameGenerator(),
    sentOn: Date.now(),
    type: "message",
    id: v4()
  },
  {
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum minima dicta, ipsum ipsa ipsam perspiciatis officia quia, tempore molestias sequi asperiores natus dolores consequatur omnis facere quos, ea nostrum molestiae.  ",
    fromId: v4(),
    author: randomNicknameGenerator(),

    sentOn: Date.now(),
    type: "message",
    id: v4()
  },
  {
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum minima dicta, ipsum ipsa ipsam perspiciatis officia quia, tempore molestias sequi asperiores natus dolores consequatur omnis facere quos, ea nostrum molestiae.  ",
    fromId: v4(),
    author: randomNicknameGenerator(),

    sentOn: Date.now(),
    type: "message",
    id: v4()
  },
  {
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum minima dicta, ipsum ipsa ipsam perspiciatis officia quia, tempore molestias sequi asperiores natus dolores consequatur omnis facere quos, ea nostrum molestiae.  ",
    fromId: v4(),
    author: randomNicknameGenerator(),

    sentOn: Date.now(),
    type: "message",
    id: v4()
  },
  {
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum minima dicta, ipsum ipsa ipsam perspiciatis officia quia, tempore molestias sequi asperiores natus dolores consequatur omnis facere quos, ea nostrum molestiae.  ",
    fromId: v4(),
    author: randomNicknameGenerator(),

    sentOn: Date.now(),
    type: "message",
    id: v4()
  },
  {
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum minima dicta, ipsum ipsa ipsam perspiciatis officia quia, tempore molestias sequi asperiores natus dolores consequatur omnis facere quos, ea nostrum molestiae.  ",
    fromId: v4(),
    author: randomNicknameGenerator(),

    sentOn: Date.now(),
    type: "message",
    id: v4()
  },
  {
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum minima dicta, ipsum ipsa ipsam perspiciatis officia quia, tempore molestias sequi asperiores natus dolores consequatur omnis facere quos, ea nostrum molestiae.  ",
    fromId: v4(),
    author: randomNicknameGenerator(),

    sentOn: Date.now(),
    type: "disconnected",
    id: v4()
  }
]

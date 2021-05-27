import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import NicknamePage from "../pages/nickname_page/NicknamePage";
import ChatRoomsPage from "../pages/chat_rooms_page/ChatRoomsPage";
import ChatPage from "../pages/chat_page/ChatPage";
import { Room } from "../enums";

const mockWindowMatchMediaProperties = () => {
  Object.defineProperty(window, "matchMedia", {
    value: jest.fn().mockImplementation((query) => ({
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
    })),
  });
};

describe("End-2-End Tests", () => {
  test("User inputs nickname, clicks room 1 and will be navigate to chat page", () => {
    const callbackNickname = jest.fn();

    const nickNamePage = render(
      <NicknamePage pageTitle="title" callbackNickname={callbackNickname} />
    );
    expect(nickNamePage.getByText("title")).toBeInTheDocument();

    userEvent.type(nickNamePage.getByRole("nickname-input"), "Nickname");
    userEvent.click(nickNamePage.getByRole("nickname-next-button"));
    expect(callbackNickname).toBeCalledTimes(1);

    const roomCallBack = jest.fn();
    const chatRoomPage = render(<ChatRoomsPage roomCallback={roomCallBack} />);
    userEvent.click(chatRoomPage.getByRole("chat-room-1-button"));
    setTimeout(() => {
      expect(roomCallBack).toHaveBeenCalledTimes(1);
    }, 1100);
    //callbackNickname called once
  });

  mockWindowMatchMediaProperties();

  const chatPage = render(<ChatPage nickname="Nickname" room={Room.One} />);
  expect(chatPage.getByText("Welcome Nickname in Room-1")).toBeInTheDocument();
});

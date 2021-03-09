import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ChatRoom from "./ChatRoom";
import userEvent from "@testing-library/user-event";
describe("ChatRoom", () => {
  const aLinkRole = "chat-room";
  it("renders children", () => {
    const { getByRole } = render(<ChatRoom>Hello</ChatRoom>);
    expect(getByRole(aLinkRole)).toHaveTextContent("Hello");
  });

  it("renders component as active", () => {
    const { getByRole } = render(<ChatRoom isActive />);
    expect(getByRole(aLinkRole)).toHaveClass("Room RoomActive", {
      exact: true,
    });
  });

  it("renders component as inactive", () => {
    const { getByRole } = render(<ChatRoom isActive={false} />);
    expect(getByRole(aLinkRole)).toHaveClass("Room", {
      exact: true,
    });
  });

  it("onClick is working", () => {
    const handleClick = jest.fn();
    const { getByRole } = render(<ChatRoom onClick={handleClick} />);
    userEvent.click(getByRole(aLinkRole));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});

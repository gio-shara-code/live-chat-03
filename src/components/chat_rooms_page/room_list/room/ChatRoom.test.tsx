import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ChatRoom from "./ChatRoom";
describe("ChatRoom", () => {
  it("renders children", () => {
    const { getByRole } = render(<ChatRoom>Hello</ChatRoom>);
    expect(getByRole("chat-room-a")).toHaveTextContent("Hello");
  });

  it("renders component as active", () => {
    const { getByRole } = render(<ChatRoom isActive />);
    expect(getByRole("chat-room-a")).toHaveClass("Room RoomActive", {
      exact: true,
    });
  });

  it("renders component as inactive", () => {
    const { getByRole } = render(<ChatRoom isActive={false} />);
    expect(getByRole("chat-room-a")).toHaveClass("Room", {
      exact: true,
    });
  });
});

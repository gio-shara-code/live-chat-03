import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ChatRoom from "./ChatRoom";
describe("ChatRoom", () => {
  it("renders children", () => {
    const { getByRole } = render(<ChatRoom>Hello</ChatRoom>);
    expect(getByRole("chat-room-a")).toHaveTextContent("Hello");
  });

  it("Hello World", () => {});
});

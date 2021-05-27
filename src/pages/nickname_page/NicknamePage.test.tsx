import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import NicknamePage from "./NicknamePage";

describe("NicknamePage", () => {
  test("pageTitle property is working", () => {
    const { getByRole } = render(
      <NicknamePage pageTitle="page_title" callbackNickname={null} />
    );
    expect(getByRole("heading")).toHaveTextContent("page_title");
  });
});

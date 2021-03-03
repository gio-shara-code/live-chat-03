import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";

import SecondaryButton from "./SecondaryButton";
describe("SecondaryButton", () => {
  it("renders text content", () => {
    const { getByRole } = render(
      <SecondaryButton isActive>Click Me</SecondaryButton>
    );
    expect(getByRole("button")).toHaveTextContent("Click Me");
  });

  it("renders as active", () => {
    const { getByRole } = render(
      <SecondaryButton isActive>Click Me</SecondaryButton>
    );
    expect(getByRole("button")).toHaveClass("SecondaryButton", { exact: true });
  });

  it("renders as inactive", () => {
    const { getByRole } = render(
      <SecondaryButton isActive={false}>Click Me</SecondaryButton>
    );

    expect(getByRole("button")).toHaveClass("SecondaryButton InActive", {
      exact: true,
    });
  });

  it("onClick is working", () => {
    const handleClick = jest.fn();
    const { getByText } = render(
      <SecondaryButton isActive onClick={handleClick}>
        Click Me
      </SecondaryButton>
    );
    userEvent.click(getByText("Click Me"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});

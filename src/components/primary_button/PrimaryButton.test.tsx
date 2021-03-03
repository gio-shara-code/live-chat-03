import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import PrimaryButton from "./PrimaryButton";

describe("PrimaryButton", () => {
  it("renders text content", () => {
    const { getByRole } = render(
      <PrimaryButton active={false}>Click Me</PrimaryButton>
    );
    expect(getByRole("button")).toHaveTextContent("Click Me");
  });

  it("renders as inactive", () => {
    //arrange
    const { getByRole } = render(
      <PrimaryButton active={false}>Click Me</PrimaryButton>
    );
    
    //act & assert
    expect(getByRole("button")).toHaveClass("PrimaryButton InActive", {
      exact: true,
    });
  });

  it("is active and renders", () => {
    const { getByRole } = render(
      <PrimaryButton active>Click Me</PrimaryButton>
    );
    expect(getByRole("button")).toHaveClass("PrimaryButton", { exact: true });
  });

  it("onClick is working", () => {
    const handleClick = jest.fn();
    const { getByText } = render(
      <PrimaryButton active onClick={handleClick}>
        Click Me
      </PrimaryButton>
    );
    userEvent.click(getByText("Click Me"));
    expect(handleClick).toBeCalledTimes(1);
  });
});

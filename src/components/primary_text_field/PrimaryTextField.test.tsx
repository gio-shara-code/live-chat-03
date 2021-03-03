import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import PrimaryTextField from "./PrimaryTextField";
describe("PrimaryTextField", () => {
  const pErrorRoleName = "display-error";

  it("input renders and placeholder working properly", () => {
    const { getByRole } = render(
      <PrimaryTextField error="error" placeholder="gio" />
    );
    const input: HTMLInputElement | HTMLElement = getByRole("textbox");

    if (input instanceof HTMLInputElement)
      expect(input.placeholder).toBe("gio");
    expect(input).toHaveClass("PrimaryTextField", {
      exact: true,
    });
  });

  it("does show error and checks the class name", () => {
    const { getByRole } = render(<PrimaryTextField error="error" />);
    expect(getByRole(pErrorRoleName)).toHaveTextContent(/^error$/);
    expect(getByRole(pErrorRoleName)).toHaveClass("Error", { exact: true });
  });

  it("doesn't show error and checks a class names", () => {
    const { getByRole } = render(<PrimaryTextField />);
    expect(getByRole(pErrorRoleName)).toHaveTextContent("");
    expect(getByRole(pErrorRoleName)).toHaveClass("Error ErrorInActive", {
      exact: true,
    });
  });
  it("onChange is working", () => {
    const handleChange = jest.fn();
    const { getByRole } = render(<PrimaryTextField onChange={handleChange} />);
    userEvent.type(getByRole("textbox"), "123");
    expect(handleChange).toBeCalledTimes(3);
  });

  it("onKeyPressed is working", () => {
    const handleKeyPress = jest.fn();
    const { getByRole } = render(
      <PrimaryTextField onKeyPress={handleKeyPress} />
    );
    userEvent.type(getByRole("textbox"), "{enter}");
    expect(handleKeyPress).toHaveBeenCalledTimes(1);
  });

  it("value attribute passed", () => {
    const { getByRole } = render(
      <PrimaryTextField onChange={() => {}} value="value" />
    );
    expect(getByRole("textbox")).toHaveValue("value");
  });
});

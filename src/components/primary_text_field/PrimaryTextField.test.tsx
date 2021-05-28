import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import PrimaryTextField from "./PrimaryTextField";
describe("PrimaryTextField", () => {
  
  it("placeholder working properly", () => {
    const { getByRole } = render(
      <PrimaryTextField error="error" placeholder="gio" />
    );
    const input: HTMLInputElement | HTMLElement = getByRole("textbox");

    if (input instanceof HTMLInputElement)
      expect(input.placeholder).toBe("gio");
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

import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import PrimaryTextField from "./PrimaryTextField";
import { renderIntoDocument } from "react-dom/test-utils";
describe("PrimaryTextField", () => {
  const pErrorRoleName = "display-error";

  it("input renders and placeholder working properly", () => {
    const { getByRole } = render(
      <PrimaryTextField
        error="error"
        placeholder="gio"
        value="value"
        onChange={() => {}}
      />
    );
    const input: HTMLInputElement | HTMLElement = getByRole("textbox");

    if (input instanceof HTMLInputElement) {
      expect(input.placeholder).toBe("gio");
      expect(input.value).toBe("value");
    }

    expect(getByRole("textbox")).toHaveClass("PrimaryTextField", {
      exact: true,
    });
  });

  it("does show error", () => {
    const { getByRole } = render(<PrimaryTextField error="error" />);
    expect(getByRole(pErrorRoleName)).toHaveTextContent(/^error$/);
    expect(getByRole(pErrorRoleName)).toHaveClass("Error", { exact: true });
  });

  it("doesn't show error", () => {
    const { getByRole } = render(<PrimaryTextField />);
    expect(getByRole(pErrorRoleName)).toHaveTextContent("");
    expect(getByRole(pErrorRoleName)).toHaveClass("Error ErrorInActive", {
      exact: true,
    });
  });
  it("onChange and value property are working properly", function () {
    this.value = "";
    const handleEvent = jest.fn((e) => (this.value += e.target.value));
    const { getByRole, rerender } = render(
      <PrimaryTextField onChange={handleEvent} value={this.value} />
    );
    userEvent.type(getByRole("textbox"), "123");
    rerender(<PrimaryTextField value={this.value} />);
    expect(handleEvent).toBeCalledTimes(3);
    expect(getByRole("textbox")).toHaveValue("123");
  });
});

import React from "react";
import { render } from "@testing-library/react";
import InputError from "./InputError";
import "@testing-library/jest-dom";
describe("InputError", () => {
  const divErrorRoleName = "error-container";
  const pErrorRoleName = "error";

  test(" does show error and checks the class name", () => {
    const { getByRole } = render(<InputError error="error" />);
    expect(getByRole(pErrorRoleName)).toHaveTextContent(/^error$/);
    expect(getByRole(divErrorRoleName)).toHaveClass("InputError Active", {
      exact: true,
    });
  });
  test("doesn't show error and checks a class names", () => {
    const { getByRole } = render(<InputError error={null} />);
    expect(getByRole(pErrorRoleName)).toHaveTextContent("");
    expect(getByRole(divErrorRoleName)).toHaveClass("InputError", {
      exact: true,
    });
  });
});

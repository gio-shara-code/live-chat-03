import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import PrimaryTextField from "./PrimaryTextField";
describe("PrimaryTextField", () => {
  const pErrorRoleName = "display-error";
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
});

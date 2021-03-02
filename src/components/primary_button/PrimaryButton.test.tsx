import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import PrimaryButton from "./PrimaryButton";

it("is not active and renders", () => {
  const { getByRole } = render(
    <PrimaryButton active={false}>Click Me</PrimaryButton>
  );
  expect(getByRole("button")).toHaveTextContent("Click Me");
  expect(getByRole("button")).toHaveClass("PrimaryButton InActive");
});

it("is active and renders", () => {
  const { getByRole } = render(<PrimaryButton active>Click Me</PrimaryButton>);
  const primaryButton = getByRole("button");

  expect(getByRole("button")).toHaveTextContent("Click Me");
  expect(getByRole("button")).toHaveClass("PrimaryButton Active");
});

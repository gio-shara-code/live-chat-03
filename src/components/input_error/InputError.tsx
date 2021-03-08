import React from "react";
import style from "./InputError.module.scss";
export default function InputError(props: { error: string }) {
  let inputError = [style.InputError];
  if (props.error) inputError.push(style.Active);
  return (
    <div role="error-container" className={inputError.join(" ")}>
      <p role="error">{props.error}</p>
    </div>
  );
}

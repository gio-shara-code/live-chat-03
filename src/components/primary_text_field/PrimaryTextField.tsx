import React from "react";
import style from "./PrimaryTextField.module.scss";
import InputError from "../input_error/InputError";
export default function PrimaryTextField(props: {
  placeholder?: string;
  value?: string;
  onChange?;
  error?: string | null;
  onKeyPress?;
}) {
  let errorStyle = [style.Error];

  if (!props.error) errorStyle.push(style.ErrorInActive);

  return (
    <div className={style.PrimaryTextFieldContainer}>
      <InputError error={props.error} />
      <input
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
        type="text"
        onKeyPress={props.onKeyPress}
      />
    </div>
  );
}

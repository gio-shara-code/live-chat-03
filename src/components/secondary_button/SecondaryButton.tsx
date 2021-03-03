import React from "react";
import style from "./SecondaryButton.module.scss";
export default function SecondaryButton(props: {
  onClick?;
  children: string;
  isActive: boolean;
}) {
  let btnStyle = [style.SecondaryButton];
  if (!props.isActive) btnStyle.push(style.InActive);
  return (
    <button className={btnStyle.join(" ")} onClick={props.onClick}>
      {props.children}
    </button>
  );
}

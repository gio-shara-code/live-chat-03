import React from "react";
import style from "./PrimaryButton.module.scss";
export default function PrimaryButton(props: {
  active: boolean;
  children;
  onClick?;
  role?: string;
}) {
  let btnStyle = [style.PrimaryButton];
  if (props.active) btnStyle.push(style.Active);
  return (
    <button
      role={props.role}
      className={btnStyle.join(" ")}
      onClick={(e) => props.onClick(e)}
    >
      {props.children}
    </button>
  );
}

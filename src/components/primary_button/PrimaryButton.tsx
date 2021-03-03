import React from "react";
import style from "./PrimaryButton.module.scss";
export default function PrimaryButton(props: {
  active: boolean;
  children;
  onClick?;
}) {
  let btnStyle = [style.PrimaryButton];
  if (!props.active) btnStyle.push(style.InActive);

  return (
    <button className={btnStyle.join(" ")} onClick={(e) => props.onClick(e)}>
      {props.children}
    </button>
  );
}

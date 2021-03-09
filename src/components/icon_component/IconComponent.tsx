import React from "react";
import style from "./IconComponent.module.scss";
export default function IconComponent(props) {
  return <div className={style.IconComponent}>{props.children}</div>;
}

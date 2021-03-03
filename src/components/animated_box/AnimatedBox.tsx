import React from "react";
import style from "./AnimatedBox.module.scss";
export default function AnimatedBox(props) {
  return <div className={style.AnimatedBox}>{props.children}</div>;
}

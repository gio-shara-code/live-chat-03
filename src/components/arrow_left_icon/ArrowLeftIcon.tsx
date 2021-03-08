import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import style from "./ArrowLeftIcon.module.scss";
export default function ArrowLeftIcon() {
  return (
    <div className={style.ArrowLeftIcon}>
      <FaArrowLeft fill="black" stroke="black" size="inherit" />
    </div>
  );
}

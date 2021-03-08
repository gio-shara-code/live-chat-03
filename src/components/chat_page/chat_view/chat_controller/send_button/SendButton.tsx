import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import style from "./SendButton.module.scss";
export default function SendButton() {
  return (
    <div className={style.SendButton}>
      <FaPaperPlane fill="black" stroke="black" size="inherit" />
    </div>
  );
}

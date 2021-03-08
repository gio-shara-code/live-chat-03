import React, { useState } from "react";
import style from "./NicknamePage.module.scss";
import PrimaryTextField from "../primary_text_field/PrimaryTextField";
import PrimaryButton from "../primary_button/PrimaryButton";
import {
  nicknameValidation,
  isNicknameValid,
} from "../../utils/input_validation";
import AnimatedBox from "../animated_box/AnimatedBox";
import PTF from "../primary_text_field/PrimaryTextField";
import Center from "../../layouts/Center";
export default function NicknamePage(props: {
  callbackNickname(nickname: string): void;
  pageTitle: string;
}) {
  const [nickname, setNickname] = useState("");
  const [nickNameError, setNicknameError] = useState(null);

  function handleNicknameChange(e) {
    const newNickname: string = e.target.value;
    setNickname(newNickname);

    const error = nicknameValidation(newNickname.trim());
    setNicknameError(error);
  }

  function handleButtonClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    e.preventDefault();
    e.stopPropagation();
    if (isNicknameValid(nickNameError)) props.callbackNickname(nickname);
  }

  function handleBodyTap(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (nickNameError) setNicknameError(null);
  }

  function handleNicknameFieldKeyPress(
    e: React.KeyboardEvent<HTMLInputElement>
  ) {
    if (e.code === "Enter") {
      if (isNicknameValid(nickNameError)) props.callbackNickname(nickname);
    }
  }

  return (
    <AnimatedBox>
      <div className={style.NicknamePage} onClick={handleBodyTap}>
        <h1>{props.pageTitle}</h1>
        <PrimaryTextField
          value={nickname}
          onChange={handleNicknameChange}
          placeholder="E.g. __gio__"
          error={nickNameError}
          onKeyPress={handleNicknameFieldKeyPress}
        />
        <PrimaryButton
          active={!nickNameError && nickNameError != null}
          onClick={handleButtonClick}
        >
          Next
        </PrimaryButton>
      </div>
    </AnimatedBox>
  );
}

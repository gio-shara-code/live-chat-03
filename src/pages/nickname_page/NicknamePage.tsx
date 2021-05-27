import React, {useState} from "react"
import styles from "./NicknamePage.module.scss"
import PrimaryTextField from "../../components/primary_text_field/PrimaryTextField"
import PrimaryButton from "../../components/primary_button/PrimaryButton"
import {nicknameValidation, isNicknameValid} from "../../utils/validation"
import AnimatedBox from "../../components/animated_box/AnimatedBox"

interface Props {
  callbackNickname(nickname: string): void
}

const nicknamePage: React.FC<Props> = ({callbackNickname}) => {
  const [nickname, setNickname] = useState("")
  const [nickNameError, setNicknameError] = useState(null)

  function handleNicknameChange(e) {
    const newNickname: string = e.target.value
    setNickname(newNickname)

    const error = nicknameValidation(newNickname.trim())
    setNicknameError(error)
  }

  function handleButtonClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    e.preventDefault()
    e.stopPropagation()
    if (isNicknameValid(nickNameError)) callbackNickname(nickname)
  }

  function handleBodyTap(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (nickNameError) setNicknameError(null)
  }

  function handleNicknameFieldKeyPress(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.code === "Enter") {
      if (isNicknameValid(nickNameError)) callbackNickname(nickname)
    }
  }

  return (
    <AnimatedBox>
      <div className={styles.NicknamePage} onClick={handleBodyTap}>
        <h1>Nickname</h1>
        <div className={styles.InputAndButtonWrapper}>
          <PrimaryTextField
            role="nickname-input"
            value={nickname}
            onChange={handleNicknameChange}
            placeholder="E.g. __gio__"
            error={nickNameError}
            onKeyPress={handleNicknameFieldKeyPress}
          />
          <PrimaryButton
            role="nickname-next-button"
            active={!nickNameError && nickNameError != null}
            onClick={handleButtonClick}
          >
            Next
          </PrimaryButton>
        </div>
      </div>
    </AnimatedBox>
  )
}

export default nicknamePage

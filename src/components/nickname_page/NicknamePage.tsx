import React, { useState, useEffect } from 'react'
import style from './NicknamePage.module.scss';
import PrimaryTextField from '../primary_text_field/PrimaryTextField'
import PrimaryButton from '../primary_button/PrimaryButton'
import { nicknameGetError, isNicknameValid } from '../../utils/input_validation'
import AnimatedBox from '../animated_box/AnimatedBox'
export default function NicknamePage(props: { callbackNickname }) {
    const [nickname, setNickname] = useState('')
    const [nickNameError, setNicknameError] = useState(null)

    function handleNicknameChange(e) {
        const nickname = e.target.value;
        setNickname(nickname)

        const error = nicknameGetError(nickname.trim())
        setNicknameError(error)
    }

    function handleButtonClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        e.preventDefault()
        e.stopPropagation()
        if (isNicknameValid(nickNameError)) props.callbackNickname(nickname)
    }

    function handleBodyTap(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        if (nickNameError) setNicknameError(null)
    }

    function handleNicknameFieldKeyPress(e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.code === 'Enter') {
            if (isNicknameValid(nickNameError)) props.callbackNickname(nickname)
        }
    }

    return (
        <div className={style.NicknamePage} onClick={handleBodyTap}>
            <AnimatedBox>
                <h1>Nickname</h1>
                <PrimaryTextField value={nickname}
                    onChange={handleNicknameChange}
                    placeholder='E.g. __gio__'
                    error={nickNameError}
                    onKeyPress={handleNicknameFieldKeyPress} />
                <PrimaryButton active={!nickNameError && nickNameError != null}
                    onClick={handleButtonClick}>Next</PrimaryButton>
            </AnimatedBox>


        </div>
    )
}

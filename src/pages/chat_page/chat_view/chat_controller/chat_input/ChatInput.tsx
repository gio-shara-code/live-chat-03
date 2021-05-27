import React, {useEffect, useRef} from "react"
import style from "./ChatInput.module.scss"

interface Props {
  onChange(e: any): void
  value: string
  onKeyPress(e: any): void
}

const chatInput: React.FC<Props> = ({onChange, onKeyPress, value}) => {
  const inputEl = useRef<HTMLInputElement>(null)

  const componentDidMount = () => {
    inputEl.current.focus()
    return () => {}
  }
  useEffect(componentDidMount, [])
  return (
    <input
      onKeyPress={onKeyPress}
      onChange={onChange}
      value={value}
      ref={inputEl}
      placeholder="Type..."
      className={style.ChatInput}
    ></input>
  )
}

export default chatInput

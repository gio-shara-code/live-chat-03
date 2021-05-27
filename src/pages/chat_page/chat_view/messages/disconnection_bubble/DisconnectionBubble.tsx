import React from "react"
import styles from "./DisconnectionBubble.module.scss"
interface Props {
  nickname: string
}
const disconnectionBubble: React.FC<Props> = ({nickname}) => {
  return <div className={styles.DisconnectionBubble}>{nickname} has been disconnected</div>
}

export default disconnectionBubble

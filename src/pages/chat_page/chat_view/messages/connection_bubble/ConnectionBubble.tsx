import React from "react"
import styles from "./ConnectionBubble.module.scss"
interface Props {
  nickname: string
}
const connectionBubble: React.FC<Props> = ({nickname}) => {
  return <div className={styles.ConnectionBubble}>{nickname} has been connected</div>
}

export default connectionBubble

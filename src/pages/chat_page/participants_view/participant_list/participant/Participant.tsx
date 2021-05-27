import React from "react"
import styles from "./Participant.module.scss"

interface Props {
  nickname: string
}
const participant: React.FC<Props> = ({nickname}) => {
  return <div className={styles.Participant}>{nickname}</div>
}

export default participant

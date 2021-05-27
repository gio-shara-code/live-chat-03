import React from "react"
import {dummyUsers} from "../../../../const"
import Participant from "./participant/Participant"
import styles from "./ParticipantList.module.scss"

const participantList = () => {
  return (
    <div className={styles.ParticipantList}>
      {dummyUsers.map((user) => (
        <Participant key={user.id} nickname={user.nickname} />
      ))}
    </div>
  )
}
export default participantList

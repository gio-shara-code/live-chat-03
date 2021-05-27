import React from "react"
import styles from "./ParticipantsView.module.scss"
import ParticipantList from "./participant_list/ParticipantList"

export default function ParticipantsView(props: {notVisible: boolean}) {
  let participantsStyle = [styles.ParticipantsView]

  if (props.notVisible) participantsStyle.push(styles.InVisible)

  return (
    <div className={participantsStyle.join(" ")}>
      <h3>Participant List</h3>
      <ParticipantList />
    </div>
  )
}

import React from "react";
import style from "./ParticipantsView.module.scss";

export default function ParticipantsView(props: { visible?: boolean }) {
  let participantsStyle = [style.ParticipantsView];
  if (props.visible) participantsStyle.push(style.Visible);
  return (
    <div className={participantsStyle.join(" ")}>
      <h3>Participant List</h3>
    </div>
  );
}

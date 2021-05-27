import React from "react"
import styles from "./ChatController.module.scss"

interface Props {
  children: any
}
const chatController: React.FC<Props> = ({children}) => {
  return (
    <div className={styles.ChatController}>
      {children}
      
    </div>
  )
}

export default chatController

import React from 'react'
import {IconContext} from 'react-icons'
import { FaPaperPlane } from 'react-icons/fa'

export default function SendButton() {
    return (
        <IconContext.Provider value={{ size: '3vw' }}>
            <FaPaperPlane/>
      </IconContext.Provider>
    )
}

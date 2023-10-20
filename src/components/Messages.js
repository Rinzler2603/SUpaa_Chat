import React from 'react'
import Message from './Message'

const Messages = () => {
  return (
    <div className='messages'>
        <Message owner={"owner"}/>
        <Message owner={""}/>
        <Message owner={"owner"}/>
        <Message owner={"owner"}/>
        <Message owner={""}/>
        <Message owner={""}/>
        <Message owner={"owner"}/>
        <Message owner={""}/>  
      
    </div>
  )
}

export default Messages

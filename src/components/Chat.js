import React from 'react'
import Messages from './Messages'
import Input from './Input'

const Chat = () => {
  return (
    <div className='chat'>
      <div className="chatinfo">
        <span>HArdy</span>
        <div className="chaticons">
          <i className="bi bi-camera-video-fill"></i>
          <i className="bi bi-person-fill-add"></i>
          <i className="bi bi-three-dots-vertical"></i>
        </div>
      </div>
      <Messages/>
      <Input/>
    </div>
  )
}

export default Chat

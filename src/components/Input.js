import React from 'react'

const input = () => {
  return (
    <div className='input'>
      <input type="text" placeholder='Type something here'/>
      <div className="send">
        <i class="bi bi-image-fill"></i>
        <input type="file" style={{display:"none"}} id="file"/>
        <label htmlFor="file">
          <i class="bi bi-paperclip"></i>
        </label>
        <button>Send</button>
      </div>
    </div>
  )
}

export default input

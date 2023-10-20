import React from 'react'

const Message = (props) => {

  const {owner} = props

  return (
    <div className={`message ${owner}`}>
      <div className="messageinfo">
        <img src="https://img.freepik.com/premium-photo/young-man-is-holding-book-smiling_905085-17.jpg" alt="" />
        <span>just now</span>
      </div>
      <div className="messagecontent">
        <p>hello brother</p>
        <img src="https://img.freepik.com/premium-photo/young-man-is-holding-book-smiling_905085-17.jpg" alt="" />
      </div>
    </div>
  )
}

export default Message

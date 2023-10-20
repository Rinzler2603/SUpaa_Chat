import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className="logo">SUpaa Chat</span>
      <div className="user">
        <img src="https://img.freepik.com/premium-photo/young-man-is-holding-book-smiling_905085-17.jpg" alt="" />
        <span>Hardy</span>
        <button>Logout</button>
        
      </div>
    </div>
  )
}

export default Navbar

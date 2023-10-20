import React from 'react'
import add from '../img/addAvatar.png'

const Register = () => {
  return (
    <div className='formCont'>
      <div className="formWrap">
        <span className="logo">SUpaa Chat</span>
        <span className="title">Sign Up</span>
        <form action="">
            <input type="text" placeholder='Name'/>
            <input type="email" placeholder='Email'/>
            <input type="password" placeholder='Password'/>
            <label htmlFor="avatar">
                <img src={add} alt="" />
                <span>Add Your Avatar </span>
            </label>
            <input type="file" id='avatar' style={{display:"none"}}/>
            <button>Sign Up</button>
        </form>
        <p>Already have an account?<a href="">Login</a></p>
      </div>
    </div>
  )
}

export default Register

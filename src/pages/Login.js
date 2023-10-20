import React from 'react'

const Login = () => {
  return (
    <div className='formCont'>
      <div className="formWrap">
        <span className="logo">SUpaa Chat</span>
        <span className="title">Log In</span>
        <form action="">
            <input type="email" placeholder='Email'/>
            <input type="password" placeholder='Password'/>
            
            <button>Log In</button>
        </form>
        <p>Dont have an account?<a href="">Sign Up</a></p>
      </div>
    </div>
  )
}

export default Login

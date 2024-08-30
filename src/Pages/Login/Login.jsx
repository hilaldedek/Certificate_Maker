import React from 'react'
import "../Login/Login.css"

const Login = () => {
  return (
    <div className='main'>
    <form className="form">
    <div className="title">
      Welcome,
    </div>
    <input type="email" placeholder="Email" name="email" className="input" />
    <input
      type="password"
      placeholder="Password"
      name="password"
      className="input"
    />
    <h5 className='title fs-6'>
    If you don't have an account, <a href="/register" className='title text-decoration-none'>Register</a>
    </h5>
    <button className="button-confirm">Let`s go →</button>
  </form>
    </div>
  )
}

export default Login
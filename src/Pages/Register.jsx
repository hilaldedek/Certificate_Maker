import React from 'react'

const Register = () => {
    return (
        <div className='main'>
        <form className="form">
        <div className="title">
          Welcome to us,
        </div>
        <input type="text" placeholder="Username" name="username" className="input" />
        <input type="email" placeholder="Email" name="email" className="input" />
        <input
          type="password"
          placeholder="Password"
          name="password"
          className="input"
        />
        <button className="button-confirm">Register →</button>
      </form>
        </div>
      )
}

export default Register
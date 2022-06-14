import React from 'react'

function SignupInfo() {
  return (
    <>
      <div className='header'>
        <h1>Sign Up</h1>
      </div>
      <div className='body'>
        <div className='sign-up-container'>
          <input type="email" placeholder="Email ..." />
          <input type="password" placeholder="Password ..." />
          <input type="password" placeholder="Confirm password ..." />
        </div>
      </div>
    </>
  )
}

export default SignupInfo
import React from 'react'

function SignupInfo({formData, UpdateFormData}) {
  return (
    <>
      <div className='header'>
        <h1>Sign Up</h1>
      </div>
      <div className='body'>
        <div className='sign-up-container'>
          <input type="email" placeholder="Email ..." value={formData.email} onChange={(e) => {UpdateFormData({email: e.target.value})}} />
          <input type="password" placeholder="Password ..." value={formData.password} onChange={(e) => {UpdateFormData({password: e.target.value})}}  />
          <input type="password" placeholder="Confirm password ..." value={formData.confirmPassword} onChange={(e) => {UpdateFormData({confirmPassword: e.target.value})}}  />
        </div>
      </div>
    </>
  )
}

export default SignupInfo
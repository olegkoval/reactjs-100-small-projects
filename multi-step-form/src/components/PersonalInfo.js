import React from 'react'

function PersonalInfo() {
  return (
    <>
      <div className='header'>
        <h1>Personal Info</h1>
      </div>
      <div className='body'>
        <div className='personal-info-container'>
          <input type="text" placeholder='First name ...' />
          <input type="text" placeholder='Last name ...' />
          <input type="text" placeholder='Username ...' />
        </div>
      </div>
    </>
  )
}

export default PersonalInfo
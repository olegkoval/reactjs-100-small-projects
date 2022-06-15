import React from 'react'

function PersonalInfo({formData, UpdateFormData}) {
  return (
    <>
      <div className='header'>
        <h1>Personal Info</h1>
      </div>
      <div className='body'>
        <div className='personal-info-container'>
          <input type="text" placeholder='First name ...' value={formData.firstName} onChange={(e) => {UpdateFormData({firstName: e.target.value})}} />
          <input type="text" placeholder='Last name ...' value={formData.lastName} onChange={(e) => {UpdateFormData({lastName: e.target.value})}} />
          <input type="text" placeholder='Username ...' value={formData.username} onChange={(e) => {UpdateFormData({username: e.target.value})}} />
        </div>
      </div>
    </>
  )
}

export default PersonalInfo
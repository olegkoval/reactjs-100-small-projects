import React from 'react'

function OtherInfo({formData, UpdateFormData}) {
  return (
    <>
      <div className='header'>
        <h1>Other Info</h1>
      </div>
      <div className='body'>
        <div className='other-info-container'>
          <input type="text" placeholder='Nationality ...' value={formData.nationality} onChange={(e) => {UpdateFormData({nationality: e.target.value})}} />
          <input type="text" placeholder='Other ...' value={formData.other} onChange={(e) => {UpdateFormData({other: e.target.value})}} />
        </div>
      </div>
    </>
  )
}

export default OtherInfo
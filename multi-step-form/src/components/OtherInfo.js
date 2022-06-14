import React from 'react'

function OtherInfo() {
  return (
    <>
      <div className='header'>
        <h1>Other Info</h1>
      </div>
      <div className='body'>
        <div className='other-info-container'>
          <input type="text" placeholder='Nationality ...' />
          <input type="text" placeholder='Other ...' />
        </div>
      </div>
    </>
  )
}

export default OtherInfo
import React from 'react'

function Form() {
  return (
    <div className='multistep-form'>
        <div className='progress-bar'></div>
        <div className='form-container'>
            <div className='header'></div>
            <div className='body'></div>
            <div className='footer'>
                <button>Prev</button>
                <button>Next</button>
            </div>
        </div>
    </div>
  )
}

export default Form;
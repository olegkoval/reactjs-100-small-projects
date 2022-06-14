import React, {useState} from 'react'
import SignupInfo from './SignupInfo'
import PersonalInfo from './PersonalInfo'
import OtherInfo from './OtherInfo'

function Form() {
  const [page, setPage] = useState(0);
  const Pages = [<SignupInfo />, <PersonalInfo />, <OtherInfo />];
  const maxPageNum = Pages.length - 1;

  const PrevPage = () => {
    if ((page - 1) >= 0) setPage(page - 1);
  }

  const NextPage = () => {
    if ((page + 1) <= maxPageNum) setPage(page + 1);
  }

  return (
    <div className='form'>
        <div className='progress-bar'></div>
        <div className='form-container'>
            {Pages[page]}
            <div className='footer'>
                <button
                  disabled = {page === 0}
                  onClick={PrevPage}>Prev</button>
                <button
                  disabled = {page === maxPageNum}
                  onClick={NextPage}>Next</button>
            </div>
        </div>
    </div>
  )
}

export default Form;
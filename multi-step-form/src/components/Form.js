import React, {useCallback, useState} from 'react'
import SignupInfo from './SignupInfo'
import PersonalInfo from './PersonalInfo'
import OtherInfo from './OtherInfo'

const defaultFormData = {
  email: '',
  password: '',
  confirmPassword: '',
  firstName: '',
  lastName: '',
  username: '',
  nationality: '',
  other: '',
}

function Form() {
  const STEP_PROGRESS_PERCENTAGE = 33.3;
  const PERCENTAGE_ROUND_TO_100 = 0.01;

  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState(defaultFormData);

  const PrevPage = () => {
    if ((page - 1) >= 0) setPage(page - 1);
  }

  const NextPage = () => {
    if ((page + 1) <= maxPageNum) setPage(page + 1);
  }

  const getStepProgressBarWidth = useCallback(() => {
    return (page * STEP_PROGRESS_PERCENTAGE + STEP_PROGRESS_PERCENTAGE + PERCENTAGE_ROUND_TO_100) + '%';
  }, [page])

  const UpdateFormData = (newData) => {
    console.log({...formData, ...newData});
    setFormData({...formData, ...newData});
  }

  const Pages = [
    <SignupInfo formData={formData} UpdateFormData={UpdateFormData} />,
    <PersonalInfo formData={formData} UpdateFormData={UpdateFormData} />,
    <OtherInfo formData={formData} UpdateFormData={UpdateFormData} />
  ];
  const maxPageNum = Pages.length - 1;

  return (
    <div className='form'>
        <div className='progressbar'>
          <div style={{width: getStepProgressBarWidth()}}></div>
        </div>
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
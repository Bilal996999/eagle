import React, { useState } from 'react'
import styles from './getPhone.module.css'
import { useDispatch } from 'react-redux';
import { updateCurrentView, updatePayload, updatePersonalView, updateProgressBarValue } from '../../store/formSlice';
import { FaArrowLeft } from 'react-icons/fa6';
export const GetPhone = () => {
    const dispatch = useDispatch();
    const [phone, setPhone] = useState('');
    const handleForm = (e)=>{
        e.preventDefault();
        dispatch(updateProgressBarValue(80));
        dispatch(updatePayload({phone:phone}))
        dispatch(updatePersonalView("comment"))
    }
    const handleBack = () => {
        dispatch(updateProgressBarValue(40));
        dispatch(updatePersonalView('email'));
    }
  return (
    <>
    <div className='p-4'>
                <FaArrowLeft style={{ cursor: "pointer" }} onClick={handleBack} />
            </div>
    
    <div className={`${styles.container} d-flex justify-content-center align-items-center text-center`}>
            <div className={`${styles.content}`}>
                <h4>What's the best phone number to contact you?</h4>
                <form onSubmit={handleForm} className={`${styles.form_container} mt-4`}>
                    <input name='phone' value={phone} onChange={(e)=> setPhone(e.target.value)} type="text" placeholder='Enter your phone number' required/>
                    <br />
                    <input type="checkbox" name="" id="" /> <span>I'd like to receive text messages about my trip</span>
                    <br />
                    <input type="submit" value="Next" className={`${styles.btn} mt-3`} />
                </form>
            </div>
        </div>
        </>
  )
}

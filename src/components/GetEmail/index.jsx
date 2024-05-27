import React, { useState } from 'react'
import styles from './getEmail.module.css'
import { useDispatch } from 'react-redux'
import { updateCurrentView, updatePayload, updatePersonalView, updateProgressBarValue } from '../../store/formSlice';
import { FaArrowLeft } from 'react-icons/fa6';
export const GetEmail = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const handleForm = (e) => {
        e.preventDefault();
        dispatch(updateProgressBarValue(60));
        dispatch(updatePayload({email: email}))
        dispatch(updatePersonalView("phone"))
    }
    const handleBack = () => {
        dispatch(updateProgressBarValue(20));
        dispatch(updatePersonalView('license-form'));
    }
    return (
        <>
            <div className='p-4'>
                <FaArrowLeft style={{ cursor: "pointer" }} onClick={handleBack} />
            </div>
            <div className={`${styles.container} d-flex justify-content-center align-items-center text-center`}>
                <div className={`${styles.content}`}>
                    <h4>What's the best email address to contact you?</h4>
                    <form onSubmit={handleForm} className={`${styles.form_container} mt-4`}>
                        <input name='email' value={email} type="email" placeholder='Enter your email address' onChange={(e)=> setEmail(e.target.value)} required/>
                        <br />
                        <input type="submit" value="Next" className={`${styles.btn} mt-3`} />
                    </form>
                </div>
            </div>
        </>
    )
}

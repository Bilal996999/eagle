import React, { useEffect } from 'react'
import styles from './paymentSuccess.module.css'
import successTick from '../../assets/successTick.png'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updatePersonalView } from '../../store/formSlice';

export const PaymentSuccess = () => {
    const navigate = useNavigate();
    const disptach = useDispatch();
    useEffect(()=>{
        const interval = setTimeout(() => {
          disptach(updatePersonalView("license"))
          navigate("/")
        }, 5000);
        
        return () => {clearInterval(interval);} 
      },[])
      const handleClick = ()=>{
      disptach(updatePersonalView("license"))
      navigate("/");
    }
  return (
    <>
        <div className={`${styles.container}`}>
            <div className={`${styles.success_container} text-center`}>
                <img src={successTick} width={150} className='img-fluid' alt="" />
                <h3 className='mt-4'>Thank You!</h3>
                <h6 className='mb-4'>Payment Done Successfully</h6>
                <span style={{fontSize: "14px"}}>You will be redirected to the home page shortly or click here to return to home page</span>
                <button onClick={handleClick}  className='mt-4'>Home</button>
            </div>
        </div>
    </>
  )
}

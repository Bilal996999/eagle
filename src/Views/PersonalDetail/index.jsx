import React, { useEffect } from 'react'
import styles from './personalDetail.module.css'
import { BookingProgressBar } from '../../components/BookingProgressBar'
import { useSelector } from 'react-redux'
import { GetLicense } from '../../components/GetLicense'
import { LicenseForm } from '../../components/LicenseForm'
import { GetEmail } from '../../components/GetEmail'
import { GetPhone } from '../../components/GetPhone'
import { GetComment } from '../../components/GetComment'
import { Payment } from '../../components/Payment'
import { current } from '@reduxjs/toolkit'
import { useNavigate } from 'react-router-dom'
import { PaymentSuccess } from '../PaymentSuccess'

export const PersonalDetail = () => {
    const formData = useSelector(state=> state.form.payload)
    const currentView = useSelector(state=> state.form.personalView)
    const progressBarValue = useSelector(state => state.form.progressBarValue)
    const navigate = useNavigate();
    useEffect(()=>{
        if(currentView == "complete"){
            navigate("/")
        }
        if(!formData?.vehicle){
            navigate("/reserve")
        }
    },[])
    const renderView = ()=>{
        switch(currentView){
            case "license":
                return <GetLicense/>;
            case "license-form":
                return <LicenseForm/>;
            case "email":
                return <GetEmail />;
            case "phone":
                return <GetPhone />;
            case "comment":
                return <GetComment />;
            case "payment":
                return <Payment />;
            // case "payment-success":
            //     return <PaymentSuccess />;
            default:
                return null;
        }
    }
  return (
    <>
        <BookingProgressBar progressBarValue={progressBarValue} />
        <div className={`${styles.container}`}>
            {renderView()}
        </div>
    </>
  )
}

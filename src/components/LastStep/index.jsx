import React, { useEffect, useState } from 'react'
import styles from "./lastStep.module.css"
import { IoAddCircleOutline } from "react-icons/io5";
import { GrSubtractCircle } from "react-icons/gr";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateCurrentView, updatePayload, updateProgressBarValue } from '../../store/formSlice';

export const LastStep = () => {
    const [count, setCount] = useState(0);
    const [promoCode, setPromoCode] = useState('');
    const dispatch = useDispatch();
    const navigation = useNavigate();
    const handleQuote = ()=> {
        const addtional = {count, promoCode};
        
        dispatch(updatePayload({addtional}));
        dispatch(updateCurrentView("complete"))
        navigation('/reserve-detail')
        
    }
    useEffect(()=>{
        dispatch(updateProgressBarValue(100))
    },[])
    return (
        <>
            <div className={`${styles.container} mt-5`}>
                <h2 className='text-center pt-5'>Last step before we get your quote...</h2>
            </div>

            <div className="container">
                <div className={`border mt-5 p-4 d-flex justify-content-center align-items-center flex-wrap justify-content-md-between ${styles.card_container}`}>
                    <div>
                        <h5 className='mb-0'>Add an additional driver</h5>
                        <span>Just $20 per additional driver - a one-time fee for your entire rental period.</span>
                    </div>
                    <div>
                        <GrSubtractCircle onClick={() => setCount(prev => (count == 0) ? prev : prev - 1)} style={{ cursor: "pointer", fontSize: "24px", color: "grey" }} />
                        &nbsp;  {count} &nbsp;
                        <IoAddCircleOutline onClick={() => setCount(prev => prev + 1)} style={{ cursor: "pointer", fontSize: "26px", color: "" }} />
                    </div>
                </div>
                <div className={`border p-4 mt-4 d-flex justify-content-center align-items-center flex-wrap justify-content-md-between ${styles.card_container}`}>
                    <div>
                        <h5 className='mb-0'>Add promo code</h5>
                        <span>Got a promo code? Apply it now to save on your quote!</span>
                    </div>
                    <div>
                       <input type="text" placeholder='Enter code here' name="promoCode" value={promoCode} onChange={(e)=>setPromoCode(e.target.value)} />
                    </div>
                </div>

                <div className='text-center mt-4'>
                    <button onClick={handleQuote} className={`${styles.btn} px-3 py-2`}>Get Quote!</button>
                </div>
            </div>

        </>
    )
}

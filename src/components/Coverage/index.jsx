import React, { useEffect } from 'react'
import styles from "./coverage.module.css"
import { AgeCard } from '../AgeCard'
import { useDispatch } from 'react-redux'
import { updateCurrentView, updatePayload, updateProgressBarValue } from '../../store/formSlice'
export const Coverage = () => {
    const dispatch = useDispatch();
    const data = [
        {
            age: "Super Cheap Inclusive Coverage",
            text: "Insurance options available at office for international customers' Local US customers must call office if does not have personal auto insurance.",
            card: false            
        },
        {
            age: "Renter Provided Full Coverage Insurance",
            text: "Drivers must provide proof of full insurance. Collision deductible amount will be held on your credit card",
            card: false
        },
    ]
    const handleCard = (value) => {
        console.log("value user age-->", value);
        dispatch(updatePayload({coverage: value}))
        dispatch(updateCurrentView("vehicle"))
    }
    useEffect(()=>{
        dispatch(updateProgressBarValue(60))
    },[])
    return (
        <>

            <div className={`${styles.container} mt-5 pt-3`}>
                <h2 className='text-center my-5'>What coverage suits you best?</h2>

                <div className={`${styles.card_container} d-flex justify-content-center`}>
                    <div className='mx-3 container'>
                        <div className="row">
                            {
                                data.map((item, key) => (
                                    <>
                                        <div className="col-lg-6 mt-4 mt-lg-0">
                                            <AgeCard method={handleCard} data={item} key={key} />
                                        </div>
                                    </>
                                ))
                            }
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

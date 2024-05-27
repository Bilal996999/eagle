import React, { useEffect } from 'react'
import styles from "./getAge.module.css"
import { AgeCard } from '../AgeCard'
import { useDispatch } from 'react-redux'
import { updateCurrentView, updatePayload, updateProgressBarValue } from '../../store/formSlice'
export const GetAge = () => {
    const dispatch = useDispatch();
    const data = [
        {
            age: "25+",
            //text: "Full access to our vehicle selection without any hidden fees",
            text: "",
            card: true
        },
        {
            age: "21-24 years old",
            //text: "Full access to our vehicle selection without any young driver or hidden fees",
            text: "",
            card: true
        },
        // {
        //     age: "19-20 years old",
        //     text: "Drivers must provide proof of full insurance. Collision deductible amount will be held on your credit card"
        // }
    ]
    const handleAgeCard = (value) => {
        console.log("value user age-->", value);
        dispatch(updatePayload({ageDetail: value}))
        dispatch(updateCurrentView("coverage"))
    }
    useEffect(() => {
        dispatch(updateProgressBarValue(40))
    }, [])
    return (
        <>
            <div className={`${styles.container} mt-5 pt-3`}>
                <h2 className='text-center my-5'>How old is the driver?</h2>

                <div className={`${styles.card_container} d-flex justify-content-center`}>
                    <div className='mx-3 container'>
                        <div className="row">
                            {
                                data.map((item, key) => {
                                    return <div className='col-lg-6 mt-4 mt-lg-0'> <AgeCard method={handleAgeCard} data={item} key={key} />
                                    

                                     </div>
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

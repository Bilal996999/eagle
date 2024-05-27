import React from 'react'
import styles from "./carPkgCard.module.css"

import icon1 from "../../assets/fIcon1.png"
import icon2 from "../../assets/fIcon2.png"
import icon3 from "../../assets/fIcon3.png"
import icon4 from "../../assets/fIcon4.png"
import { FaArrowRight } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom'

export const CarPkgCard = ({data,method}) => {

    console.log(data)
   const navigate = useNavigate();
    return (
        <>
            <div className={`${styles.card_container} border`}>
                <div className={`${styles.img_container}`}>
                    <img src={data.image} alt="" />
                </div>

                <div className={`${styles.content_container} py-2 px-4`}>
                    <h5 className='mt-2'>{data.title}</h5>
                    <p className='my-0'>{data.description}</p>
                    <span><b>{data.dayCharges}</b> / Day</span>
                    <br />
                    <span><b>{data.weekCharges}</b> / WK</span>

                    <div className={`${styles.features} pt-3 d-flex justify-content-between border-top`}>
                        <div className=''>
                            
                                <img src={icon1} alt="" />
                                <span>&nbsp;&nbsp;{data && data?.seat} Seats</span>
                                <br />
                                <img src={icon4} alt="" />
                                <span>&nbsp;&nbsp;Automatic</span>
                        </div>
                        <div className=''>
                          
                                <img src={icon3} alt="" />
                                <span>&nbsp;&nbsp;{data && data?.door} Doors</span>
                                <br />
                                <img src={icon2} alt="" />
                                <span>&nbsp;&nbsp;Petrol</span>
                        </div>
                    </div>

                    <button onClick={()=> method ? method(data) : navigate("/reserve") } className={`${styles.btn} my-3`}>
                        BOOK NOW
                        <br />
                        <FaArrowRight />
                    </button>
                
                </div>
            </div>
        </>
    )
}

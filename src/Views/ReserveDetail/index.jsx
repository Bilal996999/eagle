import React, { useEffect } from 'react'
import styles from './reserveDetail.module.css'
import { BookingProgressBar } from '../../components/BookingProgressBar'
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateCurrentView, updatePersonalView } from '../../store/formSlice';
export const ReserveDetail = () => {
    const formData = useSelector(state => state.form.payload)
    const dispatch = useDispatch();
    console.log(formData)
    const navigation = useNavigate();
    const handleBack = () => {
        navigation("/reserve");
        dispatch(updateCurrentView("last"))
    }
    const handleForm = () => {
        // dispatch(updatePersonalView('license'))
        navigation('/user-detail')
    }
    useEffect(() => {
        if (!formData?.vehicle) {
            navigation("/reserve")
        }
    }, [])
    return (
        <>
            <BookingProgressBar />
            <div className="container-fluid">
                <div className='p-3'>
                    <FaArrowLeft onClick={handleBack} />
                </div>
                <div className="row">
                    <div className="col-lg-5 order-1 p-3">
                        <div className={`${styles.card_main_container} mt-5 border-end d-flex justify-content-center`}>
                            <div className={`${styles.card_container} border pt-4`}>
                                <div className={`${styles.data_time} px-4 pb-4`}>
                                    <h5>Dates & Times</h5>
                                    {/* <p>Pick-up: <span>Thu, Feb 22, 2024 @ 12:00 PM</span> </p> */}
                                    <p>Pick-up: <span> {formData?.duration?.pickupDate} @ {formData?.duration?.pickupTime}</span> </p>
                                    <p>Return: <span> {formData?.duration?.dropoffDate} @  {formData?.duration?.dropoffTime}</span> </p>
                                </div>

                                <div className={`${styles.return_location} px-4 pb-4`}>
                                    <h5>Pick-up & Return Location</h5>
                                    <p>Eagle Car Rental {formData?.duration?.location}</p>
                                    <span>1123 car rental</span>
                                    <span>Lennox, CA 90324</span>
                                    <span>(424) 331-5040</span>
                                </div>

                                <div className={`${styles.coverage} px-4 pb-4`}>
                                    <h5>Coverage</h5>
                                    <p>{formData?.coverage}</p>
                                    <span>Drivers must provide proof of full insurance. Collision
                                        deductible amount will be held on your credit card
                                    </span>
                                </div>

                                <div className={`${styles.Additional_details} px-4 pb-4`}>
                                    <h5>Additional Detail</h5>
                                    <p><b>Renter Age:</b> {formData?.age}</p>
                                </div>

                                <div className={`${styles.travel_car} px-4`}>
                                    <h5>Travel Car</h5>
                                    <div className='d-flex justify-content-between'>
                                        <div className='flex-grow-1'>
                                            <p className='mb-0'>{formData?.vehicle?.title}</p>
                                            <span className={`${styles.car_detail}`}>{formData?.vehicle?.description}</span>
                                        </div>

                                        <div className={`flex-grow-1 ${styles.img_container}`}>
                                            <img className='img-fluid' src={formData?.vehicle?.image} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className={`${styles.price} px-4 pt-4`}>
                                    <ul>
                                        <li><span>6 Days @ {formData?.vehicle?.dayCharges}/day</span> <span>{formData?.vehicle?.weekCharges}</span></li>
                                        <li><span>Unlimited Mileage in CA, NV, AZ, UT, OR</span> <span>Included</span></li>
                                        {/* <li><span>Tax</span> <span>Included</span></li> */}

                                        <li><span><b>Total</b></span> <span><b>{formData?.vehicle?.weekCharges}</b></span></li>
                                    </ul>
                                </div>
                                <div className={`${styles.btn_container} pt-4`}>
                                    <button onClick={handleForm}>Reserve Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 order-0 order-lg-1 d-flex justify-content-center align-items-center">
                        <div className={`${styles.review_container} text-center`}>
                            <span>HIT THE ROAD WITH CONFIDENCE</span>
                            <h2>Lowest Price Guaranteed!</h2>
                            <p className='pt-3'>
                                This quote qualifies for our Super Cheap lowest price guarantee. We guarantee you will not be able to find a lower price for your trip!</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

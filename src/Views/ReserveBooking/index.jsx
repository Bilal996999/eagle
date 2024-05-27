import React, { useEffect, useState } from 'react'
import styles from "./reserveBooking.module.css"
import { BookingProgressBar } from '../../components/BookingProgressBar'
import { ReserveTabNav } from '../../components/ReserveTabNav'
import { useDispatch, useSelector } from 'react-redux'
import { BannerForm } from '../../components/BannerForm'
import { GetAge } from '../../components/GetAge'
import { Coverage } from '../../components/Coverage'
import { Vehicle } from '../../components/Vehicle'
import { LastStep } from '../../components/LastStep'
import { useNavigate } from 'react-router-dom'
import { updateCurrentView } from '../../store/formSlice'
export const ReserveBooking = () => {
    const payload = useSelector(state => state.form.payload);
    const dispatch = useDispatch();
    console.log("nav payload check --> ", payload)
    const currentView = useSelector(state => state.form.currentView);
    const progressBarValue = useSelector(state => state.form.progressBarValue);
    // const [currentValue, setCurrentValue] = useState(value)

    const [render, setRender] = useState(0);
    const navigate = useNavigate();
    useEffect(() => {
        if (currentView == "complete") {
            navigate("/reserve-detail")
        }
        setRender(Math.random());

    }, [currentView])

    const handleCheck = (view)=>{
        dispatch(updateCurrentView(view));
    }
    const renderView = () => {
        switch (currentView) {
            case "duration":
                return <div className={`${styles.banner_form_container}`}> <div className='pt-5 mt-5'> <BannerForm /></div></div>
            case "age":
                return <GetAge />
            case "coverage":
                return <Coverage />
            case "vehicle":
                return <Vehicle />
            case "last":
                return <LastStep />
            default:
                return null;
        }
    }

    console.log("currentView -- >",currentView)
    return (
        <>

            <BookingProgressBar progressBarValue={progressBarValue} />

            <div className={`${styles.container} d-flex justify-content-around pt-3 pb-4`}>
                
                    <div className={`${styles.inner_container} d-flex`}>
                        <div className='me-1'>
                            <input type="checkbox" name="" value="" checked={([ "age" , "coverage" ,"vehicle" , "last"].includes(currentView)) ? true :false} onClick={()=> ([ "age" , "coverage" ,"vehicle" , "last"].includes(currentView)) ? handleCheck("duration"): ""} readOnly />
                        </div>
                        <div>
                            <h6>Pickup</h6>
                            <span>{payload?.duration?.location} </span>
                            <span>{payload?.duration?.pickupDate} @ {payload?.duration?.pickupTime}</span>
                        </div>
                    </div>
                    <div className={`${styles.inner_container} d-flex`}>
                        <div className='me-1'>
                            <input type="checkbox" name="" value="" checked={([ "age" , "coverage" ,"vehicle" , "last"].includes(currentView)) ? true :false} onClick={()=> ([ "age" , "coverage" ,"vehicle" , "last"].includes(currentView)) ? handleCheck("duration"): ""} readOnly />
                        </div>
                        <div>
                            <h6>Return</h6>
                            <span>{payload?.duration?.location}</span>
                            <span>{payload?.duration?.dropoffDate} @ {payload?.duration?.dropoffTime}</span>
                        </div>
                    </div>
                    <div className={`${styles.inner_container} d-flex`}>
                        <div className='me-1'>
                            <input type="checkbox" name="" value=""  checked={([ "coverage" ,"vehicle" , "last"].includes(currentView)) ? true :false} onClick={()=>([ "coverage" ,"vehicle" , "last"].includes(currentView)) ? handleCheck("age"): ""} readOnly />
                        </div>
                        <div>
                            <h6>Age</h6>
                            <span>{payload?.ageDetail?.age}</span>
                        </div>
                    </div>
                    <div className={`${styles.inner_container} d-flex`}>
                        <div className='me-1'>
                            <input type="checkbox" name="" value=""  checked={([ "vehicle" , "last"].includes(currentView)) ? true :false} onClick={()=>([ "vehicle" , "last"].includes(currentView))  ? handleCheck("coverage") :"" } readOnly />
                        </div>
                        <div>
                            <h6>Coverage</h6>
                            <span>{payload?.coverage}</span>
                        </div>
                    </div>
                    <div className={`${styles.inner_container} d-flex`}>
                        <div className='me-1'>
                            <input type="checkbox" name="" value="" checked={(["last"].includes(currentView)) ? true :false} onClick={()=> (["last"].includes(currentView))?handleCheck("vehicle"):""} readOnly />
                        </div>
                        <div>
                            <h6>Vehicle</h6>
                            <span>{payload?.vehicle?.title}</span>
                            
                        </div>
                    </div>
            </div>
            <div>
                {renderView()}
            </div>

        </>
    )
}

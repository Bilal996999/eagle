import React, { useEffect, useState } from 'react'
import styles from "./bannerForm.module.css"
import { InputLabel } from '../InputLabel'
import { ButtonPrimary } from '../ButtonPrimary'
import { useDispatch, useSelector } from 'react-redux'
import { updateCurrentView, updatePayload, updateProgressBarValue } from '../../store/formSlice'
import { useNavigate } from 'react-router-dom'
// import beniIcon1 from '../../assets/beniIcon1.pmg'
import icon from '../../assets/beniIcon1.png'
import { SectionTitle } from '../SectionTitle'
import OurLocation from '../OurLocation'

export const BannerForm = () => {

  const today = new Date();
  const month = today.getMonth()+1;
  const year = today.getFullYear();
  const date = today. getDate();
  const currentDate =  year + "-" + "0"+month + "-" + date;
  console.log(currentDate)

  const data = useSelector(state => state.form.data);
  const payload = useSelector(state => state.form.payload);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [duration, setDuration] = useState({
    location: "",
    pickupDate: "",
    pickupTime: "",
    dropoffDate: "",
    dropoffTime: "",
  })
  const handleInput = (e) => {
    setDuration({ ...duration, [e.target.name]: e.target.value });
    console.log("duration", duration)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (window.location.pathname == "/") {
      dispatch(updatePayload({ duration: duration }))
      dispatch(updateCurrentView("age"))
      navigate("/reserve")
      // console.log("if")
    } else {
      dispatch(updatePayload({ duration: duration }))
      dispatch(updateCurrentView("age"))
      // console.log("else")
    }
    console.log(duration)
  }
  useEffect(() => {
    console.log("--> data -->", data)
    dispatch(updateProgressBarValue(0))
  }, [])
  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <div
          data-aos="fade-up"
          // data-aos-easing="ease-in-sine"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-duration="1000"
          className={`${styles.container} py-4 py-md-2 px-5 container d-flex flex-wrap justify-content-around  justify-content-md-between align-items-center`}>
          <div className={`${styles.input_container}`}>
            <InputLabel>Pickup Location</InputLabel>
            {/* <input name='phone' type="text" value={duration.phone} onChange={handleInput} placeholder='Phone Number' required /> */}
            <select name="location" value={duration.location} onChange={handleInput} required>
              <option value='' selected disabled>Select</option>
              {/* <option value="San Francisco">SFO</option>
              <option value="Lax">LAX</option> */}
              <option value="Los Angeles">LOS ANGELES</option>
              <option value="Las Vegas">LAS VEGAS</option>
              <option value="Orlando">ORLANDO</option>
            </select>
          </div>
          <div className={`${styles.input_container}`}>
            <InputLabel>Pickup Date</InputLabel>
            <input type="date" value={duration.pickupDate} name='pickupDate' min={currentDate} onChange={handleInput} placeholder='Phone Number' required />
          </div>
          <div className={`${styles.input_container}`}>
            <InputLabel>Pickup Time</InputLabel>
            <input type="time" value={duration.pickupTime} name='pickupTime' onChange={handleInput} placeholder='Phone Number' required />
          </div>
          <div className={`${styles.input_container}`}>
            <InputLabel>Dropoff Date</InputLabel>
            <input type="date" value={duration.dropoffDate} name='dropoffDate' min={duration.pickupDate} onChange={handleInput} placeholder='Phone Number' required />
          </div>
          <div className={`${styles.input_container}`}>
            <InputLabel>Dropoff Time</InputLabel>
            <input type="time" value={duration.dropoffTime} name='dropoffTime' onChange={handleInput} placeholder='Phone Number' required />
          </div>
          <div className={`${styles.input_container}`}>
            <InputLabel>Dropoff Location</InputLabel>
            <select name="location" value={duration.location} onChange={handleInput} required>
              <option value='' selected disabled>Select</option>
              {/* <option value="San Francisco">SFO</option>
              <option value="Lax">LAX</option> */}
              <option value="Los Angeles">LOS ANGELES</option>
              <option value="Las Vegas">LAS VEGAS</option>
              <option value="Orlando">ORLANDO</option>
            </select>
          </div>

          <div className='mt-4'>
            {/* <ButtonPrimary>Book Now</ButtonPrimary> */}
            <input type="submit" value="Book Now" className={`${styles.button}`} />
          </div>
        <div className='bi-importantNote'>
          <p>*Drop off location will always be the same as pick up location, if dropping off the car any where else then a different location drop off fee will be charged and the cost may various from location to location</p>
        </div>
        </div>
        <OurLocation/>
      </form>
    </>
  )
}

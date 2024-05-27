import React from 'react'
import styles from "./mobNav.module.css"
import rightArrow from "../../assets/rightArrow.png"
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-router-dom';

export const MobNav = ({ setToggle }) => {
  return (
    <>
      <div className={`${styles.container} d-flex justify-content-center align-items-center`}>
        <div onClick={() => setToggle(false)} className={`${styles.cancel_container}`}><RxCross2 className={`${styles.cancel_icon}`} /></div>
        <ul>
          <li> <Link to="/"> <img src={rightArrow} alt="" /> Home</Link></li>
          <li> <Link to="/reserve"> <img src={rightArrow} alt="" /> Reserve & Booking</Link></li>
          <li> <Link to="/services"> <img src={rightArrow} alt="" /> Location & Cars / Services</Link></li>
          <li> <Link to="/car-sale"> <img src={rightArrow} alt="" /> Car Sale</Link></li>
          <li> <Link to="/contact-us"> <img src={rightArrow} alt="" /> Contact Us</Link></li>
        </ul>
      </div>
    </>
  )
}

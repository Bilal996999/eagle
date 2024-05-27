import React from 'react'
import 'aos/dist/aos.css';
import styles from "./sectionTitle.module.css"
import icon from "../../assets/carIcon.png"
export const SectionTitle = ({children}) => {
  return (
    <>
        <div className={`${styles.container}`}>
            <img data-aos="fade-down" src={icon} alt="" /><br />
            <span className='text-danger'>{children}</span>
        </div>
    </>
  )
}

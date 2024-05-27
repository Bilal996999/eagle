import React from 'react'
import styles from './benHead.module.css';


const BenifitsHeading = ({iconImg , head , subHead , para}) => {
    return (
        <>
            <div className={`${styles.beni_head_sec}`}>
                <div className={`${styles.widget_icon}`}>
                    <img src={iconImg} alt="" />
                </div>
                <div className={`${styles.beni_heading_sec}`}>
                    <h4>{head}</h4>
                    <h1>{subHead}</h1>
                    <p>{para}</p>
                </div>

            </div>
        </>
    )
}

export default BenifitsHeading

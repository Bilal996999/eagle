import React from 'react'
import styles from "./reserveTab.module.css"
export const ReserveTabNav = ({ item }) => {
    return (
        <>
            <div className={`${styles.container} d-flex`}>
                <div className='me-1'>
                    <input type="checkbox" name="" value="" checked={item.value && true} readOnly />
                </div>
                <div>
                    <h6>{item.key}</h6>
                    <span>San Fransisco (SFO) </span>
                    <span>Thu Feb 22, 2024 @ 12:00 PM</span>
                </div>
            </div>

        </>
    )
}

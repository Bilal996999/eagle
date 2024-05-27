import React from 'react'
import styles from "./carSaleBanner.module.css"
export const CarSaleBanner = () => {
    return (
        <>
            <div className={`${styles.main_fluid} container-fluid`}>
                <div className={`${styles.services_section}`}>
                    <div className={`${styles.location_heading}`}>
                        <h1>Car Sale</h1>
                    </div>
                    <div className={`${styles.location_para}`}>
                        <p>Why just rent when you can purchase your next vehicle with us. Give us a call TODAY and let us help you get your next car at an affordable cost!</p>

                        <p className='mt-5'>Discover the advantages of choosing Eagle Car Selling Services for your travel needs.</p>
                    </div>
                </div>
            </div>

        </>
    )
}

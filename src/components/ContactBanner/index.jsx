import React from 'react'
import styles from "./contactBanner.module.css"
export const ContactBanner = () => {
    return (
        <>
            <div className={`${styles.main_fluid} container-fluid`}>
                <div className={`${styles.services_section}`}>
                    <div className={`${styles.location_para}`}>
                        HOME &nbsp; | &nbsp; CONTACT
                    </div>
                    <div className={`${styles.location_heading} mt-2`}>
                        <h1>CONTACT</h1>
                    </div>
                </div>
            </div>

        </>
    )
}

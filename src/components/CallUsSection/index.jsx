import React from 'react'
import styles from './call.module.css';
import { IoCall } from "react-icons/io5";


const CallUsSection = () => {
    return (
        <>
            <div className={`${styles.call_fluid} container-fluid`}>
                <div className={`${styles.call_container} container`}>
                    <div className={`${styles.call_section_main}`}>
                        <div className={`${styles.call_content_sec}`}>
                            <h3>Faster, easier access to car rental services</h3>
                            <h1>Call Us, And Let's Chat</h1>
                            <p>Take advantage of faster and more convenient access to our premium car rental services. Call us and let’s talk about your trip requirements to ensure a smooth voyage with Eagle Car Rentals.</p>
                        </div>
                        <div className={`${styles.call_btn}`}>
                            <button>
                                <IoCall className={`${styles.io_call}`} />
                                <a href="tel:3102946980">
                                    (310)294-6980
                                </a>
                            </button>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default CallUsSection
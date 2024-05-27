import React from 'react'
import styles from "./carSale.module.css"
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { CarSaleBanner } from '../../components/CarSaleBanner'
import { ContactSectionCarSale } from '../../components/ContactSectionCarSale'
import { FAQsection } from '../../components/FAQsection'
export const CarSale = () => {
    return (
        <>
            <Navbar />
            <CarSaleBanner />
            <div className={`${styles.section} container py-5`}>
                <div className='row py-5'>
                    <div className="col-lg-6">
                        <ContactSectionCarSale />
                    </div>
                    <div className="col-lg-6">
                       <FAQsection />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

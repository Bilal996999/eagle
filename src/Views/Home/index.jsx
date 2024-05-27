import React from 'react'
import styles from "./home.module.css"
import { Navbar } from '../../components/Navbar'
import { HomeBanner } from '../../components/HomeBanner'
import { BannerForm } from '../../components/BannerForm'

import Footer from '../../components/Footer'
import { SectionTitle } from '../../components/SectionTitle'
import { CarTypeSection } from '../../components/CarTypeSection'
import { RentalServiceSection } from '../../components/RentalServiceSection'
import { OfferSection } from '../../components/OfferSection'
import BenifitSection from '../../components/BenifitSection'
import TestimonialsSection from '../../components/TestimonialsSection'

export const Home = () => {
  return (
    <>
        <Navbar />
        <HomeBanner />
        <div className={`${styles.form_banner_container}`}>
        <BannerForm />
        </div>
        <CarTypeSection />
        <RentalServiceSection />
        <OfferSection />
        {/* <BannerForm /> */}
        <BenifitSection/>
        <TestimonialsSection/>
        <Footer/>
    </>
  )
}
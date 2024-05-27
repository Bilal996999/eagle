import React from 'react'
import Navbar from '../../components/Navbar'
import LocationBanner from '../../components/LocationBanner'
import OurNewCars from '../../components/OurNewCars'
import RentServices from '../../components/RentServices'
import WorkSection from '../../components/WorkSection'
import { CarTypeCard } from '../../components/CarTypeCard'
import { OfferSection } from '../../components/OfferSection'
import LuxeryServices from '../../components/LuxeryServices'
import FunFactSection from '../../components/FunFactSection'
import CarDealsSection from '../../components/CarDealsSection'
import CarTestimonial from '../../components/CarTestimonial'
import CallUsSection from '../../components/CallUsSection'
import Footer from '../../components/Footer'

const Services = () => {
  return (
    <>
    <Navbar/>
    <LocationBanner/>
    <OurNewCars/>
    <RentServices/>
    <WorkSection/>
    {/* <CarTypeCard/> */}
    <OfferSection/>
    <LuxeryServices/>
    <FunFactSection/>
    <CarDealsSection/>
    <CarTestimonial/>
    <CallUsSection/>

    
<Footer/>
    </>
  )
}

export default Services

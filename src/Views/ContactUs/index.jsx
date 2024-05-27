import React from 'react'
import styles from "./contactUs.module.css"
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { ContactBanner } from '../../components/ContactBanner'
import { ContactForm } from '../../components/ContactForm'

export const ContactUs = () => {
  return (
    <>
        <Navbar />
        <ContactBanner />
        <ContactForm />
        <Footer />
    </>
  )
}

import React from 'react'
import styles from "./rentalServiceSection.module.css"
import bannerImg from "../../assets/bannerImg2.png"
import { SectionTitle } from '../SectionTitle'
import { ButtonPrimary } from '../ButtonPrimary'
import callImg from "../../assets/call.png"
import { Link } from 'react-router-dom'
export const RentalServiceSection = () => {
    return (
        <>
            <div className={`${styles.container} container-fluid`}>
                <div className='container'>
                    <div className="row py-5">
                        <div data-aos="fade-up"
                            data-aos-duration="1400" className="col-lg-6 pt-5 mt-5">
                            <img className='img-fluid' src={bannerImg} alt="" />
                        </div>
                        <div className="col-lg-6 mt-5 pt-5">
                            <SectionTitle>GET TO KNOW US</SectionTitle>
                            <h1 data-aos="fade-up"
                                data-aos-duration="1200" className={`${styles.sec_heading}`}>Trusted and leading Cheap Car Rental Services</h1>
                            <p data-aos="fade-up"
                                data-aos-duration="1500" className={`${styles.para}`}>Rely on Eagle Car Rental for a trusted and reliable service, providing you peace of mind throughout your rental experience. Choosing Eagle Car Rental means committing to excellence and confidence in cheap rental services. So join us on a trip where dependability meets the road.</p>

                            <div data-aos="fade-up"
                                data-aos-duration="1800" className='d-flex flex-wrap justify-content-center justify-content-sm-between pb-5 pb-lg-0'>
                                <div>
                                    <ul className={`${styles.ul}`}>
                                        <li>Many Pickup Locations</li>
                                        <li>New & Luxury Cars</li>
                                        <li>Offering Low Prices</li>
                                        <li>Trusted Rental Service</li>
                                    </ul>

                                    <Link to={"/reserve"}>
                                    <ButtonPrimary>Discover More</ButtonPrimary>
                                    </Link>
                                </div>

                                <div className='mt-5'>
                                    <a href="tel:3102946980">
                                        <img className={`${styles.call_img}`} src={callImg} alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

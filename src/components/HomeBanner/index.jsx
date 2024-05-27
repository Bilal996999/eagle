import React from 'react'
import styles from "./homeBanner.module.css"
import circle from "../../assets/circle.png"
import bannerImg from "../../assets/bannerImg.jpg"
import carImg from "../../assets/car2.png"
import { BannerForm } from '../BannerForm'
import Aos from "aos";
import 'aos/dist/aos.css';
export const HomeBanner = () => {
    Aos.init();
    return (
        <>
            <div className={`${styles.banner_container} container-fluid`}>
                <div className="row">
                    <div
                        className={`col-lg-6 order-1 order-lg-0 d-flex justify-content-lg-end justify-content-center align-items-center pb-lg-0 mb-lg-0 pb-5 mb-5`}>
                        <div className={`${styles.content}`}>
                            <p  data-aos="fade-up"
                                // data-aos-easing="ease-in-sine"
                                data-aos-anchor="#example-anchor"
                                data-aos-offset="500"
                                data-aos-duration="1200" className={`${styles.welcome_para}`}>WELCOME TO EAGLE CAR RENTAL
                            </p>
                            <h1 data-aos="fade-up"
                                // data-aos-easing="ease-in-sine"
                                data-aos-anchor="#example-anchor"
                                data-aos-offset="500"
                                data-aos-duration="1400" >Affordable Car Rental <span style={{ borderBottom: "4px solid red" }}>Services</span></h1>
                            <p 
                            data-aos="fade-up"
                            // data-aos-easing="ease-in-sine"
                            data-aos-anchor="#example-anchor"
                            data-aos-offset="500"
                            data-aos-duration="1700"
                             className={`${styles.para}`}>Renting a car is rarely a pleasurable experience. Many of us will spend time evaluating the best pricing, considering which features to include, and discussing the cost and necessity of additional vehicle rental insurance.</p>
                        </div>
                    </div>
                    <div className={`col-lg-6 order-0 order-lg-1 p-0 ${styles.img_section}`}>
                        <div className={`${styles.img_container} `}>
                            <img className={`${styles.bg_circle}`} src={circle} alt="" />
                            <img className={`${styles.bannerImg}`} src={bannerImg} alt="" />
                            <img
                                data-aos="fade-left"
                                // data-aos-easing="ease-in-sine"
                                data-aos-anchor="#example-anchor"
                                data-aos-offset="500"
                                data-aos-duration="1000" className={`${styles.car_img}`} src={carImg} alt="" />
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

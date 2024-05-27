import React, { useEffect, useState } from 'react'
import CountUp from 'react-countup';
import 'aos/dist/aos.css';
import styles from './benifits.module.css';
import image1 from '../../assets/beni1.jpg';
import image2 from '../../assets/beniIcon1.png';
import image3 from '../../assets/beniIcon2.png';
import image4 from '../../assets/beniIcon3.png';
import image5 from '../../assets/beniIcon4.png';
import ScrollTrigger from 'react-scroll-trigger';

const BenifitSection = () => {
    const [counterOn, setCounterOn] = useState(false);


    return (
        <>
            <div className={`${styles.main_fluid_sec} container-fluid`}>
                <div className={`${styles.row_sec_benifit} row`}>
                    <div className={`${styles.benifit_one_col} col-lg-6 col-md-12`}>
                        <div className={`${styles.benifits_image_sec}`}>
                            <div className={`${styles.beni_image}`}>
                                <img src={image1} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.benifit_two_col} col-lg-6 col-md-12`}>
                        <div className={`${styles.beni_main_section}`}>
                            <div className={`${styles.benifits_content_sec}`}>
                                <div data-aos="fade-down" className={`${styles.widget_icon}`}>
                                    <img src={image2} alt="" />
                                </div>
                                <div className={`${styles.beni_heading_sec}`}>
                                    <h4>OUR BENEFITS</h4>
                                    <h1>Why You Should Use Eagle Car Rental</h1>
                                    <p>There are many variations of passages of available but the majority have suffered. Alteration in some form.</p>
                                </div>
                            </div>
                            <div className={`${styles.pick_section}`}>
                                <div data-aos="zoom-in" className={`${styles.pickup_location_sec1}`}>
                                    <div className={`${styles.location_icon1}`}>
                                        <img src={image3} alt="" />
                                    </div>
                                    <div className={`${styles.pickup_content}`}>
                                        <h1>MANY PICKUP LOCATIONS</h1>
                                        <p>Convenient pickup points for easy access.</p>
                                    </div>
                                </div>
                                {/* <div data-aos="zoom-in" className={`${styles.pickup_location_sec2}`}>
                                    <div className={`${styles.location_icon1}`}>
                                        <img src={image4} alt="" />
                                    </div>
                                    <div className={`${styles.pickup_content}`}>
                                        <h1>MANY PICKUP LOCATIONS</h1>
                                        <p>Convenient pickup points for easy access.</p>
                                    </div>
                                </div> */}
                            </div>
                            <div data-aos="fade-up" className={`${styles.satisfied_border_box} mt-4`}>
                                <div className={`${styles.satisfied_section}`}>
                                    <div className={`${styles.satisfied_image}`}>
                                        <img src={image5} alt="" />
                                    </div>
                                    <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                                        <div className={`${styles.satisfied_content}`}>
                                            <h1>
                                                {counterOn && (
                                                    <CountUp start={0} end={6000} duration={5} delay={0} />
                                                )}
                                            </h1>
                                            <p>satisfied customers</p>
                                        </div>
                                    </ScrollTrigger>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BenifitSection;
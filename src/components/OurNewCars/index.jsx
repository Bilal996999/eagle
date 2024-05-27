import React from 'react'
import styles from './our.module.css';
import 'aos/dist/aos.css';
import image2 from '../../assets/beniIcon1.png';
import image3 from '../../assets/serC1.jpg';
import image4 from '../../assets/serC2.jpg';
import image5 from '../../assets/serC3.jpg';
import { Link } from 'react-router-dom';


const OurNewCars = () => {
    return (
        <>
            <div className={`${styles.car_main_fluid} container-fluid`}>
                <div className={`${styles.car_container} container`}>
                    <div className={`${styles.car_heading_section}`}>
                        <div data-aos="fade-down" className={`${styles.widget_icon}`}>
                            <img src={image2} alt="" />
                        </div>
                        <div className={`${styles.beni_heading_sec}`}>
                            <h4>CHECKOUT OUR NEW CARS</h4>
                            <h1>CHOOSE YOUR LOCATION</h1>
                            <p>Select your preferred pickup location from our multiple options, making it convenient for you to start your journey.</p>
                        </div>
                    </div>

                    <div className={`${styles.services_images_section}`}>
                        <Link to={"/reserve"}>
                            <div data-aos="fade-up"
                                data-aos-duration="1000" className={`${styles.service_img_boxes}`}>
                                <div className={`${styles.serC2_imges}`}>
                                    <img src={image3} alt="" />
                                </div>
                                <div className={`${styles.ser_heading}`}>
                                    <h1>Los Angeles</h1>
                                </div>
                            </div>
                        </Link>

                        <Link to={"/reserve"}>
                            <div data-aos="fade-up"
                                data-aos-duration="1400" className={`${styles.service_img_boxes}`}>
                                <div className={`${styles.serC2_imges}`}>
                                    <img src={image4} alt="" />
                                </div>
                                <div className={`${styles.ser_heading}`}>
                                    <h1>Las Vegas</h1>
                                </div>
                            </div>
                        </Link>
                        <Link to={"/reserve"}>
                            <div data-aos="fade-up"
                                data-aos-duration="1800" className={`${styles.service_img_boxes}`}>
                                <div className={`${styles.serC2_imges}`}>
                                    <img src={image5} alt="" />
                                </div>
                                <div className={`${styles.ser_heading}`}>
                                    <h1>Orlando</h1>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

        </>
    )
}

export default OurNewCars

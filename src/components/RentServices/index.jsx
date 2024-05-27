import React from 'react'
import 'aos/dist/aos.css';
import styles from './rent.module.css'
import image2 from '../../assets/beniIcon1.png';
import image3 from '../../assets/serC9.png';
import image4 from '../../assets/serC10.png';
import { useNavigate } from 'react-router-dom';


const RentServices = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className={`${styles.rent_main_fluid} container-fluid`}>
                <div className={`${styles.rent_container} container`}>
                    <div className={`${styles.rent_row} row`}>
                        <div className={`${styles.rent_col_one} col-lg-6 `}>

                            <div className={`${styles.rent_section_one}`}>
                                <div className={`${styles.rent_image_section}`}>
                                    <div className={`${styles.rent_image}`}>
                                        <img src={image3} alt="" />
                                    </div>
                                    <div data-aos="fade-right" className={`${styles.rent_image_car}`}>
                                        <img src={image4} alt="" />
                                    </div>
                                </div>
                            </div>
                            
                        </div>

                        <div  className={`${styles.rent_col_two} col-lg-6`}>
                            <div className={`${styles.rent_section_two}`}>
                                <div className={`${styles.rent_contentsection}`}>
                                    <div data-aos="fade-down" className={`${styles.widget_icon}`}>
                                        <img src={image2} alt="" />
                                    </div>
                                    <div data-aos="fade-up"
    data-aos-duration="1200" className={`${styles.beni_heading_sec}`}>
                                        <h4>GET TO KNOW US</h4>
                                        <h1>Car Rent Services with a Wide Range of Cars</h1>
                                        <p>COMMITTED TO PROVIDING OUR CUSTOMERS WITH EXCEPTIONAL</p>
                                    </div>
                                </div>

                                <div data-aos="fade-up"
    data-aos-duration="1400" className={`${styles.many_locaton_section}`}>
                                    <div className={`${styles.many_section}`}>
                                        <div className={`${styles.many_pick_heading}`}>
                                            <h1>Many Pickup Locations</h1>
                                            <p>Benefit from our widespread pickup locations, ensuring accessibility and convenience for all our customers</p>
                                        </div>
                                        <div className={`${styles.many_pick_heading}`}>
                                            <h1>New & Luxury Cars</h1>
                                            <p>Experience the thrill of driving the latest and most luxurious cars on the market.</p>
                                        </div>
                                    </div>
                                    <div className={`${styles.many_section}`}>
                                        <div className={`${styles.many_pick_heading}`}>
                                            <h1>Offering Low Prices</h1>
                                            <p>Enjoy competitive and affordable rental prices, making your journey cost-effective and enjoyable.</p>
                                        </div>
                                        <div className={`${styles.many_pick_heading}`}>
                                            <h1>Trusted Rental Service</h1>
                                            <p>Our mission is to make your rental car experience as convenient and hassle-free as possible</p>
                                        </div>
                                    </div>
                                </div>
                                <div data-aos="fade-up" className={`${styles.discover_btn}`}>
                                    <button onClick={()=> navigate("/reserve")}>Discover More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RentServices

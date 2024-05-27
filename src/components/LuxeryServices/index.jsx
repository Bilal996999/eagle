import React from 'react'
import 'aos/dist/aos.css';
import styles from './lux.module.css'
import image1 from '../../assets/lux1.png'
import imagebg from '../../assets/lux3.png'
import { useNavigate } from 'react-router-dom';

const LuxeryServices = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className={`${styles.luxery_fluid} container-fluid`}>
                <div className={`${styles.luxery_container} container`}>
                    <div className={`${styles.luxery_row} row`}>
                        <div className={`${styles.luxery_col_one} col-lg-6`}>
                            <div className={`${styles.luxery_section_one}`}>
                                <div className={`${styles.luxery_images}`}>
                                    <img src={image1} alt="" />
                                </div>
                                <div className={`${styles.luxery_heading}`}>
                                    <p>Call for booking</p>
                                    <h1><a className='text-light' style={{textDecoration:"none"}} href="tel:(424)331-5040">+(424)331-5040
</a></h1>
                                </div>
                            </div>

                        </div>

                        <div className={`${styles.luxery_col_two} col-lg-6`}>
                            <div className={`${styles.luxery_section_two}`}>
                                <div className={`${styles.luxery_section_content}`}>
                                    <div className={`${styles.looking_heading}`}>
                                        <h1>Looking for a Luxury Car Service?</h1>
                                    </div>
                                    <div className={`${styles.starting_heading}`}>
                                        <h3>Starting at <span>$499</span> /wk </h3>
                                        <p>Eagle Car Rental’s premium car service offers elegance on the road for as little as $398 per month. Our elite fleet offers unparalleled comfort and luxury</p>
                                    </div>
                                    <div data-aos="fade-up" className={`${styles.discover_luxBtn}`}>
                                        <button onClick={()=> navigate("/reserve")}>Discover More</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default LuxeryServices

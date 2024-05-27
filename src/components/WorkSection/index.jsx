import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from './work.module.css'
import image2 from '../../assets/icon9.png';
import image3 from '../../assets/serC11.jpg';
import image4 from '../../assets/serC12.png';
import image5 from '../../assets/serC13.jpg';
import image6 from '../../assets/serC14.jpg';
import { FaArrowRight } from "react-icons/fa";



const WorkSection = () => {
    // useEffect(() => {
    //     AOS.init();
    //   }, []);
    return (
        <>
            <div className={`${styles.work_fluid} container-fluid`}>
                <div data-aos="fade-up"
    data-aos-duration="1400" className={`${styles.work_section}`}>
                    <div className={`${styles.work_image}`}>
                        <img data-aos="fade-down" src={image2} alt="" />
                        <h1>How It Works</h1>
                    </div>
                    <div className={`${styles.work_card_section}`}>
                        <div data-aos="zoom-in" className={`${styles.work_card_box}`}>
                            <div className={`${styles.wrok_card_haeding}`}>
                                <h1>Choose A Car</h1>
                                <p>Explore our diverse fleet and select the car that suits your needs.</p>
                            </div>
                            <div className={`${styles.work_mini_box}`}>
                                <div className={`${styles.circle_border_img}`}>
                                    <div className={`${styles.circle_carImage}`}>
                                        <img src={image3} alt="" />
                                    </div>
                                </div>
                                <div className={`${styles.work_icon_section}`}>
                                    <div className={`${styles.view_more_section}`}>
                                        <h1>View More</h1>
                                    </div>
                                    <div className={`${styles.work_angles}`}>
                                        <FaArrowRight className={`${styles.angles_style_work}`} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* box2 */}
                        <div data-aos="zoom-in" className={`${styles.work_card_box2}`}>
                            <img className={`${styles.icon_work_fingure}`} src={image4} alt="" />
                            <div className={`${styles.wrok_card_haeding}`}>
                                <h1>Choose A Car</h1>
                                <p>Explore our diverse fleet and select the car that suits your needs.</p>
                            </div>
                            <div className={`${styles.work_mini_box2}`}>
                                <div className={`${styles.circle_border_img}`}>
                                    <div className={`${styles.circle_carImage2}`}>
                                        <img src={image5} alt="" />
                                    </div>
                                </div>
                                <div className={`${styles.work_icon_section}`}>
                                    <div className={`${styles.view_more_section}`}>
                                        <h1>View More</h1>
                                    </div>
                                    <div className={`${styles.work_angles}`}>
                                        <FaArrowRight className={`${styles.angles_style_work}`} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div data-aos="zoom-in" className={`${styles.work_card_box}`}>
                            <div className={`${styles.wrok_card_haeding}`}>
                                <h1>Choose A Car</h1>
                                <p>Explore our diverse fleet and select the car that suits your needs.</p>
                            </div>
                            <div className={`${styles.work_mini_box}`}>
                                <div className={`${styles.circle_border_img}`}>
                                    <div className={`${styles.circle_carImage}`}>
                                        <img src={image6} alt="" />
                                    </div>
                                </div>
                                <div className={`${styles.work_icon_section}`}>
                                    <div className={`${styles.view_more_section}`}>
                                        <h1>View More</h1>
                                    </div>
                                    <div className={`${styles.work_angles}`}>
                                        <FaArrowRight className={`${styles.angles_style_work}`} />
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

export default WorkSection

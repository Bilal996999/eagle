import React from 'react'
import styles from './carDeal.module.css';
import image2 from '../../assets/beniIcon1.png';
import image3 from '../../assets/deals1.jpg';
import image4 from '../../assets/deals2.jpg';
import image5 from '../../assets/deals3.jpg';
import image6 from '../../assets/deals4.jpg';
import image7 from '../../assets/deals5.jpg';
import image8 from '../../assets/deals6.jpg';
import image9 from '../../assets/deals7.jpg';
import { useNavigate } from 'react-router-dom';


const CarDealsSection = () => {
    const navigate = useNavigate();
    const CarModal = [
        {
            head: "Mid-size car",
            para: "Available for Rent",
            backgroundImage: image3,
        },
        {
            head: "Full-size car",
            para: "Available for Rent",
            backgroundImage: image4,
        },
        {
            head: "Midsize SUV",
            para: "Available for Rent",
            backgroundImage: image5,
        },
        {
            head: "Full-size SUV",
            para: "Available for Rent",
            backgroundImage: image6,
        },
        {
            head: "Minivan",
            para: "Available for Rent",
            backgroundImage: image7,
        },
        {
            head: "Sports car",
            para: "Available for Rent",
            backgroundImage: image8,
        },
        {
            head: "Convertible",
            para: "Available for Rent",
            backgroundImage: image9,
        },
    ]
    return (
        <>
            <div className={`${styles.cars_fluid} container-fluid`}>
                <div className={`${styles.car_container} container`}>
                    <div className={`${styles.car_section}`}>
                        <div data-aos="fade-up"
                            data-aos-duration="1200" className={`${styles.car_content_sec}`}>
                            <img src={image2} alt="" />
                            <h4>SELECT CAR TYPES</h4>
                            <h1>Discover Incredible Deals on <br /> Top Car Models on Our Website</h1>
                            <p>Discover a diverse range of popular car models tailored to suit your travel needs. From sleek sedans to spacious SUVs, we have the perfect vehicle for every journey.</p>
                        </div>

                        <div data-aos="fade-up"
                            data-aos-duration="1400" className={`${styles.mid_size_section}`}>
                            {CarModal.map((item, index) => (
                                <div key={index} className={`${styles.mid_size_box}`} style={{ backgroundImage: `url(${item.backgroundImage})` }}>
                                    <div className={`${styles.content_sec}`}>
                                        <h1>{item.head}</h1>
                                        <p>{item.para}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div data-aos="fade-up"
                            data-aos-duration="1200" className={`${styles.find_car_section}`}>
                            <div className={`${styles.find_tab_bar}`}>
                                <div className={`${styles.tab_heading}`}>
                                    <h1>Car rental services specifically for our customers.</h1>
                                </div>
                                <div className={`${styles.fin_btn}`}>
                                    <button onClick={()=> navigate("/reserve")}>Find a Car</button>

                                </div>

                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default CarDealsSection
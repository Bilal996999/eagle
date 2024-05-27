import React from 'react'
import styles from './carTest.module.css';
import image2 from '../../assets/beniIcon1.png';
import image3 from '../../assets/eagleIcon.png';
import image4 from '../../assets/eagleArrow.png';
import image5 from '../../assets/jarrad.jpg';
import image6 from '../../assets/jarrad2.jpg';
import image7 from '../../assets/jarrad3.jpg';


const CarTestimonial = () => {
    const testimonialData = [
        {
            urlIcon1: image4,
            urlIcon2: image3,
            para: "Most reliable rental service around LA from my experience. They will pick you up from Alimo. They make it up we easy to rent the car and always a good price! I had the convertible mustang a couple times, always a blast! After about 5 days I also received my 300$ deposit back. Eagle is always ready to help on the phone or through text too!",
            urlIcon3: image5,
            head: "Jarrod Figley",
            subPara: "Customer",
        },
        {
            urlIcon1: image4,
            urlIcon2: image3,
            para: "Most reliable rental service around LA from my experience. They will pick you up from Alimo. They make it up we easy to rent the car and always a good price! I had the convertible mustang a couple times, always a blast! After about 5 days I also received my 300$ deposit back. Eagle is always ready to help on the phone or through text too!",
            urlIcon3: image6,
            head: "Jarrod Figley",
            subPara: "Customer",
        },
        {
            urlIcon1: image4,
            urlIcon2: image3,
            para: "Life Saver! Even though the price I paid last minute to rent a car was super high, Eagle Car Rental in W Florence, LA got me a car to drive to Pasadena when my original car rental place (U-Save) flaked on, lied to me and charged me half the cost for “no show”. Another plus was the car they rented me was a brand new car that just came from the dealer with less than 100 miles on it. They also picked me up from the rental depot in a brand new mini van too, still with all the plastic on the rugs. Great customer service, no line, no wait. Awesome Job, will definitely be renting from them next time in LA",
            urlIcon3: image7,
            head: "Jarrod Figley",
            subPara: "Customer",
        },

    ]
    return (
        <>
            <div className={`${styles.eagle_fluid} container-fluid`}>
                <div className={`${styles.eagle_container} container`}>
                    <div className={`${styles.eagle_section}`}>
                        <div className={`${styles.eagle_section_content}`}>
                            <div className={`${styles.eagle_content}`}>
                                <img src={image2} alt="" />
                                <h4>OUR TESTIMONIALS</h4>
                                <h1>What They’re Talking About Eagle Car Rental</h1>
                            </div>
                            <div className={`${styles.eagle_para}`}>
                                <p>Enhance your travel with exceptional service, a diverse fleet, and easy booking through our simple online platform.</p>
                            </div>

                        </div>

                        <div className={`${styles.testimonial_card_main_sec}`}>
                            {testimonialData.map((item, index) => (
                                <div key={index} className={`${styles.testimonial_cards_sec}`}>
                                    <div className={`${styles.cards_Box}`}>
                                        <img className={`${styles.eagleArrow}`} src={item.urlIcon1} alt="" />
                                        <img className={`${styles.eagleBgIcon}`} src={item.urlIcon2} alt="" />
                                        <div className={`${styles.critical_triangle}`}></div>
                                        <div className={`${styles.card_heading}`}>
                                            <p>{item.para}</p>
                                        </div>

                                    </div>
                                    <div className={`${styles.testmonial_name_sec}`}>
                                        <div className={`${styles.name_image}`}>
                                            <img src={item.urlIcon3} alt="" />
                                        </div>
                                        <div className={`${styles.name_heading}`}>
                                            <h1>{item.head}</h1>
                                            <p>{item.subPara}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default CarTestimonial

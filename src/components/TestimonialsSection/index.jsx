import React, { useRef } from 'react'
import styles from './testi.module.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaAngleLeft, FaAngleRight, FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import { TiStarFullOutline } from "react-icons/ti";


import BenifitsHeading from '../BenifitsHeading';
import image2 from '../../assets/beniIcon1.png';
import image3 from '../../assets/testiImg1.jpg';
import image4 from '../../assets/testiImg2.jpg';


const TestimonialsSection = () => {
  const sliderRef = useRef(null);
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    rtl: false,

  };
  const handleSliderPrev = () => {
    sliderRef.current.slickPrev();
  };

  const handleSliderNext = () => {
    sliderRef.current.slickNext();
  };
  const slides = [
    {
      content: "Life Saver! Even though the price I paid last minute to rent a car was super high, Eagle Car Rental in W Florence, LA got me a car to drive to Pasadena when my original car rental place (U-Save) flaked on, lied to me and charged me half the cost for “no show”. Another plus was the car they rented me was a brand new car that just came from the dealer with less than 100 miles on it. They also picked me up from the rental depot in a brand new mini van too, still with all the plastic on the rugs. Great customer service, no line, no wait. Awesome Job, will definitely be renting from them next time in LA.",
      name: "Galoong",
    },
    {
      content: "Life Saver! Even though the price I paid last minute to rent a car was super high, Eagle Car Rental in W Florence, LA got me a car to drive to Pasadena when my original car rental place (U-Save) flaked on, lied to me and charged me half the cost for “no show”. Another plus was the car they rented me was a brand new car that just came from the dealer with less than 100 miles on it. They also picked me up",
      name: "Galoong",
    },
    {
      content: "Life Saver! Even though the price I paid last minute to rent a car was super high, Eagle Car Rental in W Florence, LA got me a car to drive to Pasadena when my original car rental place (U-Save) flaked on, lied to me and charged",
      name: "Galoong",
    },
    {
      content: "Life Saver! Even though the price I paid last minute to rent a car was super high, Eagle Car Rental in W Florence, .",
      name: "Galoong",
    },
  ];
  return (
    <>
      <div className={`${styles.main_testi_fluid} container-fluid`}>
        <div className={`${styles.slider_sec} container`}>
          <div className={`${styles.slider_row} row`}>
            <div className={`${styles.slider_one} col-lg-4`}>
              <div className={`${styles.slider_content_sec}`}>
                <div className={`${styles.angles_arrow_section}`}>
                  <div className={`${styles.arrow_box_leftright}`} onClick={handleSliderPrev}>
                    <FaArrowLeft />
                  </div>
                  <div className={`${styles.arrow_box_leftright}`} onClick={handleSliderNext}>
                    <FaArrowRight />
                  </div>

                </div>
                <div className={`${styles.widget_icon}`}>
                  <img src={image2} alt="" />
                </div>
                <div  data-aos="fade-up"
                  data-aos-duration="1200" className={`${styles.beni_heading_sec}`}>
                  <h4>OUR TESTIMONIALS</h4>
                  <h1>What they’re saying about us</h1>
                  <p>Eagle Car Rentals Share the genuine experiences that our clients speak about in their feedback on your adventure, in their words.</p>
                </div>

              </div>

            </div>
            <div data-aos="fade-up"
              data-aos-duration="1400" className={`${styles.slider_two} col-lg-4`}>
              <Slider ref={sliderRef} {...sliderSettings}>
                {slides.map((item, index) => (
                  <div key={index} className={`${styles.slider_sec_slide}`}>
                    <div className={`${styles.slide_para}`}>
                      <p>{item.content}</p>
                    </div>
                    <div className={`${styles.galong_sec}`}>
                      <div className={`${styles.galong_head}`}>
                        <h1>{item.name}</h1>
                      </div>
                      <div className={`${styles.star_sec}`}>
                        <TiStarFullOutline className={`${styles.star_icon}`} />
                        <TiStarFullOutline className={`${styles.star_icon}`} />
                        <TiStarFullOutline className={`${styles.star_icon}`} />
                        <TiStarFullOutline className={`${styles.star_icon}`} />
                        <TiStarFullOutline className={`${styles.star_icon}`} />

                      </div>
                    </div>
                  </div>

                ))}


                <div className={`${styles.slider_sec_slide}`}>
                  <div className={`${styles.slide_para}`}>
                    <p>Life Saver! Even though the price I paid last minute to rent a car was super high, Eagle Car Rental in W Florence, LA got me a car to drive to Pasadena when my original car rental place (U-Save) flaked on, lied to me and charged me half the cost for “no show”. Another plus was the car they rented me was a brand new car that just came from the dealer with less than 100 miles on it. They also picked me up from the rental depot in a brand new mini van too, still with all the plastic on the rugs. Great customer service, no line, no wait. Awesome Job, will definitely be renting from them next time in LA.</p>
                  </div>
                  <div className={`${styles.galong_sec}`}>
                    <div className={`${styles.galong_head}`}>
                      <h1>Galoong</h1>
                    </div>
                    <div className={`${styles.star_sec}`}>
                      <TiStarFullOutline className={`${styles.star_icon}`} />
                      <TiStarFullOutline className={`${styles.star_icon}`} />
                      <TiStarFullOutline className={`${styles.star_icon}`} />
                      <TiStarFullOutline className={`${styles.star_icon}`} />
                      <TiStarFullOutline className={`${styles.star_icon}`} />

                    </div>
                  </div>
                </div>
              </Slider>

            </div>
            <div data-aos="fade-up"
              data-aos-duration="1500" className={`${styles.slider_three} col-lg-4`}>
              <div className={`${styles.testi_img_sec}`}>
                <div className={`${styles.testi_img1}`}>
                  <img src={image3} alt="" />
                </div>
                <div className={`${styles.testi_img2}`}>
                  <img src={image4} alt="" />
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </>

  )
}

export default TestimonialsSection

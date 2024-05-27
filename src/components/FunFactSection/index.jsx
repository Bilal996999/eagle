import React from 'react'
import styles from './fun.module.css'
import 'aos/dist/aos.css';
import imagebg from '../../assets/lux3.png'
import image2 from '../../assets/icon9.png';
import image3 from '../../assets/t1.png';
import image4 from '../../assets/t2.png';
import image5 from '../../assets/t3.png';
import FactTimerBox from '../FactTimerBox';


const FunFactSection = () => {
  const timerData = [
    {
      imgIcon: image3,
      count: "980",
      title: "CARS",
      para: "RENTALS"
    },
    {
      imgIcon: image4,
      count: "24/7",
      para: "ASSISTANCE"
    },
    {
      imgIcon: image5,
      count: "650",
      title: "SATISFIED",
      para: "CUSTOMERS"
    },
  ]
  return (
    <>
      <div className={`${styles.fact_fluid} container-fluid`}>
        <div className={`${styles.fact_container} container`}>
          <div className={`${styles.row_fact} `}>
            <div className={`${styles.fact_con_one} `}>
              <div data-aos="fade-down"
    data-aos-duration="1200" className={`${styles.fact_content_section}`}>
                <img src={image2} alt="" />
                <h1>FUN FACTS</h1>
                <p>Save Time & Money <br /> with Top Car Rent Services</p>
              </div>

              <div data-aos="fade-up"
    data-aos-duration="1300" className={`${styles.fact_timer_section}`}>
                {timerData.map((item, index) => (
                  <FactTimerBox key={index} data={item} />
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

    </>
  )
}

export default FunFactSection

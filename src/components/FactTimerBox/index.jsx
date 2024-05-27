import React, { useState } from 'react'
import styles from './factBox.module.css'
import 'aos/dist/aos.css';
import image3 from '../../assets/t1.png';
import image4 from '../../assets/t2.png';
import image5 from '../../assets/t3.png';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';


const FactTimerBox = ({ data }) => {
    const [counterOn, setCounterOn] = useState(false);



    return (
        <>
            <div className={`${styles.timer_border_box}`}>
                <img data-aos="fade-down" className={`${styles.time_border_image}`} src={data.imgIcon} alt="" />
                <div className={`${styles.timer_heading}`}>
                    <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                        {counterOn && (
                            <CountUp start={0} end={parseInt(data.count)} duration={5} separator="," decimal="." delay={0}>
                                {({ countUpRef }) => (
                                    <h1 ref={countUpRef} />
                                )}
                            </CountUp>
                        )}
                    </ScrollTrigger>
                    <p>{data.title}</p>
                    <span>{data.para}</span>
                </div>
            </div>

        </>
    )
}

export default FactTimerBox

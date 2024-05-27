import React from 'react'
import styles from "./navTop.module.css"
import { IoMail } from "react-icons/io5";
import { IoIosCall } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";


export const NavTopBar = () => {
    return (
        <>
            <div className={`container-fluid ${styles.container} d-flex justify-content-between align-items-center`}>
                <div className={`${styles.inner_container} d-flex flex-wrap`}>
                    <div>
                        <IoMail className={`${styles.icons}`} /> <span><a  className={`${styles.anchor}`} href="mailto:eaglebookingreserve@gmail.com">eaglebookingreserve@gmail.com</a></span>
                    </div>
                    <div>
                        <IoIosCall className={`${styles.icons}`} /> <span>office # <a className={`${styles.anchor}`}  href="tel:4243315040"> (424)331-5040 </a></span>
                    </div>
                    <div>
                        <IoIosCall className={`${styles.icons}`} /> <span>direct # <a className={`${styles.anchor}`}  href="tel:3102946980">(310)294-6980</a></span>
                    </div>

                <div className={`${styles.inner_container} ms-3`}>
                   <a href="https://www.facebook.com/people/Eagle-Car-Rental/pfbid02YtnHTpkCver4Mb5ozdBurBfb6DJYADJsytnfRTdPCJATPPgNXcYRiHktTMXAqvyel/?mibextid=LQQJ4d" target='_blank'><FaFacebook className={`${styles.social_icons}`} /></a> 
                  <a href="https://www.instagram.com/eaglecarsrental/?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr" target='_blank'>  <FaInstagram className={`${styles.social_icons}`} /></a>
                </div>
                </div>
            </div>
        </>
    )
}


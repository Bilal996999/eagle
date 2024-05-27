import React, { useState } from 'react'
import styles from './footer.module.css';
import image1 from '../../assets/logofooter.png';
import { FaFacebook, FaTelegramPlane } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import { toast } from 'react-toastify';
import { Bounce } from 'react-toastify';  // Add this import statement
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Footer = () => {
    const [payload, setPayload] = useState({
        email: "",
    })
    const [error, setError] = useState({ email: "" })

    const [loader,setLoaders] = useState(false);

    const navigate = useNavigate();

    const handleChangeText = (e) => {
        setError({ email: "" })
        setPayload({ ...payload, [e.target.name]: e.target.value })
        console.log("payload-->", payload)
    }

    const mockApi = async () => {
        // Simulate an API call using setTimeout
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({ data: 'API response' });
            }, 1000); // Simulating a delay of 1 second
        });
    };

    const handleSendBtn = async (e) => {
        e.preventDefault();
        const validationError = {};
        if (
            !payload.email ||
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)
        ) {
            validationError.email = "Please enter a valid email address";
        } else {
            validationError.email = "";
        }
        setError(validationError);
        console.log("error -->", payload)
        if (!validationError.email) {
            console.log("send Successfully --> ", payload);
            setLoaders(true);
            try {
                const response = await mockApi();
                console.log("response -->", response);
                toast.success("Email Sent SuccesFully!", {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                });

                setPayload({ email: "" })

            } catch (error) {
                console.log("error -->", error);

            }finally{
                setTimeout(() => {
                    setLoaders(false)
                },1000);
            }
        }


    }



    return (
        <>
            <div className={`${styles.main_fluid} container-fluid`}>
                <div className={`${styles.container_main} container`}>
                    <div className={`${styles.footer_sec}`}>
                        <div className={`${styles.footer_child}`}>
                            <div className={`${styles.logo_heading_sec}`}>
                                <div className={`${styles.logo_img}`}>
                                    <img src={image1} alt="" />
                                </div>
                                <div className={`${styles.content_head}`}>
                                    <h1>Save big with our cheap car rental</h1>
                                </div>
                            </div>
                            <div className={`${styles.social_icon_sec}`}>
                                <div className={`${styles.icon_border}`}>
                                    <a href="https://www.facebook.com/people/Eagle-Car-Rental/">
                                        <FaFacebook className={`${styles.icon_color}`} />
                                    </a>
                                </div>
                                <div className={`${styles.icon_border}`}>
                                    <a href="https://www.instagram.com/eaglecarsrental">
                                        <IoLogoInstagram className={`${styles.icon_color}`} />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={`${styles.footer_child_two} `}>
                            <div className={`${styles.list_styling}`}>
                                <h1 className={`${styles.contact_heading}`}>Contact Us</h1>
                                <div className={`${styles.list_items}`}>
                                    <ul>
                                        <li><MdEmail className={`${styles.mail_icon}`} />
                                            <a href="mailto:eaglebookingreserve@gmail.com">eaglebookingreserve@gmail.com</a>

                                        </li>
                                        <li><BsTelephoneFill className={`${styles.mail_icon}`} />
                                            <a href="tel:4243315040">(424)331-5040</a>
                                        </li>
                                        <li onClick={()=> navigate("/reserve")}><FaTelegramPlane className={`${styles.mail_icon}`}   />Los Angeles, CA</li>
                                        <li onClick={()=> navigate("/reserve")}><FaTelegramPlane className={`${styles.mail_icon}`}   />Orlando, FL</li>
                                        <li onClick={()=> navigate("/reserve")}><FaTelegramPlane className={`${styles.mail_icon}`}   />Las Vegas, NV</li>

                                    </ul>
                                </div>
                            </div>
                            <div className={`${styles.list_styling}`}>
                                <h1 className={`${styles.contact_heading}`}>Quick Links</h1>
                                <div className={`${styles.list_items_links}`}>
                                    <ul>
                                        <li>About Us</li>
                                        <li onClick={()=> navigate("/reserve")}>Reserve & Bookings</li>
                                        <li>Location & Cars/ Services</li>
                                        <li>Car Sale</li>
                                        <li onClick={()=> navigate("/contact-us")}>Contact Us</li>
                                        <li>Terms & Conditions</li>

                                    </ul>
                                </div>
                            </div>

                            <div className={`${styles.list_styling}`}>
                                <h1 className={`${styles.contact_heading}`}>Newsletter</h1>
                                <div className={`${styles.list_items}`}>
                                    <div className={`${styles.news_letter_para}`}>
                                        <p>Subscribe our newsletter to get our latest update & news</p>
                                    </div>
                                    <div className={`${styles.input_section}`}>
                                        <form action="" onSubmit={handleSendBtn}>
                                            <div className={`${styles.fields_section}`}>
                                                <div className={`${styles.search_input}`}>
                                                    <input
                                                        type="email"
                                                        placeholder='Email'
                                                        required
                                                        name='email'
                                                        onChange={handleChangeText}
                                                        value={payload.email}
                                                    />
                                                </div>

                                                {loader ? (
                                                    <button className={`${styles.btn_spin}`} type="button" disabled>
                                                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                                        Sending...
                                                    </button>
                                                ) : (
                                                    <div className={`${styles.send_btn}`}>
                                                        <input type="submit" value='send' />
                                                    </div>
                                                )}

                                            </div>
                                            {/* <p className={`${styles.validation_message}`}>Please enter a valid email address</p> */}
                                            {error.email && (
                                                <p className={`${styles.validation_message}`}>{error.email}</p>
                                            )}
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={`${styles.copy_right}`}>
                            <p>© Copyright 2023 by <span> PC digital design</span></p>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default Footer
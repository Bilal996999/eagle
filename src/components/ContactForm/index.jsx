import React, { useState } from 'react'
import styles from "./contactForm.module.css"
import { SectionTitle } from '../SectionTitle'
import contactImg from "../../assets/contactImg.jpg"
import quesIcon from "../../assets/quesIcon.png"
import emailIcon from "../../assets/emailIcon.png"
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Bounce, toast } from 'react-toastify'

export const ContactForm = () => {
    const [payload, setPayload] = useState({
        f_name: "",
        l_name: "",
        email: "",
        phone: "",
        message: "",
    })
    const [error, setError] = useState({
        f_name: "",
        l_name: "",
        email: "",
        phone: "",
        message: "",
    })
    const [loading, setLoading] = useState(false); // New loading state

    const handleChangeText = (e) => {
        setError({
            f_name: "",
            l_name: "",
            email: "",
            phone: "",
            message: "",
        })
        setPayload({ ...payload, [e.target.name]: e.target.value });

        console.log("payload -->", payload)
    }

    const mockApi = async () => {
        // Simulate an API call using setTimeout
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({ data: 'API response' });
            }, 1000); // Simulating a delay of 1 second
        });
    };


    const handleSubmitForm = async (e) => {
        e.preventDefault();
        let validationError = {}
        if (!payload.f_name) {
            validationError.f_name = "Please enter your Fname";
        } else {
            validationError.f_name = "";
        }
        if (!payload.l_name) {
            validationError.l_name = "Please enter your Lname";
        } else {
            validationError.l_name = "";
        }
        if (
            !payload.email ||
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)
        ) {
            validationError.email = "Please enter a valid email address";
        } else {
            validationError.email = "";
        }
        if (!payload.phone) {
            validationError.phone = "Please enter your phone number";
        } else {
            validationError.phone = "";
        }
        if (!payload.message) {
            validationError.message = "Please enter your message";
        } else {
            validationError.message = "";
        }
        setError(validationError);
        console.log("Submit --> ", payload);
        if (!validationError.f_name && !validationError.l_name && !validationError.email && !validationError.phone && !validationError.message) {
            console.log("submit succesfully -->", payload);
            setLoading(true)
            try {
                const response = await mockApi();
                console.log("response -->", response);
                toast.success("Submit SuccesFully!", {
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

                setPayload({
                    f_name: "",
                    l_name: "",
                    email: "",
                    phone: "",
                    message: "",

                });

            } catch (error) {
                console.log("error -->", error);

            } finally {
                setTimeout(() => {
                    setLoading(false)
                }, 1000);
            }

        }


    }
    return (
        <>
            <div className={`${styles.container} my-5 px-0 px-lg-5 container `}>
                <div className={`${styles.contact_container} rounded-3 p-5`}>
                    <div className="row p-0 p-md-5">
                        <div className='col-lg-8 '>
                            <SectionTitle>CONTACT US</SectionTitle>
                            <h1 className={`${styles.heading}`}>Drop us a Line</h1>
                            <form action="" onSubmit={handleSubmitForm}>
                                <div className={`${styles.field_container} d-flex`}>
                                    <div className={`${styles.input_container} flex-grow-1 me-2`}>
                                        <input
                                            type="text"
                                            placeholder='First Name'
                                            // required
                                            name='f_name'
                                            onChange={handleChangeText}
                                            value={payload.f_name}
                                        />
                                        {error.f_name && (
                                            <p className={`${styles.validdation_error}`}>{error.f_name}</p>
                                        )}
                                    </div>
                                    <div className={`${styles.input_container} flex-grow-1 ms-2`}>
                                        <input
                                            type="text"
                                            placeholder='Last Name'
                                            // required
                                            name='l_name'
                                            onChange={handleChangeText}
                                            value={payload.l_name}
                                        />
                                        {error.l_name && (
                                            <p className={`${styles.validdation_error}`}>{error.l_name}</p>
                                        )}
                                    </div>
                                </div>
                                <div className={`${styles.field_container} d-flex`}>
                                    <div className={`${styles.input_container} flex-grow-1 me-2`}>
                                        <input
                                            type="email"
                                            placeholder='Email'
                                            // required
                                            name='email'
                                            onChange={handleChangeText}
                                            value={payload.email}
                                        />
                                        {error.email && (
                                            <p className={`${styles.validdation_error}`}>{error.email}</p>
                                        )}
                                    </div>
                                    <div className={`${styles.input_container} flex-grow-1 ms-2`}>
                                        <input
                                            type="text"
                                            placeholder='Phone Number'
                                            // required
                                            name='phone'
                                            onChange={handleChangeText}
                                            value={payload.phone}
                                        />
                                        {error.phone && (
                                            <p className={`${styles.validdation_error}`}>{error.phone}</p>
                                        )}
                                    </div>
                                </div>
                                <div className={`${styles.field_container}`}>
                                    <textarea
                                        placeholder='Message'
                                        name="message"
                                        id=""
                                        cols="30"
                                        rows="10"
                                        // required
                                        onChange={handleChangeText}
                                        value={payload.message}
                                    >
                                    </textarea>
                                    {error.message && (
                                        <p className={`${styles.validdation_error}`}>{error.message}</p>
                                    )}
                                </div>

                                {/* <div className={`${styles.btn_container}`}>
                                    <input type="submit" value="Submit Form" />
                                </div> */}
                                {loading ? (
                                    <button className={`${styles.btn_spin}`} type="button" disabled>
                                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                        Sending...
                                    </button>
                                ) : (
                                    <div className={`${styles.btn_container}`}>
                                        <input type="submit" value="Submit Form" />
                                    </div>
                                )}
                                {/* <button className={`${styles.btn_spin}`} type="button" disabled>
                                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                    Loading...
                                </button> */}
                            </form>
                        </div>

                        <div className='col-lg-4'>
                            <img src={contactImg} className='rounded-3 mt-3' alt="" />
                            <div className={`${styles.contact_section} d-flex mt-2 py-4 border-bottom`}>
                                <div className='mt-2'>
                                    <img src={quesIcon} alt="" />
                                </div>
                                <div className='ps-3'>
                                    <span className={`${styles.title}`}>Office</span> <br />
                                    <span className={`${styles.value}`}><a className='anchor text-dark' href="tel:4243315040">(424)331-5040</a></span>
                                </div>
                            </div>
                            <div className={`${styles.contact_section} d-flex  py-4 border-bottom`}>
                                <div className='mt-2'>
                                    <img src={emailIcon} alt="" />
                                </div>
                                <div className='ps-3'>
                                    <span className={`${styles.title}`}>Write Email</span> <br />
                                    <span className={`${styles.value}`}><a className='anchor text-dark' href="mailto:eaglebookingreserve@gmail.com">eaglebookingreserve@gmail.com</a></span>
                                </div>
                            </div>
                            <div className={`${styles.contact_section} d-flex  py-4 border-bottom`}>
                                <div className='mt-2'>
                                    <img src={quesIcon} alt="" />
                                </div>
                                <div className='ps-3'>
                                    <span className={`${styles.title}`}>
                                        direct</span> <br />
                                    <span className={`${styles.value}`}><a className='anchor text-dark' href="tel:3102946980">(310)294-6980</a></span>
                                </div>
                            </div>
                            <div className='mt-4'>
                                <a href="https://www.facebook.com/people/Eagle-Car-Rental/pfbid02YtnHTpkCver4Mb5ozdBurBfb6DJYADJsytnfRTdPCJATPPgNXcYRiHktTMXAqvyel/?mibextid=LQQJ4d" target='_blank'><FaFacebook className={`${styles.socialIcon}`} /></a> &nbsp;
                                <a href="https://www.instagram.com/eaglecarsrental/?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr" target='_blank' > <FaInstagram className={`${styles.socialIcon}`} /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

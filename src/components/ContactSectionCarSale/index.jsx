import React, { useState } from 'react'
import styles from './contactSection.module.css'
import { Bounce, toast } from 'react-toastify'
export const ContactSectionCarSale = () => {
    const [payload, setPayload] = useState({
        name: "",
        email: "",
        phone: "",
    })
    const [error, setError] = useState({
        name: "",
        email: "",
        phone: "",
    })
    const [loading, setLoading] = useState(false); // New loading state

    const handleChangeText = (e) => {
        setError({
            name: "",
            email: "",
            phone: "",
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
        if (!payload.name) {
            validationError.name = "Please enter your Fname";
        } else {
            validationError.f_name = "";
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
        setError(validationError);
        console.log("Submit --> ", payload);
        if (!validationError.f_name && !validationError.l_name && !validationError.email && !validationError.phone && !validationError.message) {
            console.log("submit succesfully -->", payload);
            setLoading(true);
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
                    name: "",
                    email: "",
                    phone: "",
                });
            } catch (error) {
                console.log("error -->", error);
            } finally{
                setTimeout(() => {
                    setLoading(false);
                },1000);
            }
        }
    }
    return (
        <>
            <div className={`${styles.container}`}>
                <div className={`${styles.questionsSection} text-center py-3`}>
                    <p className={`${styles.question_para}`}>Still have Questions? <br /> Call Now!</p>

                    <span>Call Anytime</span>
                    <p className={`${styles.number} mb-0`}> <a className='anchor text-dark' href="tel:4243315040"> (424)331-5040 </a></p>
                </div>

                <form onSubmit={handleSubmitForm} className={`${styles.form_container} px-3`}>
                    <div className={`${styles.field_section} d-flex `}>
                        <div className={`${styles.input_container} flex-grow-1 pe-3`}>
                            <h6>Name</h6>
                            <input
                                type="text"
                                placeholder='Name'
                                // required
                                name='name'
                                onChange={handleChangeText}
                                value={payload.name}
                            />
                            {error.name && (
                                <p className={`${styles.validdation_error}`}>{error.name}</p>
                            )}
                        </div>
                        <div className={`${styles.input_container} flex-grow-1 ps-3`}>
                            <h6>Email</h6>
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
                    </div>
                    <div className={`${styles.field_section} d-flex`}>
                        <div className={`${styles.input_container} flex-grow-1 pe-3`}>
                            <h6>Phone Number</h6>
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
                        <div className={`${styles.input_container} flex-grow-1 ps-3`}>
                            <h6>Pick up Location</h6>
                            <select
                            // required
                            >
                                <option value="" selected disabled>Select Location</option>
                                <option value="florida">FLORIDA</option>
                                <option value="nevada">NEVADA</option>
                                <option value="canada">CALIFORNIA</option>
                            </select>
                        </div>
                    </div>
                    <div className={`${styles.field_section2}`}>
                        <h6>Car Type</h6>
                        {/* <input type="text" placeholder='Car Type' /> */}
                        <select
                        // required
                        >
                            <option value="" selected disabled>Car Type</option>
                            <option value="Mid-size car">Mid-size car</option>
                            <option value="Full-size car">Full-size car</option>
                            <option value="Mid-size SUV">Mid-size SUV</option>
                            <option value="Full-size SUV">Full-size SUV</option>
                            <option value="Minivan">Minivan</option>
                            <option value="Sports car">Sports car</option>
                            <option value="Convertible">Convertible</option>
                        </select>


                    </div>
                    {/* 
                    <div className={`${styles.btn_container} mt-5`}>
                        <input type="submit" value={'Submit Form'} />
                    </div> */}
                    {loading ? (
                        <button className={`${styles.btn_spin} mt-5`} type="button" disabled>
                            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                            Sending...
                        </button>
                    ) : (
                        <div className={`${styles.btn_container} mt-5`}>
                            <input type="submit" value="Submit Form" />
                        </div>
                    )}
                </form>

            </div>
        </>
    )
}

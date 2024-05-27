import React, { useState } from 'react'
import styles from "./navbar.module.css"
import { NavTopBar } from '../NavTopBar'
import logo from '../../assets/logomain.png'
import { NavLink, useNavigate } from 'react-router-dom'
import { MobNav } from '../MobNav'
export const Navbar = () => {
    const [toggle, setToggle] = useState(false);
   const navigator = useNavigate();
    return (
        <>
            <div className={`${styles.nav_main_container} d-flex`}>
                <div className={`${styles.nav_logo_container}`}>
                    <img onClick={()=> navigator("/")} src={logo} className="logo img-fluid" alt="logo" />
                </div>

                <div className={`${styles.nav_links_container} flex-grow-1`}>

                    <NavTopBar />
                    <nav className="navbar navbar-expand-xl bg-body-light p-0 ">
                        <div className="container-fluid p-0">
                            <a className={`navbar-brand `} href="#">
                            </a>
                            <button onClick={()=> setToggle(true)} className="navbar-toggler mt-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedConten" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className={`navbar-nav me-auto mb-2 mb-lg-0 ${styles.ul_container}`}>

                                    <li className={`nav-item ${styles.home_link}`}>
                                        <NavLink
                                            to="/"
                                            className={({ isActive }) =>
                                                isActive
                                                    ? `${styles.nav_item_active}  nav-link`
                                                    : `${styles.nav_item}  nav-link`
                                            }
                                        >
                                            Home
                                        </NavLink>

                                    </li>
                                    <li className="nav-item">
                                        <NavLink
                                            to="/reserve"
                                            className={({ isActive }) =>
                                                isActive
                                                    ? `${styles.nav_item_active}  nav-link`
                                                    : `${styles.nav_item}  nav-link`
                                            }
                                        >
                                            Reserve & Booking
                                        </NavLink>

                                    </li>
                                    <li className="nav-item">
                                        <NavLink
                                            to="/services"
                                            className={({ isActive }) =>
                                                isActive
                                                    ? `${styles.nav_item_active}  nav-link`
                                                    : `${styles.nav_item}  nav-link`
                                            }
                                        >
                                            Location & Cars/Services
                                        </NavLink>

                                    </li>
                                    <li className="nav-item">
                                        <NavLink
                                            to="/car-sale"
                                            className={({ isActive }) =>
                                                isActive
                                                    ? `${styles.nav_item_active}  nav-link`
                                                    : `${styles.nav_item}  nav-link`
                                            }
                                        >
                                            Car Sale
                                        </NavLink>

                                    </li>
                                    <li className="nav-item">
                                        <NavLink
                                            to="/contact-us"
                                            className={({ isActive }) =>
                                                isActive
                                                    ? `${styles.nav_item_active}  nav-link`
                                                    : `${styles.nav_item}  nav-link`
                                            }
                                        >
                                            Contact Us
                                        </NavLink>

                                    </li>
                                </ul>
                                <form className="d-flex" role="search">
                                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />

                                    <button className={`btn ${styles.contact_btn}`} type="submit">Contact Us</button>
                                </form>
                            </div>
                        </div>
                    </nav>

                </div>
            </div>
            {
            toggle &&
            <MobNav setToggle={setToggle} />
            }
        </>
    )
}
export default Navbar;

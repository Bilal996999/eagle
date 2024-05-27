import React from 'react'
import styles from './location.module.css';
import { SectionTitle } from '../SectionTitle';

const OurLocation = () => {
    return (
        <>
            <div className={`${styles.embed_section} container py-5`}>
                <div className={`${styles.map_image_sec} text-center`}>
                    <SectionTitle>OUR LOCATION</SectionTitle>
                </div>
                <div className={`${styles.embeded_maps_sec} mt-5`}>
                    <div className={`${styles.los_angeles} col-lg-4 col-md-12`}>
                        <h1>Los Angeles</h1>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d206.82669499320008!2d-118.37550636152457!3d33.961001430297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b7c8434bd57d%3A0x823a6aef629edc80!2sEagle%20Car%20Rental!5e0!3m2!1sen!2s!4v1709657151654!5m2!1sen!2s"
                            width="90%"
                            height="300"
                            style={{ border: 0, borderRadius: 5 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>

                    <div className={`${styles.los_angeles} col-lg-4 col-md-12`}>
                        <h1>Las Vegas</h1>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3225.5154666746407!2d-115.16504282371575!3d36.056529409265934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8cf67aa500001%3A0x5955b8e7ca134c94!2s205%20E%20Warm%20Springs%20Rd%20office%20106%2C%20Las%20Vegas%2C%20NV%2089119%2C%20USA!5e0!3m2!1sen!2s!4v1709658011330!5m2!1sen!2s"
                            width="90%"
                            height="300"
                            style={{ border: 0, borderRadius: 5 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>

                    <div className={`${styles.los_angeles} col-lg-4 col-md-12`}>
                        <h1>Orlando</h1>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d876.9321052368289!2d-81.31116575492548!3d28.457602028119915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e763113e8e5233%3A0xff4aa135bd18d9d6!2s5453%20Gateway%20Village%20Cir%20%23103%2C%20Orlando%2C%20FL%2032812%2C%20USA!5e0!3m2!1sen!2s!4v1709657933434!5m2!1sen!2s"
                            width="90%"
                            height="300"
                            style={{ border: 0, borderRadius: 5 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurLocation
import React from 'react'
import styles from "./FAQs.module.css"
import { SectionTitle } from '../SectionTitle'
import { FAQ } from '../FAQ'
export const FAQsection = () => {
    const FAQs = [
        {
            question: "DO we sell cars?",
            answer: "Yes. Not only do we rent offer rental services, but if you love the car you can purchase it."
        },
        {
            question: "Who can rent our cars?",
            answer: "Our services are open to ALL local and international travelers"
        },
        {
            question: "What forms of payment do we accept?",
            answer: "We accept a variety of payment from including debit card, credit card, prepaid cards, and apple pay"
        },
        {
            question: "What is the age limit to rent a car?",
            answer: "The minimum age to rent from us is 22- 25 years old with a valid ID.  For further information call us at (310)294-6980"
        },
        {
            question: "Can we provide one-way rental services?",
            answer: "Yes, we do provide one-way services depending on the customers location. For more information contact us."
        },
        {
            question: "What else do we offer?",
            answer: "At Eagle Car Rental we provide child car seats, GPS, and fast track tolls"
        },
    ]
    return (
        <>
            <div className='px-0 px-md-5 pt-5 pt-md-0'>
                <div className='text-center text-md-start'>
                    <SectionTitle>FREQUENTLY ASKED QUESTIONS</SectionTitle>
                </div>
                <h1 className={`${styles.heading}`}>Question & Answers</h1>

                {FAQs.map((item, key) => <FAQ data={item} key={key} />)}
            </div>
        </>
    )
}

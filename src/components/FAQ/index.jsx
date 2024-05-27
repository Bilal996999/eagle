import React, { useState } from 'react'
import styles from "./FAQ.module.css"
export const FAQ = ({data}) => {
    const [toggle, setToggle] = useState(false)
    const handleToggle = () => {
        setToggle(!toggle)
    }
    return (
        <>
            <div className={toggle ? `${styles.container2} mt-4` : `${styles.container} border mt-4`} onClick={handleToggle}>
                <h6 className={toggle ? `mt-1 ${styles.heading}` : 'mt-1'}>  {data.question}</h6>
            </div>
            {toggle &&
                <p className={`p-3 px-5 ${styles.para}`}>
                    {data.answer}
                </p>
            }
        </>
    )
}

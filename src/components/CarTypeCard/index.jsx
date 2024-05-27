import React from 'react'
import styles from './typeCard.module.css'
import c1 from "../../assets/car2.jpg"
import { useNavigate } from 'react-router-dom'
export const CarTypeCard = ({data}) => {
  const navigate = useNavigate();
  return (
    <div data-aos="fade-up"
    data-aos-duration="1200" onClick={()=> navigate("/reserve")} className={`${styles.container} mx-1 mt-3`}>
        <img  src={data.image} alt=""  />
        <p>{data.title}</p>
    </div>
  )
}

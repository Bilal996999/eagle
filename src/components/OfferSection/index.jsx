import React from 'react'
import 'aos/dist/aos.css';
import styles from "./offerSection.module.css"
import { SectionTitle } from '../SectionTitle'
import { CarPkgCard } from '../CarPkgCard'
import c1 from "../../assets/c1.jpg"
import c2 from "../../assets/c2.jpg"
import c3 from "../../assets/c3.jpg"
import c4 from "../../assets/c4.jpg"
import c5 from "../../assets/c5.jpg"
import c6 from "../../assets/c6.jpg"
import c7 from "../../assets/c7.jpg"


export const OfferSection = () => {
    const carData = [
        {
            "image": "https://firebasestorage.googleapis.com/v0/b/eaglecarrental-bd4de.appspot.com/o/Cars%2FNISSA%20SENTRA%20OR%20SIMILAR).jpg?alt=media&token=14adeb8c-09fc-42f0-b3b9-ae65749398aa",
            "title": "Mid-size car",
            "description": "SEDAN",
            "dayCharges": "$79.00",
            "weekCharges": "$553",
            "door": "4",
            "seat": "5",
            "model":"NISSA SENTRA OR SIMILAR"
        },
        {
            "image": "https://firebasestorage.googleapis.com/v0/b/eaglecarrental-bd4de.appspot.com/o/Cars%2Fcamry.jpg?alt=media&token=0924ca00-47c8-4ea5-9f03-895cd441895a",
            "title": "Full-size car",
            "description": "SEDAN",
            "dayCharges": "$89.00",
            "weekCharges": "$623",
            "door": "4",
            "seat": "5",
            "model":"TOYOTA CAMRY OR SIMILAR"
        },
        {
            "image": "https://firebasestorage.googleapis.com/v0/b/eaglecarrental-bd4de.appspot.com/o/Cars%2FTOYOTA-RV4.jpg?alt=media&token=5eda5e10-8efe-414b-b827-57293bc31894",
            "title": "Mid-size SUV",
            "description": "SUV",
            "dayCharges": "$98.00",
            "weekCharges": "$686",
            "door": "4",
            "seat": "5",
            "model":"TOYOTA RV4 OR SIMILAR"
        },
        {
            "image": "https://firebasestorage.googleapis.com/v0/b/eaglecarrental-bd4de.appspot.com/o/Cars%2Fvw%20tiguan.jpg?alt=media&token=dee9bf74-d081-49c0-8e47-22ed5c3fd4f9",
            "title": "Standard SUV",
            "description": "SUV",
            "dayCharges": "$119.00",
            "weekCharges": "$833",
            "door": "4",
            "seat": "7",
            "model":"VW TIGUAN OR SIMILAR"
        },
        {
            "image": "https://firebasestorage.googleapis.com/v0/b/eaglecarrental-bd4de.appspot.com/o/Cars%2Fcheavy%20subarbun.jpg?alt=media&token=9b82404e-d998-4de5-b37d-4f3c331371b4",
            "title": "Full-size SUV",
            "description": "SUV",
            "dayCharges": "$149.00",
            "weekCharges": "$1,043",
            "door": "4",
            "seat": "7 to 8",
            "model":"CHEVY SUBURBAN OR SIMILAR"
        },
        {
            "image": "https://firebasestorage.googleapis.com/v0/b/eaglecarrental-bd4de.appspot.com/o/Cars%2Fmini%20van.jpg?alt=media&token=73a799a8-b1c7-44bf-893f-b9b6e0b3057f",
            "title": "Minivan",
            "description": "VAN",
            "dayCharges": "$129.00",
            "weekCharges": "$903.00",
            "door": "4",
            "seat": "7",
            "model":"DODGE CARAVAN OR SIMILAR"
        },
        {
            "image": "https://firebasestorage.googleapis.com/v0/b/eaglecarrental-bd4de.appspot.com/o/Cars%2FSPORTS-CAR-DODGE-CHARGER-OR-SIMILAR).jpg?alt=media&token=fdbae316-5240-4ede-b89d-8c281589c045",
            "title": "Sports car",
            "description": "SEDAN",
            "dayCharges": "$125.00",
            "weekCharges": "$875.00",
            "door": "4",
            "seat": "5",
            "model":"DODGE CHARGER OR SIMILAR"
        },
        {
            "image": "https://firebasestorage.googleapis.com/v0/b/eaglecarrental-bd4de.appspot.com/o/Cars%2Fmustang.jpg?alt=media&token=42bb863e-ede4-4df5-a047-8236aa66e6cf",
            "title": "Convertible",
            "description": "COUPE",
            "dayCharges": "$129.00",
            "weekCharges": "$903.00",
            "door": "2",
            "seat": "4",
            "model":"FORD MUSTANG OR SMILIAR"
        },
        {
            "image": "https://firebasestorage.googleapis.com/v0/b/eaglecarrental-bd4de.appspot.com/o/Cars%2FCHRYSLER-300-OR-SIMILAR).jpg?alt=media&token=3eb82a58-d8de-45bf-8086-eb651737ee30",
            "title": "LUXURY CAR",
            "description": "SEDAN",
            "dayCharges": "$119.00",
            "weekCharges": "$833.00",
            "door": "4",
            "seat": "5",
            "model":"CHRYSLER 300 OR SIMILAR"
        },
        {
            "image": "https://firebasestorage.googleapis.com/v0/b/eaglecarrental-bd4de.appspot.com/o/Cars%2FSport%20car%20%3D%20Doge%20charger%20or%20Dodge%20challenger.jpg?alt=media&token=d868ae28-8f11-4799-bfb0-addc62b11461",
            "title": "DODGE CHALLENGER",
            "description": "COUPE",
            "dayCharges": "$114.00",
            "weekCharges": "$798.00",
            "door": "2",
            "seat": "4",
            "model":"NISSA SENTRA OR SIMILAR"
        }
    ]

  return (
    <>
        <div className={`${styles.container} container mb-5 pb-5`}>
            <div className='text-center mt-5 pt-5'>
            <SectionTitle>CHECKOUT OUR NEW CARS</SectionTitle>
            </div>
            <h1 className={`${styles.main_heading} text-center mt-2`}>Cars We’re Offering for Rentals</h1>

            <div className='d-flex justify-content-lg-between justify-content-center flex-wrap'>
                {carData.map((item,key)=>(
                <div data-aos="fade-up"
                data-aos-duration="1200" className='mt-5'>
                <CarPkgCard data={item} key={key}/>
                </div>
                ))}
            </div>
        </div>
    </>
  )
}

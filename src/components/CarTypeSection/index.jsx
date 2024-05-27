import React from 'react'
import styles from "./carTypeSection.module.css"
import { SectionTitle } from '../SectionTitle'
import car1 from "../../assets/car2.jpg"
import car2 from "../../assets/car3.jpg"
import { CarTypeCard } from '../CarTypeCard'
export const CarTypeSection = () => {
    const cars = [
        {
          title: "Mid-size car",
          image: "https://firebasestorage.googleapis.com/v0/b/eaglecarrental-bd4de.appspot.com/o/Cars%2Fcarolla.jpg?alt=media&token=31a3907c-3919-474b-ba27-f9547733aea2"
        },
        {
          title: "Full-size car",
          image: car2
        },
        {
          title: "Midsize SUV",
          image: car1
        },
        {
          title: "Full size SUV",
          image: car2
        },
        {
          title: "Minivan",
          image: car1
        },
        {
          title: "Sports car",
          image: car2
        },
        {
          title: "Convertible",
          image: car1
        }
      ];
      
  return (
    <>
        <div className={`${styles.container} container py-5`}>
            <div  className='text-center'>
            <SectionTitle>SELECT CAR TYPE</SectionTitle>
            </div>
            <h1  data-aos="fade-up"
         // data-aos-easing="ease-in-sine"
         data-aos-anchor="#example-anchor"
         data-aos-offset="500"
         data-aos-duration="1000" className={`${styles.main_heading} text-center mt-2`}>Discover Incredible Deals on Top Car Models on Our Website</h1>
            <p className='text-center mt-3'>Fortunately, getting the best car deal does not have to be complicated. Several websites promise to give the greatest pricing, but do they? If you’re short on time or just want to get down to business, we’ve included a concise review of each website featured below in the “Pros and Cons” section to help you out in booking your next car rental service from one of the best websites.</p>
            
            <div className='d-flex justify-content-center flex-wrap my-5'>
            {cars.map((item,key)=>(
                
            <CarTypeCard key={key} data={item} />
                
            ))}
            </div>
        </div>
    
    </>
  )
}

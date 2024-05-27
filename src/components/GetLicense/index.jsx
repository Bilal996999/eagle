import React, { useEffect, useState } from 'react'
import styles from './getLicense.module.css'
import { FaRegAddressCard } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { updatePayload, updatePersonalView, updateProgressBarValue } from '../../store/formSlice';
import { FaArrowLeft } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import instance from '../../../axiosConfig';
import { uploadImage } from '../../config/firebase.config';
export const GetLicense = () => {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState("");
    const disptach = useDispatch()
    useEffect(()=>{
      disptach(updateProgressBarValue(0))
    },[])
   const handleBack = ()=>{
    navigate('/reserve-detail')
   }
   const handleSubmit= async (e)=>{
    
  //   try {
  //     setLoader(true);
  //     const data = new FormData();
  //     data.append("images", e.target.files[0]);
  //     console.log("formData-->",data)
  //     const response = await instance.post('/api/image/upload', data );
  //     console.log("img_uploaded-->",response?.data?.data[0])

  //     disptach(updateProgressBarValue(20))
  //     disptach(updatePayload({driverLicensePicture:response?.data?.data[0] }))
  //     // disptach(updatePayload({driverLicensePicture: "23123" }))
      
  //     disptach(updatePersonalView('license-form'))
  //     setLoader(false)
  //   } catch (error) {
  //     console.log("error-->",error)
  //     setLoader(false)
  //   }
  //  }
  const maxSize = 2 * 1024 * 1024; 
  if (e.target.files[0].size > maxSize) {
    setError('Image size should be less than 2MB');
  }else{
    setError('');
    try {
      setLoader(true);
      const url = await uploadImage(e.target.files[0]);
      console.log(url,"<-- url");

      disptach(updateProgressBarValue(20))
      disptach(updatePayload({driverLicensePicture: url }))      
      disptach(updatePersonalView('license-form'))
      setLoader(false)
    } catch (error) {
      console.log("error-->",error)
      setLoader(false)
    }
  }     
}

  return (
    <>
    <div className='p-4'>
     <FaArrowLeft style={{cursor: "pointer"}} onClick={handleBack} />
     </div>
        <div className={`${styles.container} text-center container mt-5 pt-5`}>
            <h5>To reserve your car for February 22nd, please upload a photo of your valid driver's license. If it's not from the US, your home country's license works just fine!</h5>          
            <div className={`${styles.license_container} mt-5 text-center border`}>
                <FaRegAddressCard className={`${styles.icon}`} />
                <p className='mt-3'>Upload the driver's License Picture</p>
                <input type="file" accept='image/*' multiple={false} onChange={handleSubmit} required/>
                { error && <span className='text-danger'>{error}</span>}
            </div>
            {
              loader ?
            <div class="spinner-border text-secondary mt-4" role="status">
               <span class="sr-only"></span>
            </div> : ""
            }
            <p className={`${styles.para} mt-5`}>Don't have your driver's license handy? Not a problem, <span onClick={handleSubmit}>click here</span> to manually enter your details.</p>

        </div>
    </>
  )
}

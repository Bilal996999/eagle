import React, { useState } from 'react'
import styles from "./ageCard.module.css"
import { FaRegAddressCard } from 'react-icons/fa6'
import instance from '../../../axiosConfig';
import { uploadImage } from '../../config/firebase.config';
export const AgeCard = ({ data, method }) => {
  const [img, setImg] = useState('');
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState("");
  const handleImage = (e) => {
    console.log(e.target.files[0])
    setImg(e.target.files[0]);
    const maxSize = 2 * 1024 * 1024; // 
    
    if (e.target.files[0].size > maxSize) {
      setError('Image size should be less than 2MB');
    }else{
      setError('')
    }

    console.log(img)
  }

  const handleForm = async (e) => {
    e.preventDefault();
    if(error == ""){
    try {
      // if (img) {
      //   setLoader(true)
      //   const formData = new FormData();
      //   formData.append("images", img);
      //   console.log("formData-->", formData)
      //   const response = await instance.post('/api/image/upload', formData);
      //   console.log("img_uploaded-->", response?.data?.data[0]);
      //   setLoader(false);
      //   method({ age: data?.age, idCard: response?.data?.data[0] });
      //   // method({ age: data?.age });
      // } else {
      //   method({ age: data?.age });
      // }
      if (img) {
        setLoader(true)
        const url = await uploadImage(img);
        console.log("uploadImage-->", url);
        setLoader(false);
        setError("")
        method({ age: data?.age, idCard: url });
        //  method({ age: data?.age });
      } else {
        method({ age: data?.age });
        setError("")
      }

    } catch (error) {
      console.log("error-->", error)
      setError("")
    }
  }

  }
  return (
    <>
      <div onClick={() => data?.card ? "" : method(data?.age)} className={`${styles.container} p-4 border`}>
        <h5 className='text-center'>{data?.age}</h5>
        <p className='text-center'>{data?.text}</p>
        {
          data?.card && (
            <div className={`${styles.license_container}  mt-5 text-center`}>
              <FaRegAddressCard className={`${styles.icon}`} />
              <p className='mt-3'>USA Resident must attach their insurance ID card, other international customer does not required to attached Insurance info, if you have further question on insurance call or email our office</p>
              {/* <form onSubmit={() => method(data?.age)}> */}
              <form onSubmit={handleForm}>
                <input type="file" accept='image/*' multiple={false} onChange={handleImage} />
                <div className='text-end'>
                  {loader ?
                    <button className='btn btn-outline-dark disabled' disabled>loading...</button>
                    :
                    <input className={`${styles.next_btn} btn btn-outline-dark`} type="submit" value="next" />
                  }
                </div>
                {error && <span className='text-danger'>{error}</span>}
              </form>
            </div>
          )
        }
      </div>
    </>
  )
}

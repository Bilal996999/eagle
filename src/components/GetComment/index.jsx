import React, { useState } from 'react'
import styles from './getComment.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { updatePayload, updatePersonalView, updateProgressBarValue } from '../../store/formSlice';
import { FaArrowLeft } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import instance from '../../../axiosConfig';
export const GetComment = () => {
    const dispatch = useDispatch();
    const finalPayload = useSelector(state => state?.form?.payload);
    console.log("final payload-->", finalPayload);
    const navigate = useNavigate();
    const [additionalComment, setAdditionalComment] = useState('');
    // /api/form/sendDetail
         
        const handleForm = async (e) => {
            e.preventDefault();
            dispatch(updateProgressBarValue(100));
            dispatch(updatePayload({additionalComment:additionalComment}))

            // try {
            //     console.log(finalPayload,"in try")
            //     const response = await instance.post("/api/form/sendDetail", finalPayload);
            //     console.log("response", response);
            // } catch (error) {
            //     console.log("error --> ", error)
            // }

            dispatch(updatePersonalView("payment"))
        }
        const handleBack = () => {
            dispatch(updateProgressBarValue(60));
            dispatch(updatePersonalView('phone'))
            }
        return (
            <>
                <div className='p-4'>
                    <FaArrowLeft style={{ cursor: "pointer" }} onClick={handleBack} />
                </div>

                <div className={`${styles.container} d-flex justify-content-center align-items-center text-center`}>
                    <div className={`${styles.content}`}>
                        <h4>Do you have any additional requests comments or requests?</h4>
                        <span>To arrange an airport pickup, please leave your flight number arriving at SFO</span>
                        <form onSubmit={handleForm} className={`${styles.form_container} mt-4`}>
                            <textarea required name="additionalComment" placeholder='Enter any additional requests or comments' onChange={(e) => setAdditionalComment(e.target.value)} id="" cols="20" rows="5"></textarea>
                            <br />
                            <input type="submit" value="Next" className={`${styles.btn} mt-3`} />
                        </form>
                    </div>
                </div>

            </>
        )
    }

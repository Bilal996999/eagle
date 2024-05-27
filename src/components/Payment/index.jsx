import React, { useEffect, useState } from 'react';
import styles from './payment.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { FaArrowLeft } from 'react-icons/fa6';
import { changePayload, updateCurrentView, updatePersonalView, updateProgressBarValue } from '../../store/formSlice';
import { useNavigate } from 'react-router-dom';
import { CardElement, Elements, useElements, useStripe } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import instance from '../../../axiosConfig';
import axios from 'axios';
import { PaymentElement } from './PaymentElement';
import { PaymentSuccess } from '../../Views/PaymentSuccess';

export const Payment = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const finalPayload = useSelector(state => state.form.payload);
  console.log("final", finalPayload)
  const [clientSecret, setClientSecret] = useState('');
  const [formData, setFormData] = useState({
    brand: '',
    number: '',
    exp_month: '',
    exp_year: '',
    cvv: '',
    last4: '',
    first6: '',
    email: finalPayload?.email
  });
  const [errors, setErrors] = useState({});
  const [loader, setLoader] = useState(false);
  const [validation, setValidation] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error message when user starts typing again
    setErrors({ ...errors, [name]: '' });
    setValidation('')
  };
  // const stripePromise = loadStripe('pk_test_51NcVn9JYpq3pSdliviy3CU7AZ4hpgGczrSbysNSRqlw1FbZ6WM6PhfKF5q9SZX8jKCzk0wnrUcaDtfrpiZGkT0AG00FqyqcxKW');
  const stripePromise = loadStripe('pk_test_51OrQ9LEEPukD6sMdq5OXkxqPgbS41tw4SXyXcUHxiwLlVJJKhxrvKGR8yVahKLBtUtvxAtNOQdj7VXAGUMVxFv5Q00zkrndYmn');

  const handleBack = () => {
    dispatch(updateProgressBarValue(80));
    dispatch(updatePersonalView("comment"))
  }

  // for clover start
  const [loading, setLoading] = useState(false);
  const [isPayment, setIsPayment] = useState(false);

  const handlePayment = async () => {
    try {
      setLoading(true);
      const response = await instance.post('/api/clover/create_order', {
        amount: 200 // Fixed amount for payment
      });
      console.log(response.data); // Handle success response
      // Redirect user to the payment page provided by Clover
      window.location.href = response.data.paymentUrl;
    } catch (error) {
      console.error('Payment failed:', error.response.data); // Handle error
    } finally {
      setLoading(false);
    }
  };
  // for clover end
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    setValidation('')
    if (Object.keys(validationErrors).length === 0) {
      try {
        setLoader(true);
        console.log(formData);
        const response = await instance.post('/api/clover/create_order', {formData,finalPayload});
        console.log(response.data);
        setLoader(false);

        // ------------------------------------------------------
        dispatch(updateCurrentView("duration"));
        dispatch(updatePersonalView("payment"));
        setIsPayment(true);
        alert("submitted");
        dispatch(changePayload({}));
        // navigate("/payment-successful")


      } catch (error) {
        console.log(error, "api_error");
        setValidation("Ivalid Card Details")
        setLoader(false);
      }
    } else {
      setErrors(validationErrors);
    }
  };
  const validateForm = (formData) => {
    let errors = {};

    if (!formData.brand) {
      errors.brand = 'Please select a brand';
    }

    if (!formData.number) {
      errors.number = 'Please enter a card number';
    } else if (formData.number.length < 16) {
      errors.number = 'Card number must be 16 digits';
    }

    if (formData?.exp_month.length != 2) {
      errors.exp_month = 'Expiration month must be 2 digits';
    }

    if (formData.exp_year.length != 2 && formData.exp_year.length != 4) {
      errors.exp_year = 'Expiration year must be 2 digits or 4 digits';
    }

    if (!formData.cvv) {
      errors.cvv = 'Please enter CVV';
    }

    return errors;
  };
  return (
    <>
    { isPayment ? <PaymentSuccess /> : <>
      <div className='p-4'>
        <FaArrowLeft style={{ cursor: "pointer" }} onClick={handleBack} />
      </div>

      <div className={`${styles.container} d-flex justify-content-center align-items-center`}>
        {/* <div className={`${styles.content}`}>
          <h4>Reserve Now, Pay Later</h4>
          <span className={`${styles.span_container}`}>DONT WORRY WE WILL NOT CHARGE YOUR CREDIT CARD FOR THE WHOLE AMOUNT RIGHT NOW, WE HOLD $200 DEPOSIT FOR RESERVATION IN CASE OF NO SHOW, DEPOSIT IS NON REFUNDABLE</span>

          <Elements stripe={stripePromise}>
            <PaymentElement />
          </Elements>
        </div> */}
        {/* <button onClick={handlePayment} disabled={loading}>
        {loading ? 'Processing...' : 'Pay $200'}
      </button> */}
          <div>
            <h2>Credit Card Information</h2>
            <p style={{ fontSize: "14px" }}>RESERVE NOW AND PAY LATER
              DONT WORRY WE WILL NOT CHARGE YOUR CREDIT CARD FOR THE WHOLE AMOUNT RIGHT NOW, WE HOLD $200 DEPOSIT FOR RESERVATION IN CASE OF NO SHOW, DEPOSIT IS NON REFUNDABLE</p>
            <form className={`${styles.form_container}`} onSubmit={handleSubmit}>
              <div className={`${styles.field_container}`}>
                <label htmlFor="number">Card Number:</label>
                <input type="text" name="number" id="number" placeholder='XXXXXXXXXXXXXXXX' onChange={handleChange} value={formData.number} required />
                <span className="error text-danger">{errors.number}</span>
              </div>
              <div className={`${styles.field_container}`}>
                <label htmlFor="brand">Brand:</label>
                <select name="brand" id="brand" onChange={handleChange} value={formData.brand} required>
                  <option value="">Select a brand</option>
                  <option value="VISA">VISA</option>
                  <option value="MC">Mastercard</option>
                  <option value="JCB">JCB</option>
                  <option value="DINERS_CLUB">Diners Club</option>
                  <option value="DISCOVER">Discover</option>
                  <option value="AMEX">American Express</option>
                </select>
                <span className="error text-danger">{errors.brand}</span>
              </div>
              <div className={`${styles.field_container}`}>
                <label htmlFor="exp_month">Expiration Month:</label>
                <input type="text" name="exp_month" id="exp_month" placeholder='mm' onChange={handleChange} value={formData.exp_month} required />
                <span>Card expiration month in 2-digit format.</span>
                <span className="error text-danger">{errors.exp_month}</span>
              </div>
              <div className={`${styles.field_container}`}>
                <label htmlFor="exp_year">Expiration Year:</label>
                <input type="text" name="exp_year" id="exp_year" placeholder='yy or yyyy' onChange={handleChange} value={formData.exp_year} required />
                <span>Card expiration year in 2- or 4-digit format.</span>
                <span className="error text-danger">{errors.exp_year}</span>
              </div>
              <div className={`${styles.field_container}`}>
                <label htmlFor="cvv">CVV:</label>
                <input type="text" name="cvv" id="cvv" placeholder='123' onChange={handleChange} value={formData.cvv} required />
                <span className="error text-danger">{errors.cvv}</span>
                <span>Card verification value (CVV). A 3-digit value printed on a card.</span>
              </div>
              <div className={`${styles.field_container}`}>
                <label htmlFor="first6">First 6:</label>
                <input type="text" name="first6" id="first6" placeholder='XXXXXX' onChange={handleChange} value={formData.first6} required />
                <span>First 6 numbers of the primary account number.</span>
                <span className="error text-danger">{errors.cvv}</span>
              </div>
              <div className={`${styles.field_container}`}>
                <label htmlFor="last4">Last 4:</label>
                <input type="text" name="last4" id="last4" placeholder='XXXX' onChange={handleChange} value={formData.last4} required />
                <span>Last 4 numbers of the primary account number.</span>
                <span className="error text-danger">{errors.cvv}</span>
              </div>
              <div className={`${styles.btn_container} mb-5`}>
                {loader ?
                  <button class={`btn`} type="button" disabled>
                    <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
                    &nbsp; <span role="status">Paying...</span>
                  </button>
                  :
                  <button type="submit" >Pay Now</button>
                }
              {validation && <p className='text-danger'>{validation}</p>}
              </div>


            </form>
          </div>
      </div>
      </>}
    </>
  )
}












//   // ------------------------------------------------------
//   // dispatch(updatePersonalView("complete"))
//   // dispatch(updateCurrentView("duration"))
//   alert("submitted")
//   // dispatch(changePayload({}))
//   // navigate("/")



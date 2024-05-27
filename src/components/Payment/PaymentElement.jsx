import React from 'react'
import styles from './payment.module.css'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import instance from '../../../axiosConfig';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changePayload, updateCurrentView, updatePersonalView } from '../../store/formSlice';

export const PaymentElement = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const stripe = useStripe();
    const element = useElements();
    const handleForm = async (e) => {
        e.preventDefault();

        // Assuming you've loaded Stripe earlier (or await here)

        // const { paymentIntent, error } = await stripe.confirmCardPayment(clientSecret, {
        //   payment_method: {
        //     card: elements.getElement(CardElement), // Correct way to access CardElement
        //   },
        // });

        // if (!stripe || !element) {
        //     return null;
        // }
        // const cardElement = await element.getElement(CardElement);
        // const paymentMethod = await stripe.createPaymentMethod("card", cardElement);
        // const token = await stripe.createToken(cardElement);

        // console.log(paymentMethod, "paymentMethod");
        // console.log(token, "token");

        // try {
        //   const response = await instance.post('/api/payment/create-payment-intent', {
        //         email: "demo@example.com",
        //         paymentMethod: paymentMethod.paymentMethod.id,
        //         tokenId: token.token.id
        //   })
        //   console.log(response)
        // } catch (error) {
        //   console.log("error-->",error)
        // }
        // ------------------------------------------------------
        dispatch(updatePersonalView("complete"))
        dispatch(updateCurrentView("duration"))
        alert("submitted")
        dispatch(changePayload({}))
        navigate("/")
    };
    const cardElementOptions = {
        style: {
            base: {
                fontSize: '16px',
                color: '#000',
                backgroundColor: '#fff',
                '::placeholder': {
                    color: '#999999',
                },
            },
            invalid: {
                color: 'red',
            },
        },
    };
    return (
        <>
            <form onSubmit={handleForm} className={`${styles.form_container} mt-4`}>
                {/* <input type="text" placeholder='Card Number' required /> */}
                <div className={`${styles.card_sec}`}>
                    <CardElement options={cardElementOptions} />
                </div>
                <br />
                <img className={`${styles.img_container}`} src="https://supercheapcar.com/images/acceptance_logos.svg" alt="" />
                <br />
                <input type="submit" value="Reserve" className={`${styles.btn} mt-3`} />
            </form>
        </>
    )
}

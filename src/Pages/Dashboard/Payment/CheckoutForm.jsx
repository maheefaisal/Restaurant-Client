import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import axios from "axios";
import useAuth from "../../../hooks/useAuth";


const CheckoutForm = ({ price }) => {
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useAuth()
    const [axiosSecure] = useAxiosSecure()
    const [cardError, setCardError] = useState('')
    const [clientSecret, setClientSecret] = useState('')
    useEffect(() => {
        axiosSecure.post('/create-payment-intent', { price })
            .then(res => {
                setClientSecret(res.data.clientSecret)
            })
    }, [price, axiosSecure])
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return
        }
        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }

        const { error: confirmError, paymentMethod } = await stripe.createPaymentMethod(
            clientSecret,
            {
                paymentMethod: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'anonymous user',
                        name: user?.displayName || 'anonymous user',
                    }
                }
            }
        );

        if (confirmError) {
            console.log(confirmError);
        }
        if (error) {
            console.log('error', error)
            setCardError(error.message)
        }
        else {
            setCardError()

            console.log('paymentMethod', paymentMethod)
        }
    }
    return (
        <div>
            <form className="w-2/3 m-8" onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="btn btn-outline btn-primary btn-sm mt-4  " type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </form>
            {cardError && <p className="text-red-600 ml-8">{cardError}</p>}
        </div>
    );
};

export default CheckoutForm;
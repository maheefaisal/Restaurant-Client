import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import axios from "axios";
import useAuth from "../../../hooks/useAuth";


const CheckoutForm = ({ cart, price }) => {
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useAuth()
    const [axiosSecure] = useAxiosSecure()
    const [cardError, setCardError] = useState('')
    const [clientSecret, setClientSecret] = useState('')
    const [processing, setPorcessing] = useState(false)
    const [transactionId, setTransactionId] = useState('')
    useEffect(() => {
        axiosSecure.post('/create-payment-intent', { price })
            .then(res => {
                setClientSecret(res.data.clientSecret)
            })
    }, [axiosSecure])
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return
        }
        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }
        if (error) {
            console.log('error', error)
            setCardError(error.message)
        }
        else {
            setCardError()

            // console.log('paymentMethod', paymentMethod)
        }

        setPorcessing(true)

        const { error: confirmError, paymentIntent } = await stripe.createPaymentMethod(
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
        setPorcessing(false);
        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id)

            const payment = { email: user?.email, transactionId: paymentIntent.id, price, quantity: cart.length, items: cart.map(item => item._id), itemNames: cart.map(item => item.name), }
            axiosSecure.post('/payments', payment)
                .then(res => {
                    console.log(res)
                    if (res.data.inserted) {
                        //display confirm
                    }
                })
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
                <button className="btn btn-outline btn-primary btn-sm mt-4  " type="submit" disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
            {cardError && <p className="text-red-600 ml-8">{cardError}</p>}
            {transactionId && <p className="text-red-600 ml-8">{transactionId}</p>}
        </div>
    );
};

export default CheckoutForm;
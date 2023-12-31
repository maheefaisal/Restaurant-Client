import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import useCart from "../../../hooks/useCart";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateaway_PK)

const Payment = () => {

    const [cart] = useCart()
    const total = cart.reduce((sum, item) => sum + item.price, 0)
    const price = parseFloat(total.toFixed(2))
    return (
        <div>
            <SectionTitle subHeading={"Please Provide"} heading={"Payment"} ></SectionTitle>
            <h2 className="text-3xl">Money Ohhhhh Money</h2>
            <Elements stripe={stripePromise}>
                <CheckoutForm cart={cart} price={price} />

            </Elements>
        </div>
    );
};

export default Payment;
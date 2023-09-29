import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateaway_PK)
const Payment = () => {
    return (
        <div>
            <SectionTitle subHeading={"Please Provide"} heading={"Payment"} ></SectionTitle>
            <h2 className="text-3xl">Money Ohhhhh Money</h2>
            <Elements stripe={stripePromise}>
                <CheckoutForm />

            </Elements>
        </div>
    );
};

export default Payment;
import { Helmet } from "react-helmet-async";
import useCart from "../../../hooks/useCart";


const MyCart = () => {
    const [cart] = useCart()
    console.log(cart)
    // This is reduce function
    const total = cart.reduce((sum, item) => item.price + sum, 0)
    return (
        <div>
            <Helmet>
                <title>Resturant | Mycart</title>
            </Helmet>
            <div className="uppercase">
                <h2 className="text-3xl">
                    Total Items: {cart.length}
                </h2>
                <h2 className="text-3xl">
                    Total Price: ${total}
                </h2>
                <button className="btn btn-warning bt-sm px-[120px]">pay</button>
            </div>

        </div>
    );
};

export default MyCart;
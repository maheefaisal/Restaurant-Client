import { useContext } from "react";
import { AuthContext } from "../../Providers/Authprovider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";



const FoodCard = ({ item }) => {

    const { image, price, name, recipe, _id } = item;
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const handleAddToCart = item => {
        console.log(item)
        if (user && user.email) {
            const cardItem = { menuItemId: _id, name, image, price, email: user.email }
            fetch('http://localhost:5000/carts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(cardItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Food added to the cart.',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please Login To order food',
                icon: 'success',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }

    }

    return (

        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>

            <p className=" absolute right-0 rounded-sm m-2 px-6 py-2 bg-slate-800 text-white ">${price}</p>
            <div className="card-body text-center flex flex-col items-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button onClick={() => handleAddToCart(item)} className="btn btn-outline text-black border-0 border-b-4 bg-slate-400">Buy Now</button>
                </div>
            </div>
        </div>);
};

export default FoodCard;
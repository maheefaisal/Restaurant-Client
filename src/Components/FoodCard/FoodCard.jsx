


const FoodCard = ({ item }) => {
    
    const { image, price, name, recipe } = item;

    return (

        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>

            <p className=" absolute right-0 rounded-sm m-2 px-6 py-2 bg-slate-800 text-white ">${price}</p>
            <div className="card-body text-center flex flex-col items-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-outline text-black border-0 border-b-4 bg-slate-400">Buy Now</button>
                </div>
            </div>
        </div>);
};

export default FoodCard;
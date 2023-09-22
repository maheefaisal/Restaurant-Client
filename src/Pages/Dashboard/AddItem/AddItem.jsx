import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { useForm } from 'react-hook-form';


const AddItem = () => {


    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {

        console.log(data)
    };
    console.log(errors);
    return (

        <>
            <div className="w-full px`-10">
                <SectionTitle subHeading={"What is new?"} heading={"Add an item"}> </SectionTitle>

                <form onSubmit={handleSubmit(onSubmit)}>

                    {/* Input  */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text font-semibold">Recipe Name</span>

                        </label>
                        <input type="text" placeholder="Recipe Name here" className="input input-bordered w-full max-w-xs"
                            {...register("name", { required: true, maxLength: 180 })} />

                    </div>

                    {/* Select */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label ">
                            <span className="label-text font-semibold">Category</span>
                        </label>
                        <select className="select select-bordered" {...register("category", { required: true })}>
                            <option disabled selected>Pick one</option>
                            <option>Pizza</option>
                            <option>Soup</option>
                            <option>Salad</option>
                            <option>Drinks</option>
                            <option>Desert</option>

                        </select>

                    </div>

                    {/* Price */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text font-semibold">Price</span>

                        </label>
                        <input type="number" placeholder="Type here" className="input input-bordered w-full max-w-xs" {...register("price", { required: true })} />

                    </div>

                    {/* Recipe Detail */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Recipe Detail</span>

                        </label>
                        <textarea {...register("details", { required: true })} className="textarea textarea-bordered h-24" placeholder="Detials About Recipe"></textarea>

                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Item Image*</span>

                        </label>
                        <input type="file" className="file-input file-input-bordered w-full max-w-xs" />

                    </div>

                    <input type="submit" value="Add Item" className="btn btn-sm mt-4" />

                </form>
            </div>

        </>);
};

export default AddItem;
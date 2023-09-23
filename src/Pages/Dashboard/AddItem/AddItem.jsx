import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { useForm } from 'react-hook-form';

const image_hosting_token = import.meta.env.VITE_Image_Upload_Token
const AddItem = () => {


    const { register, handleSubmit, formState: { errors } } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`
    const onSubmit = data => {
        const formData = new FormData()
        formData.append('image', data.image[0])
        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                if (imgResponse.success) {
                    const imgURL = imgResponse.data.display_url
                    const { name, price, category, recipe } = data
                    const newItem = { name, price:parseFloat(price), category, recipe ,image:imgURL}
                    console.log(newItem);
                }
            })
    };
    console.log(errors);
    console.log(image_hosting_token)
    return (

        <>
            <div className="w-full px-10">
                <SectionTitle subHeading={"What is new?"} heading={"Add an item"}> </SectionTitle>

                <form onSubmit={handleSubmit(onSubmit)}>

                    {/* Input  */}
                    <div className="form-control w-full  ">
                        <label className="label mb-4">
                            <span className="label-text font-semibold">Recipe Name</span>

                        </label>
                        <input type="text" placeholder="Recipe Name here" className="input input-bordered w-full  "
                            {...register("name", { required: true, maxLength: 180 })} />

                    </div>

                    <div className="flex ">
                        {/* Category */}
                        <div className="form-control w-full  ">
                            <label className="label ">
                                <span className="label-text font-semibold">Category*</span>
                            </label>
                            <select defaultValue={"Pick One"} className="select select-bordered" {...register("category", { required: true })}>
                                <option disabled >Pick One</option>
                                <option>Pizza</option>
                                <option>Soup</option>
                                <option>Salad</option>
                                <option>Drinks</option>
                                <option>Desert</option>

                            </select>

                        </div>

                        {/* Price */}
                        <div className="form-control w-full ml-4 ">
                            <label className="label">
                                <span className="label-text font-semibold">Price*</span>

                            </label>
                            <input type="number" placeholder="Type here" className="input input-bordered w-full  " {...register("price", { required: true })} />

                        </div>

                    </div>
                    {/* Recipe Detail */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Recipe Detail</span>

                        </label>
                        <textarea {...register("recipe", { required: true })} className="textarea textarea-bordered h-24" placeholder="Detials About Recipe"></textarea>

                    </div>

                    <div className="form-control w-full  ">
                        <label className="label">
                            <span className="label-text">Item Image*</span>

                        </label>
                        <input type="file" className="file-input file-input-bordered w-full  "
                            {...register("image", { required: true })} />

                    </div>

                    <input type="submit" value="Add Item" className="btn btn-sm mt-4" />

                </form>
            </div>

        </>);
};

export default AddItem;
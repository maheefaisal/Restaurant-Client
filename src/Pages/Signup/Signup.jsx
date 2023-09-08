import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/Authprovider";
import Swal from "sweetalert2";



const Signup = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser, profile } = useContext(AuthContext)
    const navigate = useNavigate();
    const onSubmit = data => {
        console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser)
                profile(data.name, data.photoURL)
                    .then(() => {
                        const saveUser = { name: data.name, email: data.email }
                        fetch('http://localhost:5000/users', {
                            method: "POST",
                            headers: {
                                'content-type': 'application/json',
                            },
                            body: JSON.stringify(saveUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    reset()
                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'User Information is updated...',
                                        showConfirmButton: false,
                                        timer: 1500
                                    })
                                    navigate('/')
                                }
                            })

                    })
                    .catch(error => console.log(error))
            })
            .catch((err) => {
                console.log(err);
            });

    };

    return (
        <>

            <Helmet>
                <title>Resturant | SignUp</title>
            </Helmet>
            <div>
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl font-bold">SignUp now!</h1>
                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" {...register("name", { required: true })} name="name" placeholder="Name" className="input input-bordered" />
                                    {errors.name && <span>Name is required</span>}

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo-Url</span>
                                    </label>
                                    <input type="text" {...register("photoURL", { required: true })} placeholder="Photo-URL" className="input input-bordered" />
                                    {errors.photoURL && <span>Photo-URL is required</span>}

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" name="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                                    {errors.email && <span>Email is required</span>}

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name="password" {...register("password", { required: true, maxLength: 20, minLength: 6 })} placeholder="password" className="input input-bordered" />
                                    {errors.password?.type === "maxLength" && <span className="text-red-700">Max-length is 20</span>}
                                    {errors.password?.type === "minLength" && <span className="text-red-700">Min-length is 6</span>}


                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <input className="btn btn-primary" type="submit" value="SignUp" />

                                </div>
                            </form>
                            <p> <small>Have an <span className="text-green-500 text-xl">account?</span>  <Link to="/login" className="btn btn-primary ">Log In</Link> </small></p>

                        </div>
                    </div>
                </div>
            </div>

        </>);
};

export default Signup;
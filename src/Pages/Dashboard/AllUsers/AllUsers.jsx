import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";


const AllUsers = () => {
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch(' http://localhost:5000/users ')
        return res.json()
    })


    const handleMakeAdmin= id=>{
        
    }

    const handleDlete = user => {


    }
    return (
        <>
            <div className="w-full">
                <Helmet>
                    <title>Resturant | All Users</title>
                </Helmet>

                <h3 className="text-3xl font-semibold my-4 ">Total Users:{users.length}</h3>
                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) => <tr key={user._id} >
                                    <th>{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{
                                        user.role === "admin" ? "admin" :
                                            <button onClick={() => handleMakeAdmin(user._id)} className="btn btn-ghost btn-lg bg-green-500 text-white hover:bg-red-700 " >

                                                <FaUserShield />
                                            </button>
                                    }</td>
                                    <td>
                                        <button onClick={() => handleDlete(user)} className="btn btn-ghost btn-lg bg-red-500 text-white hover:bg-red-700 " >

                                            <FaTrashAlt></FaTrashAlt>
                                        </button>

                                    </td>
                                </tr>)
                            }


                        </tbody>
                    </table>
                </div>
            </div>

        </>

    );
};

export default AllUsers;
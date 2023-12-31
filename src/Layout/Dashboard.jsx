import { NavLink, Outlet } from "react-router-dom";
import { FaBook, FaCalendarAlt, FaHome, FaShoppingCart, FaUsers, FaUtensils, FaWallet } from "react-icons/fa"
import { ImMenu } from "react-icons/im";
import { RxCardStackPlus } from "react-icons/rx";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
    const [cart] = useCart()

    const isAdmin = useAdmin()

    return (
        <>

            <div className="drawer lg:drawer-open ">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side bg-[#D1A054]">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full   ">

                        {
                            isAdmin ? <>
                                {/* Sidebar content here */}
                                <li ><NavLink to="/dashboard/adminhome"><FaHome></FaHome> Admin Home</NavLink></li>
                                <li><NavLink to="/dashboard/addItem"><FaUtensils></FaUtensils> Add Items</NavLink></li>

                                <li><NavLink to="/dashboard/manageItems"><FaWallet></FaWallet>Manage Items</NavLink></li>
                                <li><NavLink to="/dashboard/history"><FaBook /> Manage Bookings</NavLink></li>
                                <li><NavLink to="/dashboard/allUsers"><FaUsers></FaUsers>All Users</NavLink></li>

                            </> : <>

                                {/* Sidebar content here */}
                                <li ><NavLink to="/dashboard/userhome"><FaHome></FaHome> Home</NavLink></li>
                                <li><NavLink to="/dashboard/reservation"><FaCalendarAlt /> Reservations</NavLink></li>
                                <li >
                                    <NavLink to="/dashboard/mycart">
                                        <FaShoppingCart></FaShoppingCart>My Cart
                                        <span className="badge  badge-secondary">+{cart?.length || 0}</span>
                                    </NavLink>

                                </li>
                                <li><NavLink to="/dashboard/history"><FaWallet></FaWallet>Payment History</NavLink></li>

                            </>
                        }


                        <div className="divider"></div>

                        <li><NavLink to="/"><FaHome></FaHome>Home</NavLink></li>
                        <li>
                            <NavLink to="/menu"><ImMenu /> Our Menu</NavLink>
                        </li>

                        <li>
                            <NavLink to={"/order/salad"}><RxCardStackPlus></RxCardStackPlus>Order</NavLink>
                        </li>
                    </ul>

                </div>
            </div></>
    );
};

export default Dashboard;
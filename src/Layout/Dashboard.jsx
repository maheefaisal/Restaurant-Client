import { NavLink, Outlet } from "react-router-dom";
import { FaCalendarAlt, FaHome, FaShoppingCart, FaWallet } from "react-icons/fa"
import { ImMenu } from "react-icons/im";
import { RxCardStackPlus } from "react-icons/rx";
import { Helmet } from "react-helmet-async";

const Dashboard = () => {
    return (
        <>

            <div className="drawer lg:drawer-open ">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side bg-[#D1A054]">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full   ">
                        {/* Sidebar content here */}
                        <li ><NavLink to="/dashboard/home"><FaHome></FaHome> Home</NavLink></li>
                        <li><NavLink to="/dashboard/reservation"><FaCalendarAlt /> Reservations</NavLink></li>
                        <li><NavLink to="/dashboard/mycart"><FaShoppingCart></FaShoppingCart>My Cart</NavLink></li>
                        <li><NavLink to="/dashboard/history"><FaWallet></FaWallet>Payment History</NavLink></li>
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
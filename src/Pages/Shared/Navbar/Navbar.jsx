import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/Authprovider";
import { FaShoppingCart } from 'react-icons/fa';
import useCart from "../../../hooks/useCart";
import useAdmin from "../../../hooks/useAdmin";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext)
  const [cart] = useCart()
  const [isAdmin] = useAdmin()
  const handleLogout = () => {
    logOut()
      .then(() => { })
      .catch(error => console.log(error))
  }

  const navOptions = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/menu">Our Menu</Link>
      </li>

      <li>
        <Link to={"/order/salad"}>Order</Link>
      </li>
      <li>
        <Link to={"/contactus"}>ContactUs</Link>
      </li>
      {
        isAdmin ? <li>
          <Link to="/dashboard/adminhome">Dashboard</Link>
        </li> :
          <li>
            <Link to="/dashboard/userhome">Dashboard</Link>
          </li>
      }
      <li>
        <Link to={"/dashboard/mycart"}>
          <button className="btn">
            <FaShoppingCart />
            <div className="badge badge-secondary">+{cart?.length || 0}</div>
          </button>
        </Link>
      </li>

      {
        user ? <>
          <button onClick={handleLogout} className="btn btn-ghost">Logout</button>
        </> : <>
          <li>
            <Link to={"/login"}>Login</Link>
          </li>
        </>
      }
    </>
  );
  return (
    <>
      <div className="sticky top-0 z-50 backdrop-blur-md backdrop-opacity-70">
        <div className="navbar bg-opacity-20 bg-base-100 backdrop-filter backdrop-blur-md">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {navOptions}
              </ul>
            </div>
            <a className="btn btn-ghost normal-case text-xl">
              <span className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text text-2xl">
                Mahee
              </span>
              <span className="text-red-600">Resturant</span>{" "}
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navOptions}</ul>
          </div>
          <div className="navbar-end">
            <a className="btn">Button</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

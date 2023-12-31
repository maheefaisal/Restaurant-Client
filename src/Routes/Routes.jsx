import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import Secret from "../Pages/Shared/Secret/Secret";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../Pages/Dashboard/Mycart/MyCart";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AddItem from "../Pages/Dashboard/AddItem/AddItem";
import AdminRoute from "./AdminRoute";
import ManageItems from "../Pages/Dashboard/ManageItems/ManageItems";
import Payment from "../Pages/Dashboard/Payment/Payment";
import UserHome from "../Pages/Dashboard/UserHome/UserHome";
import AdminHome from "../Pages/Dashboard/AdminHome/AdminHome";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/menu",
        element: <Menu />
      },
      {
        path: "/order/:category",
        element: <Order />
      },
      {
        path: "/contactus",
        element: <ContactUs />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/signup",
        element: <Signup />
      },

      {
        path: "/secret",
        element: <PrivateRoute><Secret></Secret></PrivateRoute>
      },

    ],

  },
  {
    path: "/dashboard",
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
        path: 'userhome',
        element: <UserHome></UserHome>
      },
      {
        path: "mycart",
        element: <MyCart></MyCart>
      },
      {
        path: "payment",
        element: <Payment></Payment>
      },
      {
        path: "adminhome",
        element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
      },
      {
        path: "allUsers",
        element: <AdminRoute><AllUsers /></AdminRoute>
      },
      {
        path: "addItem",
        element: <AdminRoute><AddItem /></AdminRoute>
      },
      {
        path: "manageItems",
        element: <AdminRoute><ManageItems /></AdminRoute>
      },
    ]
  }
]);

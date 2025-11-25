import { createBrowserRouter } from "react-router";
import Root from "../root/Root";
import Home from "../pages/Home";
import Services from "../component/Services";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import PrivetRoute from "./PrivetRoute";
import ServiceDetails from "../pages/ServiceDetails";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/Services",
                element: <Services></Services>
            },
            {
                path: "/LogIn",
                element: <Login></Login>
            }
            ,
            {
                path: "/signup",
                element: <Register></Register>
            },
            {
                path: "/Profile",
                element: <PrivetRoute><Profile></Profile></PrivetRoute>
            }, {
                path: "/details/:Myid",
                element: <PrivetRoute><ServiceDetails></ServiceDetails></PrivetRoute>
            }
        ]
    },
]);

export default router;
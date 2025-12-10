import { createBrowserRouter } from "react-router";
import Root from "../root/Root";
import Home from "../pages/Home";
import Services from "../component/Services";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import PrivetRoute from "./PrivetRoute";
import ServiceDetails from "../pages/ServiceDetails";
import Forgetpass from "../pages/Forgetpass";
import Error from "../pages/Error";
import AddService from "../pages/AddService";
import MyService from "../pages/MyService";
import UpdateService from "../pages/UpdateService";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <Error></Error>,
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
            },
            {
                path: "/forget/:email",
                element: <Forgetpass></Forgetpass>
            },
            {
                path: "/add-services",
                element: <AddService></AddService>
            },
            {
                path: "/My-services",
                element: <MyService></MyService>
            },
            {
                path: "/Upadte-services/:id",
                element: <UpdateService></UpdateService>
            },
        ]
    },
]);

export default router;
import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../main layout/MainLayout.jsx";
import Home from "../pages/home/Home.jsx";
import Login from "../pages/login&register/Login.jsx";
import Registration from "../pages/login&register/Registration.jsx";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },{
                path: "/login",
                element: <Login></Login>
            },{
                path: "/register",
                element: <Registration></Registration>
            }
        ]
    }
]);
export default router;
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import NewsSection from "../pages/home/newsSection/NewsSection";
import Login from "../pages/login/Login";
import NewsDetails from "../pages/newsDetails/NewsDetails";
import Register from '../pages/register/Register';
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />,
                children: [
                    {
                        path: '/',
                        element: <NewsSection></NewsSection>,
                    },
                    {
                        path: '/newsDetails/:id',
                        element: <PrivateRoute><NewsDetails></NewsDetails></PrivateRoute>
                    }
                ]
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/register',
                element: <Register />
            }
        ]
        
    }
])

export default router;
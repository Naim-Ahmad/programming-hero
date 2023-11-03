import { createBrowserRouter } from "react-router-dom";
import AddProduct from "../components/addProduct/AddProduct";
import Cart from "../components/cart/Cart";
import Home from "../components/home/Home";
import Login from "../components/login/Login";
import Products from "../components/products/Products";
import Register from "../components/signup/Register";
import UpdateProducts from "../components/updateProducts/UpdateProducts";
import ProductDetails from "../components/viewDetails/ProductDetails";
import Layout from "../layout/Layout";
import NotFound from "./NotFound";
import PrivateRoute from './PrivateRoute';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <NotFound/>,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: ()=> fetch(`https://tech-pulse-pro-server-sz1lbn1zh-naim-ahmads-projects.vercel.app/brands`)
            },
            {
                path: '/addProduct',
                element: <PrivateRoute><AddProduct/></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/register',
                element: <Register/>
            },
            {
                path: '/myCart/:email',
                element: <PrivateRoute><Cart /></PrivateRoute>,
                loader: ({ params })=> fetch(`https://tech-pulse-pro-server-sz1lbn1zh-naim-ahmads-projects.vercel.app/carts/${params.email}`)
            },
            {
                path: '/products/:name',
                element: <Products />,
                loader: ({params})=> fetch(`https://tech-pulse-pro-server-sz1lbn1zh-naim-ahmads-projects.vercel.app/products/${params.name}`)
            },
            {
                path: '/viewDetails/:id',
                element: <PrivateRoute><ProductDetails /></PrivateRoute>,
                loader: ({params})=> fetch(`https://tech-pulse-pro-server-sz1lbn1zh-naim-ahmads-projects.vercel.app/product/${params.id}`)
            },
            {
                path: '/updateProducts/:id',
                element:<PrivateRoute> <UpdateProducts /></PrivateRoute>,
                loader: ({params})=> fetch(`https://tech-pulse-pro-server-sz1lbn1zh-naim-ahmads-projects.vercel.app/product/${params.id}`)
            },
        ]
    }
])

export default router;
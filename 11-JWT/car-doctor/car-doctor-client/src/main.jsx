import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import BookingList from "./components/BookingList/BookingList.jsx";
import AddService from "./components/addService/AddService.jsx";
import Checkout from "./components/checkout/Checkout.jsx";
import Home from "./components/home/Home.jsx";
import Login from "./components/login/Login.jsx";
import Register from "./components/register/Register.jsx";
import Services from "./components/services/Services.jsx";
import PrivateRoute from "./components/shared/PrivateRoute.jsx";
import AuthProvider from "./contexts/AuthProvider.jsx";
import "./index.css";
import Layout from "./layout/Layout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:5000/services"),
      },
      {
        path: "/servicesDetails",
        element: <Services />,
        loader: () => fetch("http://localhost:5000/services", {
          credentials: 'include'
        }),
      },
      {
        path: "/servicesDetails/:id",
        element: <Services />,
        loader: () => fetch("http://localhost:5000/services", {credentials: 'include'}),
      },
      {
        path: "/checkOut/:id",
        element:<PrivateRoute> <Checkout /></PrivateRoute>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`, {credentials: 'include'}),
      },
      {
        path: "/addService",
        element: (
          <PrivateRoute>
            <AddService />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/bookingList",
        element: (
          <PrivateRoute>
            <BookingList />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);

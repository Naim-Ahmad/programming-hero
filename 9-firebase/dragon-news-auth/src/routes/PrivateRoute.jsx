import PropTypes from 'prop-types';
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Loading from '../components/Loading';
import { AuthContext } from "../contexts/AuthProvider";

export default function PrivateRoute({ children }) {
    const { user, loading } = useContext(AuthContext)
    const { pathname } = useLocation()
    console.log(pathname)

    if (loading) {
        return <Loading className='col-span-3 text-center mt-10'/>
    }

    if (!user) {
       return <Navigate state={pathname} to='/login' />
    }
    return children;
}

PrivateRoute.propTypes = {
    children: PropTypes.node
}
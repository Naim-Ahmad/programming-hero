import PropTypes from 'prop-types';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../components/shared/Loading';
import { AuthContext } from '../contexts/AuthProvider';

function PrivateRoute({ children }) {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation()
    if (loading) {
        return <Loading />
    }
    if (user) {
        return children;
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>
}

PrivateRoute.propTypes = {
    children: PropTypes.node
}

export default PrivateRoute

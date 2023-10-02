import PropTypes from 'prop-types';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';

export default function ProtectedRoute({ children }) {
    const { user, loading } = useContext(AuthContext)
    if (loading) {
        return <span className="loading loading-ring loading-lg"></span>
    }
    if (user) {
        return children;
    }
    
  return <Navigate to="/login"/>
}

ProtectedRoute.propTypes = {
    children: PropTypes.node
}





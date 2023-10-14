import PropTypes from 'prop-types'
import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from "../contexts/AuthProvider"
import Loading from './Loading'


export default function ProtectedRoute({ children }) {
    const { user, loading } = useContext(AuthContext)

    if (loading) {
        return <Loading/>
    }

    if (!user) {
        return <Navigate to="/login" />
    }
  return children
}

ProtectedRoute.propTypes = {
    children: PropTypes.node
}

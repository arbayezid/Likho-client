import { useContext } from "react";
import { AuthContext } from "../pages/Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation()

    if (user) {
        return children
    }

    if (loading) {
        return <progress className="progress w-56"></progress>
    }

    return <Navigate to='/' state={{from: location}} replace></Navigate>
}
export default PrivateRoute;
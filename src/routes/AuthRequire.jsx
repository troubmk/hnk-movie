import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';   
import LoadingScreen from '../components/LoadingScreen';  

const AuthRequire = ({ children }) => {
    const { user, isLoading } = useAuth();
    const location = useLocation();

    if (isLoading) {
        return <LoadingScreen />;
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
};  

export default AuthRequire;
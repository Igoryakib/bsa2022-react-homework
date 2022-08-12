import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getIsAuthenticated } from "../redux/auth/auth-selectors";
import routes from './routes';

const PublicRoute = ({children}) => {
    const isAuthorized = useSelector(getIsAuthenticated);
    return !isAuthorized ? children : <Navigate to={routes.homePage}/>
};

export default PublicRoute;
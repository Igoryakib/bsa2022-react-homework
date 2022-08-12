import React from "react";
import { Navigate } from 'react-router-dom';
import routes from "../../utils/routes";

const NotFoundPage = () => {
    return(
        <Navigate to={routes.homePage}/>
    );
};


export default NotFoundPage;
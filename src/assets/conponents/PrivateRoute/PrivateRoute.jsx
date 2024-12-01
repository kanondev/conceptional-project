import React, { useContext } from 'react';
import { authContext } from '../AuthProvider/Authprovider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loading} =useContext(authContext);
    const location = useLocation()
    if(loading){
        return <h2>Loading.......</h2>
    }
    if(!user){
        return <Navigate state={{from:location.pathname}} to="/login"></Navigate>
    }
    return children
};

export default PrivateRoute;
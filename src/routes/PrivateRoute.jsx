
import React, { useContext, useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../components/providers/AuthProvider';

const PrivateRoute = ({children}) => {
    const location = useLocation();
    const path = location.pathname;
    // console.log("Private Path:",path);
   
    const {targetPath, setTargetPath} = useContext(AuthContext);
    
    useEffect(()=>{
        setTargetPath(path);

    },[path])
    // console.log('Target Path:', targetPath);
    const {user, loading}= useContext(AuthContext);
    if(loading){
        return <span className="loading loading-infinity loading-lg"></span>
    }
    if(user){
        return children;
    }
    return (
        <Navigate to={'/login'}></Navigate>
    );
};

export default PrivateRoute;

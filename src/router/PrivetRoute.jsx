import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvieder';
import { Navigate } from 'react-router';

const PrivetRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    if (loading) {
        return <p><span className="loading loading-dots loading-xl"></span></p>
    }
    if (user) {
        return children;
    }
    return <Navigate to={'/LogIn'}></Navigate>

};

export default PrivetRoute;
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AdminRoute = ({ children }) => {
    const { isAuthenticated, loading, user } = useSelector(state => state.auth);

    if (loading) {
        return <div>Loading...</div>;
    }

    return isAuthenticated && user?.role === 'admin' ? children : <Navigate to="/dashboard" />;
};

export default AdminRoute; 
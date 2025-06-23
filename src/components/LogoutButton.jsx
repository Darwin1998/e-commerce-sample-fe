import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../context/AuthContext.jsx";
import api from './lib/api';
import toast from 'react-hot-toast';

export default function LogoutButton() {
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await api.post('/v1/customer/logout', {}, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            });
        } catch (error) {
            console.error('Logout error:', error);
        }

        logout();
        toast.success('Logged out');
        navigate('/login');
    };

    return (
        <button
            onClick={handleLogout}
            className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition"
        >
            Logout
        </button>
    );
}

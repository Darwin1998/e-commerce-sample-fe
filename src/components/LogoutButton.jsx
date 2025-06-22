import React from 'react';
import { useNavigate } from 'react-router-dom';
import {useAuth} from "../context/AuthContext.jsx";
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
            // Even if API fails, proceed with logout
            console.error('Logout error:', error);
        }

        logout(); // clear token from context + localStorage
        toast.success('Logged out');
        navigate('/login');
    };

    return (
        <button
            onClick={handleLogout}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
        >
            Logout
        </button>
    );
}

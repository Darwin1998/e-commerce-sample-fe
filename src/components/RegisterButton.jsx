import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function RegisterButton() {
    const navigate = useNavigate();

    return (
        <button
            onClick={() => navigate('/register')}
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
        >
            Register
        </button>
    );
}

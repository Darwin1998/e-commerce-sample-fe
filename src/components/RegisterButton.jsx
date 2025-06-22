import React from 'react';
import {Link} from 'react-router-dom';

export default function RegisterButton() {
    return (
        <Link to="/register" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            Register
        </Link>
    );
}

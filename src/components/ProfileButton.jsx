import React from 'react';
import {Link} from 'react-router-dom';

export default function ProfileButton() {
    return (
        <Link to="/profile" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            Profile
        </Link>
    );
}
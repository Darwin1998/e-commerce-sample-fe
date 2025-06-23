import React from 'react';
import {Link} from 'react-router-dom';

export default function ProfileButton() {
    return (
        <Link to="/profile"   className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition">
            Profile
        </Link>
    );
}
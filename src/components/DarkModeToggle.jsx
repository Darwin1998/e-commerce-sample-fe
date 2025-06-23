// src/components/DarkModeToggle.jsx
import React, { useEffect, useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

export default function DarkModeToggle() {
    const [dark, setDark] = useState(() => {
        return localStorage.getItem('theme') === 'dark' ||
            (!('theme' in localStorage) &&
                window.matchMedia('(prefers-color-scheme: dark)').matches)
    });

    useEffect(() => {
        const root = document.documentElement;
        if (dark) {
            root.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            root.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [dark]);

    return (
        <div
            onClick={() => setDark(prev => !prev)}
            className="w-12 h-6 flex items-center bg-gray-300 dark:bg-gray-600 rounded-full p-1 cursor-pointer transition-all duration-300"
        >
            <div
                className={`w-5 h-5 flex items-center justify-center rounded-full text-white bg-yellow-400 dark:bg-gray-800 transform transition-transform duration-300 ${dark ? 'translate-x-6' : 'translate-x-0'}`}
            >
                {dark ? <FaMoon size={12} /> : <FaSun size={12} />}
            </div>
        </div>
    );
}

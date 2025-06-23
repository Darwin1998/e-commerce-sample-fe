// src/components/Footer.jsx
import React from 'react';

export default function Footer() {
    return (
        <footer className="bottom-0 left-0 w-full bg-gray-100 dark:bg-gray-900 text-center text-sm py-4 border-t border-gray-300 dark:border-gray-700 z-50">
            <div className="flex justify-center gap-6">
                <a href="#" className="hover:underline">About Us</a>
                <a href="#" className="hover:underline">Contact Us</a>
                <a href="#" className="hover:underline">Privacy Policy</a>
            </div>
        </footer>
    );
}

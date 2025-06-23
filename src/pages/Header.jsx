// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube, FaTiktok } from 'react-icons/fa';
import DarkModeToggle from "../components/DarkModeToggle.jsx";
import RegisterButton from "../components/RegisterButton.jsx";
import LoginButton from "../components/LoginButton.jsx";
import LogoutButton from "../components/LogoutButton.jsx";
import ProfileButton from "../components/ProfileButton.jsx";
import { useAuth } from '../context/AuthContext';

export default function Header() {
    const { isAuthenticated } = useAuth();

    return (
        <header className="sticky top-0 z-50 w-full">
            {/* Top Bar */}
            <div className="w-full bg-green-600 text-white text-sm">
                <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-4">
                    <div className="flex items-center gap-4">
                        <span>📞 (561) 12345-6789</span>
                        <span>✉️ testing@example.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <span>Follow Us:</span>
                        <a href="https://instagram.com" target="_blank" rel="noopener" aria-label="Instagram">
                            <FaInstagram className="h-5 w-5 text-white hover:text-gray-200 transition" />
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noopener" aria-label="Facebook">
                            <FaFacebook className="h-5 w-5 text-white hover:text-gray-200 transition" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener" aria-label="Twitter">
                            <FaTwitter className="h-5 w-5 text-white hover:text-gray-200 transition" />
                        </a>
                        <a href="https://youtube.com" target="_blank" rel="noopener" aria-label="YouTube">
                            <FaYoutube className="h-5 w-5 text-white hover:text-gray-200 transition" />
                        </a>
                        <a href="https://tiktok.com" target="_blank" rel="noopener" aria-label="Tiktok">
                            <FaTiktok className="h-5 w-5 text-white hover:text-gray-200 transition" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <div className="bg-white dark:bg-gray-700 shadow-md">
                <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-4">
                    <Link to="/" className="text-xl font-bold">ShoppaJobaa</Link>
                    <div className="flex items-center gap-4">

                        {isAuthenticated ? (
                            <>
                                <ProfileButton />
                                <LogoutButton />
                            </>
                        ) : (
                            <>
                                <RegisterButton />
                                <LoginButton />
                            </>
                        )}
                        <DarkModeToggle />
                    </div>
                </div>
            </div>
        </header>
    );
}

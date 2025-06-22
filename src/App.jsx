import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import ProductList from "./pages/product/ProductList.jsx";
import ProductDetail from "./pages/product/ProductDetail.jsx";
import Layout from "./components/layout/Layout.jsx";
import DarkModeToggle from './components/DarkModeToggle';
import RegisterButton from "./components/RegisterButton.jsx";
import Footer from './components/Footer.jsx';
import RegisterForm from "./pages/RegisterForm.jsx";
import LoginButton from "./components/LoginButton.jsx";
import LoginForm from "./pages/LoginForm.jsx";
import {Toaster} from "react-hot-toast";
import {useAuth} from "./context/AuthContext.jsx";
import LogoutButton from "./components/LogoutButton.jsx";
import ProfileButton from "./components/ProfileButton.jsx";
import ProfilePage from "./pages/customer/Profilepage.jsx";

export default function App() {
    const { isAuthenticated } = useAuth();

    return (
        <div className="flex flex-col min-h-screen bg-white text-black dark:bg-black dark:text-white transition-colors duration-300">
            <Toaster position="top-center" toastOptions={{ duration: 3000 }} />

            {/* Header */}
            <header className="sticky top-0 z-50 bg-white dark:bg-black shadow-md p-4">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <Link to="/products" className="text-xl font-bold">E-Commerce Sample</Link>
                    <div className="flex items-center gap-4">
                        <DarkModeToggle />
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

                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-grow pb-20"> {/* enough space for footer height */}
                <Routes>
                    <Route element={<Layout />}>
                        <Route path="/products" element={<ProductList />} />
                        <Route path="/products/:id" element={<ProductDetail />} />
                    </Route>
                    <Route path="/register" element={<RegisterForm />} />
                    <Route path="/login" element={<LoginForm />} />
                    <Route path="/profile" element={<ProfilePage />} />
                </Routes>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
}

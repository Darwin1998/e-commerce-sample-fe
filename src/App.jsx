import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import ProductList from "./pages/product/ProductList.jsx";
import ProductDetail from "./pages/product/ProductDetail.jsx";
import Layout from "./components/layout/Layout.jsx";
import Footer from './components/Footer.jsx';
import RegisterForm from "./pages/RegisterForm.jsx";
import LoginForm from "./pages/LoginForm.jsx";
import {Toaster} from "react-hot-toast";
import ProfilePage from "./pages/customer/Profilepage.jsx";
import Home from "./pages/Home.jsx";
import Header from "./pages/Header.jsx";


export default function App() {

    return (
        <div className="flex flex-col min-h-screen bg-white text-black dark:bg-black dark:text-white transition-colors duration-300">
            <Toaster position="top-center" toastOptions={{ duration: 3000 }} />

            {/* Header */}
            <Header />

            {/* Main Content */}
            <main className="flex-grow pb-20"> {/* enough space for footer height */}
                <Routes>
                <Route element={<Layout />}>
                        <Route path="/" element={<Home />} />
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

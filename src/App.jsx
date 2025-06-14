import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import ProductList from "./pages/product/ProductList.jsx";
import ProductDetail from "./pages/product/ProductDetail.jsx";
import Layout from "./components/layout/Layout.jsx";
import DarkModeToggle from './components/DarkModeToggle';
import RegisterButton from "./components/RegisterButton.jsx";
import Footer from './components/Footer.jsx';

export default function App() {
    return (
        <div className="flex flex-col min-h-screen bg-white text-black dark:bg-black dark:text-white transition-colors duration-300">

            {/* Header */}
            <header className="sticky top-0 z-50 bg-white dark:bg-black shadow-md p-4">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <Link to="/" className="text-xl font-bold">E-Commerce Sample</Link>
                    <div className="flex items-center gap-4">
                        <DarkModeToggle />
                        <RegisterButton />
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-grow pb-20"> {/* enough space for footer height */}
                <Routes>
                    <Route element={<Layout />}>
                        <Route path="/" element={<ProductList />} />
                        <Route path="/products/:id" element={<ProductDetail />} />
                    </Route>
                </Routes>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
}

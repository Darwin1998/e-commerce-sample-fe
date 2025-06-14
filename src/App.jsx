import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProductList from "./pages/product/ProductList.jsx";
import ProductDetail from "./pages/product/ProductDetail.jsx";
import Layout from "./components/layout/Layout.jsx";
import DarkModeToggle from './components/DarkModeToggle';

export default function App() {
    return (
        <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white transition-colors duration-300 relative">
            <DarkModeToggle />

            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<ProductList />} />
                    <Route path="/products/:id" element={<ProductDetail />} />
                </Route>
            </Routes>
        </div>
    );
}

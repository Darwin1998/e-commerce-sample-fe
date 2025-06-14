import DarkModeToggle from './components/DarkModeToggle'
import React from 'react'
import ProductList from "./pages/product/ProductList.jsx";
import {Route, Routes} from "react-router-dom";
import ProductDetail from "./pages/product/ProductDetail.jsx";

export default function App() {
    return (
        <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white transition-colors duration-300 relative">
            <DarkModeToggle />
            <div className="flex items-center justify-center h-full">
                <h1 className="text-2xl">Welcome to the App</h1>
            </div>
            <ProductList />
            <Routes>
                <Route path="/" element={<ProductList />} />
                <Route path="/products/:id" element={<ProductDetail />} />
            </Routes>

        </div>
    )
}

import React from 'react';
import { Link } from 'react-router-dom';
import FeaturedProducts from "./product/FeaturedProduct.jsx";
import ShopCategory from "./ShopCategory.jsx";
import Testimonials from "./Testimonials.jsx";

export default function Home() {
    return (
        <div>
            {/* Hero Section */}
            <section className="bg-green-500 dark:bg-green-800 text-white py-56 relative left-1/2 right-1/2 -mx-[50vw] w-screen">
                <div className="max-w-5xl mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Welcome to ShoppaJobaa
                    </h1>
                    <p className="text-lg md:text-xl mb-6">
                        Discover amazing products curated just for you.
                    </p>
                    <Link
                        to="/products"
                        className="inline-block bg-white text-indigo-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition"
                    >
                        Shop Now
                    </Link>
                </div>
            </section>

            {/* Featured Products */}
            <section className="py-16 bg-gray-50 dark:bg-gray-900">
                <div className="max-w-7xl mx-auto px-4">
                    <FeaturedProducts />
                    <ShopCategory />
                    <Testimonials />

                </div>
            </section>

        </div>
    );
}

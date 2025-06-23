import {Link} from "react-router-dom";
import React from "react";

export default function ShopCategory() {
    return (
        <section className="py-16 bg-blue-100 dark:bg-gray-800">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-2xl font-bold mb-6 text-center">Shop by Category</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {/* Each item links to filtered product list */}
                    <Link to="/products?category=clothing" className="bg-indigo-50 dark:bg-gray-700 rounded p-6 text-center hover:shadow transition">
                        👕 Clothing
                    </Link>
                    <Link to="/products?category=tech" className="bg-indigo-50 dark:bg-gray-700 rounded p-6 text-center hover:shadow transition">
                        📱 Tech
                    </Link>
                    <Link to="/products?category=accessories" className="bg-indigo-50 dark:bg-gray-700 rounded p-6 text-center hover:shadow transition">
                        👜 Accessories
                    </Link>
                    <Link to="/products?category=shoes" className="bg-indigo-50 dark:bg-gray-700 rounded p-6 text-center hover:shadow transition">
                        👟 Shoes
                    </Link>
                </div>
            </div>
        </section>
    );
}
// src/components/FeaturedProducts.jsx
import React, { useEffect, useState } from 'react';
import api from '../../components/lib/api.js'
import {Link} from "react-router-dom";

export default function FeaturedProducts() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetch = async () => {
            try {
                const res = await api.get('/v1/products/all?page=1');
                setProducts(res.data.data.slice(0, 4)); // take 4
            } catch (e) {
                console.error('Failed to fetch featured products', e);
            }
        };
        fetch();
    }, []);

    return (
        <div>
            <h2 className="text-2xl font-bold mb-10 text-center text-gray-800 dark:text-white">
                Featured Products
            </h2>
            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.map(product => (
                    <div key={product.id} className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 text-center">
                        <img
                            src={product.image || 'https://placehold.co/300x300'}
                            alt={product.name}
                            className="mx-auto mb-4 rounded"
                            style={{ width: '100%', height: '200px' , objectFit: 'contain'}} // uniform size

                        />
                        <h3 className="font-semibold text-lg">{product.name}</h3>
                        <p className="text-gray-600 dark:text-gray-300">₱{product.price}</p>
                    </div>
                ))}

            </section>
            <div className="text-center mt-10">
                <Link
                    to="/products"
                    className="inline-block text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium"
                >
                    View All Products →
                </Link>
            </div>
        </div>

    );
}

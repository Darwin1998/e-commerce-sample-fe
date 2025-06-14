// src/pages/home.jsx
import React, { useEffect, useState } from 'react'
import api from '../../components/lib/api.js'
import ProductCard from "../../components/product/ProductCard.jsx";

export default function ProductList() {
    const [products, setProducts] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {
        api.get('/v1/products/all')
            .then(res => {
                setProducts(res.data.data) // access the `data` array
            })
            .catch(err => {
                setError(err.message)
                console.error('API error:', err)
            })
    }, [])

    if (error) return <p className="text-red-500">Error: {error}</p>

    return (
        <div className="p-6 mt-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    )
}

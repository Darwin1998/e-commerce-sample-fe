import React, { useEffect, useState, useRef } from 'react';
import api from '../../components/lib/api.js';
import ProductCard from "../../components/product/ProductCard.jsx";

export default function ProductList() {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);
    const [lastPage, setLastPage] = useState(null);
    const [loading, setLoading] = useState(false);
    const loaderRef = useRef(null);

    const fetchProducts = async (pageNum = 1) => {
        if (loading) return;
        setLoading(true);
        try {
            const res = await api.get(`/v1/products/all?page=${pageNum}`);
            const { data, meta } = res.data;

            setProducts(prev => {
                const existingIds = new Set(prev.map(p => p.id));
                const newItems = data.filter(p => !existingIds.has(p.id));
                return [...prev, ...newItems];
            });

            setPage(meta.current_page);
            setLastPage(meta.last_page);
        } catch (err) {
            console.error('API error:', err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts(1);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                const first = entries[0];
                if (first.isIntersecting && !loading && page < lastPage) {
                    fetchProducts(page + 1);
                }
            },
            { threshold: 1 }
        );

        const currentLoader = loaderRef.current;
        if (currentLoader) observer.observe(currentLoader);

        return () => {
            if (currentLoader) observer.unobserve(currentLoader);
        };
    }, [page, lastPage, loading]);

    return (
        <>
            <div className="p-6 mt-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
            <div ref={loaderRef} className="text-center my-6">
                {loading ? <p>Loading...</p> : page >= lastPage && <p>No more products.</p>}
            </div>
        </>
    );
}

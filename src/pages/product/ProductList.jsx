import React, { useEffect, useState, useRef } from 'react';
import api from '../../components/lib/api.js';
import ProductCard from '../../components/product/ProductCard.jsx';

export default function ProductList({ previewLimit }) {
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
                const existing = new Set(prev.map(p => p.id));
                const unique = data.filter(p => !existing.has(p.id));
                return [...prev, ...unique];
            });

            setPage(meta.current_page);
            setLastPage(meta.last_page);
        } catch (e) {
            console.error('API error:', e);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        // On mount, fetch first page
        fetchProducts(1);
    }, []);

    useEffect(() => {
        if (previewLimit) return; // disable infinite scroll in preview mode

        const observer = new IntersectionObserver(
            entries => {
                if (entries[0].isIntersecting && !loading && page < lastPage) {
                    fetchProducts(page + 1);
                }
            },
            { threshold: 1 }
        );

        if (loaderRef.current) observer.observe(loaderRef.current);
        return () => {
            if (loaderRef.current) observer.unobserve(loaderRef.current);
        };
    }, [page, lastPage, loading, previewLimit]);

    const displayProducts = previewLimit
        ? products.slice(0, previewLimit)
        : products;

    return (
        <>
            <div className="p-6 mt-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {displayProducts.map(p => (
                    <ProductCard key={p.id} product={p} />
                ))}
            </div>

            {/* Show loader only if not in preview mode */}
            {!previewLimit && (
                <div ref={loaderRef} className="text-center my-6">
                    {loading ? <p>Loading...</p> : page >= lastPage && <p>No more products.</p>}
                </div>
            )}
        </>
    );
}

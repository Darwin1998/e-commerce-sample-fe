import {Link, useParams} from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from '../../components/lib/api.js'

export default function ProductDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        api.get(`/v1/products/show/${id}`)
            .then(res => setProduct(res.data.data))
            .catch(err => console.error('Error loading product', err));
    }, [id]);

    if (!product) return <div className="p-6">Loading...</div>;
    return (
        <div>
            <Link to="/products" className="text-indigo-600 hover:underline mb-4 block">← Back to Products</Link>
            <div className="p-6 max-w-xl mx-auto">
                <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded-xl mb-6" />
                <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{product.description}</p>
                <div className="text-xl font-semibold text-indigo-600 dark:text-indigo-400">₱{product.price}</div>
            </div>
        </div>
    );
}

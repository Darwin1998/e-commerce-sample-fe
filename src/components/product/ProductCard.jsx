import { useNavigate } from 'react-router-dom';

export default function ProductCard({ product }) {
    const navigate = useNavigate();

    return (
        <div
            onClick={() => navigate(`/products/${product.id}`)}
            className="cursor-pointer bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition-shadow p-4"
        >
            <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-sm text-gray-600 dark:text-gray-300">
                {product.description.slice(0, 100)}...
            </p>
            <div className="mt-2 font-bold text-indigo-600 dark:text-indigo-400">
                ₱{product.price}
            </div>
        </div>
    );
}

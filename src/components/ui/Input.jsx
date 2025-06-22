import React from 'react';

export default function Input({ type = 'text', name, placeholder, value, onChange, error }) {
    return (
        <div>
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className="w-full p-2 border rounded bg-white text-black dark:bg-gray-900 dark:text-white"
                required
            />
            {error && <p className="text-red-500 text-sm mt-1">{error[0]}</p>}
        </div>
    );
}

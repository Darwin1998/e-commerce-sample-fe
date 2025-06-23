// components/Modal.jsx
import React from 'react';
import { createPortal } from 'react-dom';

export default function Modal({ title, children, onClose }) {
    return createPortal(
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-start justify-center z-50 pt-20">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md relative">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 dark:hover:text-white"
                >
                    &times;
                </button>

                {/* Title */}
                {title && <h2 className="text-xl font-semibold mb-4 dark:text-white">{title}</h2>}

                {/* Content */}
                <div>{children}</div>
            </div>
        </div>,
        document.body
    );
}

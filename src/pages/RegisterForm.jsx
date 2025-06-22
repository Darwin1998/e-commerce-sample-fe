import React, { useState } from 'react';
import api from '../components/lib/api.js';
import Input from "../components/ui/Input.jsx";
import toast from "react-hot-toast";
import {useNavigate} from "react-router-dom";

export default function RegisterForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        phone_number: '',
    });
    const [image, setImage] = useState(null);
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors({});
        setSuccess('');

        const payload = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
            payload.append(key, value);
        });
        if (image) {
            payload.append('image', image);
        }

        try {
            const res = await api.post('/v1/customer/register', payload, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            toast.success( res.data.message );
            navigate('/products');
            setFormData({
                name: '',
                email: '',
                password: '',
                password_confirmation: '',
                phone_number: '',
            });
            setImage(null);
        } catch (err) {
            if (err.response?.data?.errors) {
                toast.error(err.response.data?.message);
                // setErrors(err.response.data.errors);
            } else {
                setErrors({ general: ['Something went wrong.'] });
            }
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 bg-white dark:bg-gray-800 p-6 rounded shadow">
            <h2 className="text-2xl font-semibold mb-4 text-center">Register</h2>

            {success && <p className="text-green-600 mb-4">{success}</p>}
            {errors.general && <p className="text-red-500 mb-4">{errors.general[0]}</p>}

            <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    error={errors.name}
                />
                <Input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    error={errors.email}
                />
                <Input
                    name="phone_number"
                    placeholder="Phone Number"
                    value={formData.phone_number}
                    onChange={handleChange}
                    error={errors.phone_number}
                />
                <Input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    error={errors.password}
                />
                <Input
                    type="password"
                    name="password_confirmation"
                    placeholder="Confirm Password"
                    value={formData.password_confirmation}
                    onChange={handleChange}
                    error={errors.password_confirmation}
                />

                <div>
                    <label className="block mb-1 text-sm font-medium">Profile Picture</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="block w-full text-sm text-gray-900 bg-white dark:bg-gray-900 dark:text-white rounded border border-gray-300 dark:border-gray-700 p-2"
                    />
                    {image && (
                        <div className="mt-2">
                            <img
                                src={URL.createObjectURL(image)}
                                alt="Preview"
                                className="w-24 h-24 object-cover rounded-full"
                            />
                        </div>
                    )}
                    {errors.image && <p className="text-red-500 text-sm mt-1">{errors.image[0]}</p>}
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
                >
                    Register
                </button>
            </form>
        </div>
    );
}

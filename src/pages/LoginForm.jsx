import React, { useState } from 'react';
import api from '../components/lib/api.js';
import Input from "../components/ui/Input.jsx";
import {useNavigate} from "react-router-dom";
import toast from 'react-hot-toast';
import {useAuth} from "../context/AuthContext.jsx";



export default function LoginForm() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors({});
        setSuccess('');

        try {
            const res = await api.post('/v1/customer/login', {
                email: formData.email,
                password: formData.password,
            });

            const token = res.data.token;
            login(token); // ✅ Save token to context and localStorage
            console.log(res.data);
            toast.success('Login successful!');
            navigate('/'); // if using react-router

            setFormData({
                email: '',
                password: '',
            });

        } catch (err) {
            console.log(err);
            setErrors(err);
            // toast.error(err.response.data?.message);
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 bg-white dark:bg-gray-800 p-6 rounded shadow">
            <h2 className="text-2xl font-semibold mb-4 text-center">Login</h2>

            {success && <p className="text-green-600 mb-4">{success}</p>}
            {errors.general && <p className="text-red-500 mb-4">{errors.general[0]}</p>}

            <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    error={errors.email}
                />

                <Input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    error={errors.password}
                />
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
                >
                        submit
                </button>
            </form>
        </div>
    );
}
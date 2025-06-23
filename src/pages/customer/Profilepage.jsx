import React, { useEffect, useState } from 'react';
import api from '../../components/lib/api.js';
import { useAuth } from '../../context/AuthContext.jsx';
import toast from 'react-hot-toast';

export default function ProfilePage() {
    const { token } = useAuth();
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const res = await api.get('/v1/customer/profile', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setProfile(res.data.data);
            } catch (err) {
                toast.error('Failed to load profile');
                console.error(err);
            }
        };

        fetchProfile();
    }, [token]);

    if (!profile) return <p className="text-center mt-10">Loading profile...</p>;
    return (
        <div className="max-w-6xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Left: Profile */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded shadow col-span-1">
                <span>
                    <h2 className="text-2xl font-semibold mb-4 text-center">{profile.name}</h2>
                </span>

                {profile.profile_picture && (
                    <img
                        src={profile.profile_picture}
                        alt="Profile"
                        className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                    />
                )}
                <p><strong>Name:</strong> {profile.name}</p>
                <p><strong>Email:</strong> {profile.email}</p>
                <p><strong>Phone:</strong> {profile.phone_number}</p>
            </div>

            {/* Right: Orders + Addresses */}
            <div className="col-span-1 md:col-span-2 flex flex-col gap-6">
                {/* Orders summary (static content) */}
                <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded shadow">
                    <h3 className="text-2xl font-semibold mb-4">My Orders</h3>
                    <ul className="space-y-2">
                        <li className="flex justify-between">
                            <span>Order #1234</span>
                            <span className="text-green-500">Delivered</span>
                        </li>
                        <li className="flex justify-between">
                            <span>Order #1235</span>
                            <span className="text-yellow-500">Processing</span>
                        </li>
                        <li className="flex justify-between">
                            <span>Order #1236</span>
                            <span className="text-red-500">Cancelled</span>
                        </li>
                    </ul>
                </div>

                {/* Addresses (dynamic from profile) */}
                <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded shadow">
                    <h3 className="text-2xl font-semibold mb-4">My Addresses</h3>
                    {profile.addresses && profile.addresses.length > 0 ? (
                        <div className="grid gap-4 md:grid-cols-2">
                            {profile.addresses.map((address) => (
                                <div key={address.id} className="bg-white dark:bg-gray-800 p-4 rounded shadow">
                                    <p><strong>Street:</strong> {address.street}</p>
                                    <p><strong>City:</strong> {address.city}</p>
                                    <p><strong>State:</strong> {address.state}</p>
                                    <p><strong>Zip:</strong> {address.zip}</p>
                                    <p><strong>Country:</strong> {address.country}</p>
                                    <p><strong>Phone:</strong> {address.phone}</p>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="text-sm text-gray-400">No addresses found.</p>
                    )}
                </div>
            </div>
        </div>
    );

}

import React, { useEffect, useState } from 'react';
import api from '../../components/lib/api.js'
import {useAuth} from "../../context/AuthContext.jsx";
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
                setProfile(res.data.data); // assuming you're using API resources
                console.log(res.data.data);
            } catch (err) {
                toast.error('Failed to load profile');
                console.error(err);
            }
        };

        fetchProfile();
    }, [token]);

    if (!profile) return <p className="text-center mt-10">Loading profile...</p>;

    return (
        <div className="max-w-md mx-auto mt-10 bg-white dark:bg-gray-800 p-6 rounded shadow">
            <h2 className="text-2xl font-semibold mb-4 text-center">My Account</h2>
            <div className="space-y-4">
                <p><strong>Name:</strong> {profile.name}</p>
                <p><strong>Email:</strong> {profile.email}</p>
                {profile.profile_picture && (
                    <img
                        src={profile.profile_picture}
                        alt="Profile"
                        className="w-24 h-24 rounded-full object-cover"
                    />
                )}
            </div>
        </div>
    );
}

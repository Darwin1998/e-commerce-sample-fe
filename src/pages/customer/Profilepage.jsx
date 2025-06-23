import React, { useEffect, useState } from 'react';
import api from '../../components/lib/api.js';
import { useAuth } from '../../context/AuthContext.jsx';
import toast from 'react-hot-toast';
import { FaPencilAlt } from 'react-icons/fa';
import Modal from '../../components/Modal.jsx';
import EditProfileForm from "../EditProfileForm.jsx";

export default function ProfilePage() {
    const { token } = useAuth();
    const [profile, setProfile] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [profilePic, setProfilePic] = useState(null);


    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const res = await api.get('/v1/customer/profile', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                const data = res.data.data;
                setProfile(data);
                setName(data.name || '');
                setPhone(data.phone_number || '');
                setEmail(data.email || '');
            } catch (err) {
                toast.error('Failed to load profile');
                console.error(err);
            }
        };

        fetchProfile();
    }, [token]);

    const handleUpdate = async (e) => {
        e.preventDefault();

        try {
            const formData = new FormData();
            formData.append('name', name);
            formData.append('email', email);
            formData.append('phone_number', phone);
            if (profilePic) {
                formData.append('profile_picture', profilePic);
            }

            const res = await api.post('/v1/customer/profile/update', formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data',
                },
            });

            toast.success(res.data.message);

            setProfile(prev => ({
                ...prev,
                name,
                email,
                phone_number: phone,
                profile_picture: profilePic ? URL.createObjectURL(profilePic) : prev.profile_picture,
            }));

            setShowModal(false);
        } catch (err) {
            const errors = err.response?.data?.errors;

            if (errors) {
                // Flatten and join error messages
                const messages = Object.values(errors).flat().join('\n');
                toast.error(messages);
            } else if (err.response?.data?.message) {
                toast.error(err.response.data.message);
            } else {
                toast.error('Something went wrong.');
            }
        }
    };


    if (!profile) return <p className="text-center mt-10">Loading profile...</p>;

    return (
        <div className="max-w-6xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Left: Profile */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded shadow col-span-1 relative">
                <button
                    onClick={() => setShowModal(true)}
                    aria-label="Edit"
                    className="absolute top-4 right-4"
                >
                    <FaPencilAlt className="text-green-500 hover:text-blue-600" />
                </button>

                {showModal && (
                    <Modal title="Edit Profile" onClose={() => setShowModal(false)}>
                        <EditProfileForm
                            name={name}
                            email={email}
                            phone={phone}
                            profilePic={profilePic}
                            setName={setName}
                            setEmail={setEmail}
                            setPhone={setPhone}
                            setProfilePic={setProfilePic}
                            onSubmit={handleUpdate}
                            onCancel={() => setShowModal(false)}
                        />
                    </Modal>
                )}

                <h2 className="text-2xl font-semibold mb-4 text-center">{profile.name}</h2>

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

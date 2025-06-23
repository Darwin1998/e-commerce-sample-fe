// src/components/EditProfileForm.jsx
import React from 'react';

export default function EditProfileForm({
                                            name,
                                            email,
                                            phone,
                                            profilePic,
                                            setName,
                                            setEmail,
                                            setPhone,
                                            setProfilePic,
                                            onSubmit,
                                            onCancel
                                        }) {
    return (
        <form onSubmit={onSubmit} className="space-y-4">
            <div>
                <label className="block text-sm font-medium dark:text-white">Profile Picture</label>
                <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setProfilePic(e.target.files[0])}
                    className="w-full px-3 py-2 border rounded bg-white"
                />
            </div>
            <div>
                <label className="block text-sm font-medium dark:text-white">Name</label>
                <input
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    className="w-full px-3 py-2 border rounded"
                />
            </div>
            <div>
                <label className="block text-sm font-medium dark:text-white">Phone</label>
                <input
                    type="text"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    className="w-full px-3 py-2 border rounded"
                />
            </div>
            <div>
                <label className="block text-sm font-medium dark:text-white">Email</label>
                <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="w-full px-3 py-2 border rounded"
                />
            </div>
            <div className="text-right">
                <button
                    type="button"
                    onClick={onCancel}
                    className="bg-red-600 text-white px-4 py-2 rounded hover:bg-blue-700 mr-2"
                >
                    Cancel
                </button>
                <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                    Save Changes
                </button>
            </div>
        </form>
    );
}

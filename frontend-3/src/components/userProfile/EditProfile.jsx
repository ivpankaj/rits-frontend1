import { useState } from 'react';
import {useNavigate } from "react-router-dom";

const EditProfile = () => {
    // State variables for user information
    const [name, setName] = useState("John Doe");
    const [email, setEmail] = useState("johndoe@example.com");
    const [address, setAddress] = useState("1234 Elm St, Springfield");
    const [phone, setPhone] = useState("(123) 456-7890");

    const navigate = useNavigate();

    // Save handler
    const handleSave = () => {
        alert("Profile saved!");
        navigate("/userProfile")
    };

    // Cancel handler
    const handleCancel = () => {
        navigate("/userProfile")
    };

    return (
        <div className="flex justify-center p-8 bg-gray-100 min-h-screen ">
            <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-lg">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Edit Profile</h2>

                {/* Name Field */}
                <div className="mb-4">
                    <label className="block text-gray-600 mb-1">Full Name</label>
                    <input
                        type="text"
                        className="border-2 outline-none w-full border-gray-300 rounded-md px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                {/* Email Field */}
                <div className="mb-4">
                    <label className="block text-gray-600 mb-1">Email</label>
                    <input
                        type="email"
                        className="border-2 outline-none w-full border-gray-300 rounded-md px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                {/* Address Field */}
                <div className="mb-4">
                    <label className="block text-gray-600 mb-1">Address</label>
                    <input
                        type="text"
                        className="border-2 outline-none w-full border-gray-300 rounded-md px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </div>

                {/* Phone Field */}
                <div className="mb-6">
                    <label className="block text-gray-600 mb-1">Phone Number</label>
                    <input
                        type="text"
                        className="border-2 outline-none w-full border-gray-300 rounded-md px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </div>

                {/* Action Buttons */}
                <div className="flex justify-between">
                    <button
                        onClick={handleSave}
                        className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 transition"
                    >
                        Save Changes
                    </button>
                    <button
                        onClick={handleCancel}
                        className="bg-gray-300 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-400 transition"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EditProfile;

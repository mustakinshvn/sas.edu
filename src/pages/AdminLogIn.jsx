import React, { useState } from "react";

const AdminLogIn = () => {
    const [form, setForm] = useState({ email: "", password: "" });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300">
            <div className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-md border border-blue-100">
                <div className="mb-8 text-center">
                    <div className="flex justify-center mb-4">
                        <svg width="48" height="48" fill="none" viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="10" fill="#2563eb" />
                            <path d="M8 13v-2a4 4 0 118 0v2" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M6 17v-2a6 6 0 1112 0v2" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                    <h1 className="text-3xl font-extrabold text-blue-800 mb-1 tracking-tight">Admin Login</h1>
                    <p className="text-gray-500 text-base">Sign in to your admin account</p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">
                            Email Address
                        </label>
                        <input
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition text-gray-900 bg-gray-50"
                            type="email"
                            id="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            autoComplete="username"
                            placeholder="admin@example.com"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition text-gray-900 bg-gray-50"
                            type="password"
                            id="password"
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                            required
                            autoComplete="current-password"
                            placeholder=""
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 bg-blue-700 text-white font-bold rounded-lg hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400 transition text-lg shadow"
                    >
                        Log In
                    </button>
                </form>
                <div className="mt-6 text-center">
                    <a href="#" className="text-blue-600 hover:underline text-sm font-medium">
                        Forgot password?
                    </a>
                </div>
            </div>
        </div>
    );
};

export default AdminLogIn;
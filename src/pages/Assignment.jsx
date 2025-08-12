import React, { useState } from "react";

const Assignment = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [studentId, setStudentId] = useState("");
    const [password, setPassword] = useState("");
    const [dob, setDob] = useState("");
    const [error, setError] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        // Dummy authentication for demonstration
        if (
            studentId === "student" &&
            password === "password" &&
            dob === "2000-01-01"
        ) {
            setIsLoggedIn(true);
            setError("");
        } else {
            setError("Invalid Student ID, Password, or Date of Birth.");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-purple-200">
            <div className="bg-white shadow-2xl rounded-2xl p-10 max-w-md w-full">
                <div className="flex flex-col items-center mb-8">
                    {/* Logo */}
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-full p-3 mb-2 shadow-lg">
                        <svg width="48" height="38" viewBox="0 0 48 48" fill="none">
                            <circle cx="24" cy="24" r="24" fill="#fff" />
                            <path d="M24 12L36 20V36H12V20L24 12Z" fill="#6366F1"/>
                            <circle cx="24" cy="26" r="4" fill="#3B82F6"/>
                        </svg>
                    </div>
                    <span className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 tracking-wide">
                        School Portal
                    </span>
                </div>
                {!isLoggedIn ? (
                    <form onSubmit={handleLogin} className="space-y-6">
                        <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">Student Login</h2>
                        <p className="text-gray-500 mb-4 text-center">Sign in to access your assignments</p>
                        <div>
                            <label className="block text-left text-gray-700 font-semibold mb-1" htmlFor="studentId">
                                Student ID
                            </label>
                            <input
                                id="studentId"
                                type="text"
                                value={studentId}
                                onChange={(e) => setStudentId(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                                placeholder="Enter your Student ID"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-left text-gray-700 font-semibold mb-1" htmlFor="password">
                                Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                                placeholder="Enter your password"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-left text-gray-700 font-semibold mb-1" htmlFor="dob">
                                Date of Birth
                            </label>
                            <input
                                id="dob"
                                type="date"
                                value={dob}
                                onChange={(e) => setDob(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
                                required
                                max={new Date().toISOString().split("T")[0]}
                            />
                        </div>
                        {error && <div className="text-red-500 text-sm text-center">{error}</div>}
                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold py-2 rounded-lg shadow-md hover:from-blue-600 hover:to-purple-600 transition"
                        >
                            Login
                        </button>
                    </form>
                ) : (
                    <div className="text-center">
                        <p className="text-lg text-gray-600 mb-2">
                            🚧 This feature is under development 🚧
                        </p>
                        <p className="text-gray-500">
                            We are working hard to bring this feature to you soon. Stay tuned!
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Assignment;
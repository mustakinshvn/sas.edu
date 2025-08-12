import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const classes = Array.from({ length: 10 }, (_, i) => `Class ${i + 1}`);

export default function ApplyNow() {
    const [form, setForm] = useState({
        name: "",
        dob: "",
        email: "",
        phone: "",
        address: "",
        class: "",
        guardian: "",
        message: "",
    });
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState("");
    const [showConfirm, setShowConfirm] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowConfirm(true);
    };

    const handleConfirm = async () => {
        try {
            setSubmitted(true);
            setError("");
            setForm({
                name: "",
                dob: "",
                email: "",
                phone: "",
                address: "",
                class: "",
                guardian: "",
                message: "",
            });
        } catch (err) {
            setError("Something went wrong. Please try again.");
            setSubmitted(false);
        } finally {
            setShowConfirm(false);
        }
    };

    const handleCancel = () => {
        setShowConfirm(false);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-700 to-blue-400 flex items-center justify-center py-10">
            <div className="w-full max-w-2xl bg-white/90 rounded-3xl shadow-2xl p-10 border-2 border-blue-700">
                <div className="flex flex-col items-center mb-8">
                    <div className="bg-blue-700 rounded-full p-4 shadow-lg mb-2">
                        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0v6m0 0l-6-3m6 3l6-3" />
                        </svg>
                    </div>
                    <h1 className="text-4xl font-extrabold text-blue-800 mb-1 text-center tracking-tight">
                        Apply for Admission
                    </h1>
                    <p className="text-blue-700 text-center font-medium">
                        Fill in the form below to apply for admission to classes 1 - 10.
                    </p>
                </div>
                {submitted ? (
                    <div className="text-center py-12">
                        <svg className="mx-auto mb-4 w-16 h-16 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <h2 className="text-2xl font-semibold text-green-700 mb-2">
                            Your application has been sent successfully!
                        </h2>
                        <p className="text-gray-600 mb-6">
                            Thank you for applying. We have received your application and will contact you soon.
                        </p>
                        <button
                            onClick={() => navigate("/")}
                            className="mt-4 px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white font-bold rounded-xl shadow-lg transition duration-200"
                        >
                            Go to Home Page
                        </button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {error && (
                            <div className="mb-4 text-red-600 font-semibold text-center">
                                {error}
                            </div>
                        )}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-semibold text-blue-800 mb-1">Student Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    value={form.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border-2 border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none bg-blue-50"
                                    placeholder="Full Name"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-blue-800 mb-1">Date of Birth</label>
                                <input
                                    type="date"
                                    name="dob"
                                    required
                                    value={form.dob}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border-2 border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none bg-blue-50"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-blue-800 mb-1">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    value={form.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border-2 border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none bg-blue-50"
                                    placeholder="example@email.com"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-blue-800 mb-1">Phone Number</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    required
                                    value={form.phone}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border-2 border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none bg-blue-50"
                                    placeholder="11-digit number"
                                    pattern="[0-9]{11}"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-blue-800 mb-1">Class Applying For</label>
                                <select
                                    name="class"
                                    required
                                    value={form.class}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border-2 border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none bg-blue-50"
                                >
                                    <option value="">Select Class</option>
                                    {classes.map((cls) => (
                                        <option key={cls} value={cls}>{cls}</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-blue-800 mb-1">Guardian Name</label>
                                <input
                                    type="text"
                                    name="guardian"
                                    required
                                    value={form.guardian}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border-2 border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none bg-blue-50"
                                    placeholder="Parent/Guardian Name"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-blue-800 mb-1">Address</label>
                            <input
                                type="text"
                                name="address"
                                required
                                value={form.address}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border-2 border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none bg-blue-50"
                                placeholder="Full Address"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-blue-800 mb-1">Additional Message (optional)</label>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border-2 border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none bg-blue-50"
                                rows={3}
                                placeholder="Any additional information..."
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full py-3 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-800 hover:from-blue-800 hover:to-blue-900 text-white font-bold rounded-xl shadow-lg transition duration-200 text-lg tracking-wide"
                        >
                            Send Application
                        </button>
                    </form>
                )}
                {showConfirm && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
                        <div className="bg-white rounded-xl shadow-xl p-8 max-w-sm w-full text-center border-2 border-blue-700">
                            <h3 className="text-xl font-bold mb-4 text-blue-800">Confirm Submission</h3>
                            <p className="mb-6 text-blue-700">Are you sure you want to send your application?</p>
                            <div className="flex justify-center gap-4">
                                <button
                                    onClick={handleConfirm}
                                    className="px-5 py-2 bg-blue-700 text-white rounded-lg font-semibold hover:bg-blue-800"
                                >
                                    Yes, Send
                                </button>
                                <button
                                    onClick={handleCancel}
                                    className="px-5 py-2 bg-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-400"
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
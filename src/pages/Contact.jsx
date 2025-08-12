import React from "react";

const Contact = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-slate-50 font-sans">
            <div className="bg-white rounded-2xl shadow-xl p-10 max-w-md w-full">
                <h2 className="text-center text-gray-700 mb-6 font-bold tracking-wide text-2xl">
                    Contact Us
                </h2>
                <form>
                    <div className="mb-5">
                        <label
                            htmlFor="name"
                            className="block mb-2 text-gray-600 font-medium"
                        >
                            Name
                        </label>
                        <input
                            id="name"
                            type="text"
                            placeholder="Your Name"
                            className="w-full px-3 py-3 rounded-lg border border-slate-300 outline-none text-base transition-colors focus:border-indigo-400"
                            required
                        />
                    </div>
                    <div className="mb-5">
                        <label
                            htmlFor="email"
                            className="block mb-2 text-gray-600 font-medium"
                        >
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            placeholder="you@example.com"
                            className="w-full px-3 py-3 rounded-lg border border-slate-300 outline-none text-base transition-colors focus:border-indigo-400"
                            required
                        />
                    </div>
                    <div className="mb-5">
                        <label
                            htmlFor="message"
                            className="block mb-2 text-gray-600 font-medium"
                        >
                            Message
                        </label>
                        <textarea
                            id="message"
                            rows={4}
                            placeholder="Type your message..."
                            className="w-full px-3 py-3 rounded-lg border border-slate-300 outline-none text-base resize-vertical transition-colors focus:border-indigo-400"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-3 bg-gradient-to-r from-indigo-500 to-blue-600 text-white border-none rounded-lg font-semibold text-lg cursor-pointer shadow-md transition-all hover:from-indigo-600 hover:to-blue-700"
                    >
                        Send Message
                    </button>
                </form>
                <div className="mt-8 text-center text-slate-500 text-base">
                    <div>
                        <strong>School Address:</strong>
                        <br />
                        123 Main Street, City, Country
                    </div>
                    <div className="mt-2">
                        <strong>Email:</strong> info@school.edu
                        <br />
                        <strong>Phone:</strong> +1 234 567 8900
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;

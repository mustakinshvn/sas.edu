import React from "react";
import Footer from "../components/footer";

export default function About() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white py-20 overflow-hidden">
                <div className="absolute inset-0 bg-black opacity-10"></div>
                <div className="relative max-w-7xl mx-auto px-4 text-center">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 font-['Noto_Sans_Bengali','serif'] tracking-wide">
                        স্টার একাডেমিক স্কুল
                    </h1>
                    <p className="text-xl md:text-2xl text-blue-100 font-['Noto_Sans_Bengali','serif'] mb-6">
                        শিক্ষায় উৎকর্ষতার ধারক ২০১২ সাল থেকে
                    </p>
                    <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto rounded-full shadow-lg"></div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-16">
                {/* Mission & Vision */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
                    <div className="bg-white rounded-xl shadow-xl p-8 border-l-4 border-blue-600 hover:shadow-2xl transition-shadow duration-300">
                        <div className="flex items-center mb-6">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                                <div className="w-6 h-6 bg-blue-600 rounded"></div>
                            </div>
                            <h2 className="text-3xl font-bold text-gray-800 font-['Noto_Sans_Bengali','serif']">
                                আমাদের লক্ষ্য
                            </h2>
                        </div>
                        <p className="text-gray-700 leading-8 text-lg font-['Noto_Sans_Bengali','serif']">
                            প্রতিটি শিক্ষার্থীর মধ্যে জ্ঞান, দক্ষতা এবং নৈতিক মূল্যবোধের বিকাশ ঘটিয়ে তাদের ভবিষ্যতের জন্য প্রস্তুত করা এবং একটি সুশিক্ষিত ও দক্ষ প্রজন্ম গড়ে তোলা।
                        </p>
                    </div>
                    <div className="bg-white rounded-xl shadow-xl p-8 border-l-4 border-green-600 hover:shadow-2xl transition-shadow duration-300">
                        <div className="flex items-center mb-6">
                            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                                <div className="w-6 h-6 bg-green-600 rounded"></div>
                            </div>
                            <h2 className="text-3xl font-bold text-gray-800 font-['Noto_Sans_Bengali','serif']">
                                আমাদের দৃষ্টিভঙ্গি
                            </h2>
                        </div>
                                <p className="text-gray-700 leading-8 text-lg font-['Noto_Sans_Bengali','serif']">
                            একটি আধুনিক ও মানসম্পন্ন শিক্ষা প্রতিষ্ঠান হিসেবে গড়ে তোলা যেখানে প্রতিটি শিক্ষার্থী তাদের সর্বোচ্চ সম্ভাবনা অর্জন করতে পারে এবং বিশ্বমানের শিক্ষা গ্রহণ করতে পারে।
                        </p>
                    </div>
                </div>

                {/* About Content */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-10">
                        {/* School History */}
                        <div className="bg-white rounded-xl shadow-xl p-10">
                            <h2 className="text-4xl font-bold text-gray-800 mb-8 font-['Noto_Sans_Bengali','serif'] border-b-2 border-blue-200 pb-4">
                                প্রতিষ্ঠানের ইতিহাস
                            </h2>
                            <div className="prose prose-lg max-w-none">
                                <p className="text-gray-700 text-lg leading-8 mb-6 font-['Noto_Sans_Bengali','serif']">
                                    ২০১২ সালে প্রতিষ্ঠিত স্টার একাডেমিক স্কুল টাঙ্গাইল জেলার দেলদুয়ারে অবস্থিত একটি অগ্রগামী শিক্ষা প্রতিষ্ঠান। 
                                    প্রতিষ্ঠার পর থেকেই আমরা মানসম্পন্ন শিক্ষা প্রদান, শৃঙ্খলা বজায় রাখা এবং নৈতিক মূল্যবোধ গড়ে তোলার 
                                    ক্ষেত্রে অগ্রণী ভূমিকা পালন করে আসছি।
                                </p>
                                <p className="text-gray-700 text-lg leading-8 font-['Noto_Sans_Bengali','serif']">
                                    বিগত এক দশকে আমাদের স্কুল শিক্ষার মান, পরীক্ষার ফলাফল এবং সহশিক্ষা কার্যক্রমে উল্লেখযোগ্য 
                                    সাফল্য অর্জন করেছে। আমাদের স্নাতকরা দেশের বিভিন্ন প্রতিষ্ঠিত কলেজ ও বিশ্ববিদ্যালয়ে 
                                    অধ্যয়ন করছে এবং সমাজের বিভিন্ন ক্ষেত্রে গুরুত্বপূর্ণ অবদান রাখছে।
                                </p>
                            </div>
                        </div>

                        {/* Academic Programs */}
                        <div className="bg-white rounded-xl shadow-xl p-10">
                            <h2 className="text-4xl font-bold text-gray-800 mb-8 font-['Noto_Sans_Bengali','serif'] border-b-2 border-blue-200 pb-4">
                                শিক্ষা কার্যক্রম
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-6">
                                    <h3 className="text-2xl font-semibold text-gray-800 font-['Noto_Sans_Bengali','serif'] flex items-center">
                                        <span className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                                            <span className="w-4 h-4 bg-blue-600 rounded"></span>
                                        </span>
                                        একাডেমিক প্রোগ্রাম
                                    </h3>
                                    <ul className="space-y-3">
                                        {[
                                            "প্রাথমিক বিভাগ (১ম - ৫ম শ্রেণি)",
                                            "মাধ্যমিক বিভাগ (৬ষ্ঠ - ১০ম শ্রেণি)",
                                            "বিজ্ঞান বিভাগ",
                                            "মানবিক বিভাগ",
                                            "ব্যবসায় শিক্ষা বিভাগ"
                                        ].map((item, index) => (
                                            <li key={index} className="flex items-center space-x-4 p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                                                <div className="w-3 h-3 bg-blue-600 rounded-full flex-shrink-0"></div>
                                                <span className="text-gray-700 font-['Noto_Sans_Bengali','serif'] text-lg">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="space-y-6">
                                    <h3 className="text-2xl font-semibold text-gray-800 font-['Noto_Sans_Bengali','serif'] flex items-center">
                                        <span className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                                            <span className="w-4 h-4 bg-green-600 rounded"></span>
                                        </span>
                                        সুবিধাসমূহ
                                    </h3>
                                    <ul className="space-y-3">
                                        {[
                                            "অত্যাধুনিক কম্পিউটার ল্যাব",
                                            "সুসজ্জিত বিজ্ঞান গবেষণাগার",
                                            "সমৃদ্ধ ডিজিটাল গ্রন্থাগার",
                                            "ক্রীড়া ও সাংস্কৃতিক কেন্দ্র",
                                            "২৪/৭ স্বাস্থ্যসেবা কেন্দ্র"
                                        ].map((item, index) => (
                                            <li key={index} className="flex items-center space-x-4 p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
                                                <div className="w-3 h-3 bg-green-600 rounded-full flex-shrink-0"></div>
                                                <span className="text-gray-700 font-['Noto_Sans_Bengali','serif'] text-lg">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Achievements */}
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-xl p-10">
                            <h2 className="text-4xl font-bold text-gray-800 mb-8 font-['Noto_Sans_Bengali','serif'] text-center">
                                আমাদের গর্বের অর্জন
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                                <div className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                                    <div className="text-5xl font-bold text-blue-600 mb-4">৯৮%</div>
                                    <p className="text-gray-700 font-['Noto_Sans_Bengali','serif'] text-lg font-semibold">পাস রেট</p>
                                    <p className="text-gray-500 font-['Noto_Sans_Bengali','serif'] text-sm mt-2">গত পাঁচ বছরের গড়</p>
                                </div>
                                <div className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                                    <div className="text-5xl font-bold text-green-600 mb-4">১২০০+</div>
                                    <p className="text-gray-700 font-['Noto_Sans_Bengali','serif'] text-lg font-semibold">শিক্ষার্থী</p>
                                    <p className="text-gray-500 font-['Noto_Sans_Bengali','serif'] text-sm mt-2">বর্তমান একাডেমিক বছর</p>
                                </div>
                                <div className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                                    <div className="text-5xl font-bold text-yellow-600 mb-4">৫০+</div>
                                    <p className="text-gray-700 font-['Noto_Sans_Bengali','serif'] text-lg font-semibold">অভিজ্ঞ শিক্ষক</p>
                                    <p className="text-gray-500 font-['Noto_Sans_Bengali','serif'] text-sm mt-2">উচ্চ যোগ্যতাসম্পন্ন</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-8">
                        {/* Principal Message */}
                        <div className="bg-white rounded-xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300">
                            <div className="text-center mb-8">
                                <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
                                    <span className="text-white text-2xl font-bold">প্র</span>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800 font-['Noto_Sans_Bengali','serif']">
                                    প্রধান শিক্ষকের বার্তা
                                </h3>
                            </div>
                            <blockquote className="text-gray-700 leading-relaxed font-['Noto_Sans_Bengali','serif'] italic text-center mb-6 border-l-4 border-blue-200 pl-4">
                                "আমাদের লক্ষ্য প্রতিটি শিক্ষার্থীকে জ্ঞানে, দক্ষতায় এবং চরিত্রে উন্নত করে গড়ে তোলা। 
                                আমরা বিশ্বাস করি শিক্ষাই জাতির মেরুদণ্ড এবং আগামীর স্বপ্নের ভিত্তি।"
                            </blockquote>
                            <div className="mt-6 pt-6 border-t border-gray-200 text-center">
                                <p className="font-bold text-gray-800 font-['Noto_Sans_Bengali','serif'] text-lg">
                                    মোঃ রাকিবুল হাসান
                                </p>
                                <p className="text-blue-600 font-['Noto_Sans_Bengali','serif'] font-medium">
                                    প্রধান শিক্ষক ও পরিচালক
                                </p>
                            </div>
                        </div>

                        {/* Contact Info */}
                        <div className="bg-gradient-to-br from-blue-200 to-blue-900 text-white rounded-xl shadow-xl p-8">
                            <h3 className="text-2xl font-bold mb-6 font-['Noto_Sans_Bengali','serif'] text-center">
                                যোগাযোগের তথ্য
                            </h3>
                            <div className="space-y-6">
                                <div className="flex items-start space-x-4 p-4 bg-cyan-500 bg-opacity-10 rounded-lg backdrop-blur-sm">
                                    <div className="w-6 h-6 bg-blue-800 rounded-lg flex-shrink-0 mt-1"></div>
                                    <div>
                                        <p className="font-semibold text-blue-100">ইমেইল ঠিকানা</p>
                                        <p className="text-white">staracademicschool@gmail.com</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4 p-4 bg-cyan-500 bg-opacity-10 rounded-lg backdrop-blur-sm">
                                    <div className="w-6 h-6 bg-green-800 rounded-lg flex-shrink-0 mt-1"></div>
                                    <div>
                                        <p className="font-semibold text-green-100">যোগাযোগ নম্বর</p>
                                        <p className="text-white">+8801978643523</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4 p-4 bg-cyan-500 bg-opacity-10 rounded-lg backdrop-blur-sm">
                                    <div className="w-6 h-6 bg-yellow-800 rounded-lg flex-shrink-0 mt-1"></div>
                                    <div>
                                        <p className="font-semibold text-yellow-100">প্রতিষ্ঠানের ঠিকানা</p>
                                        <p className="text-white">দেলদুয়ার, টাঙ্গাইল-১৯২৩</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Quick Stats */}
                        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl shadow-xl p-8">
                            <h3 className="text-2xl font-bold text-gray-800 mb-6 font-['Noto_Sans_Bengali','serif'] text-center">
                                এক নজরে
                            </h3>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm">
                                    <span className="font-['Noto_Sans_Bengali','serif'] text-gray-700">প্রতিষ্ঠার বছর</span>
                                    <span className="font-bold text-green-600">২০১২</span>
                                </div>
                                <div className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm">
                                    <span className="font-['Noto_Sans_Bengali','serif'] text-gray-700">শিক্ষা বোর্ড</span>
                                    <span className="font-bold text-green-600">ঢাকা</span>
                                </div>
                         
                            </div>
                        </div>
                    </div>
                </div>
            </div>
              <Footer />
        </div>

      
    );
}

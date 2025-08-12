import React from "react";
const phot = "https://www.sau.edu.bd/public/uploads/teacher/img/35-Md.%20Foysul%20Hossain5f10756095b13.jpeg";

const PrincipalMessage = () => {
  return (
    <section className="w-full bg-gradient-to-br from-green-50 via-white to-zinc-100 py-16 px-0">
      <div className="w-full bg-white shadow-2xl rounded-none p-4 md:p-10 flex flex-col gap-10">
        <header className="relative mb-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center tracking-tight">
            <span className="relative z-10">প্রধান শিক্ষকের বার্তা</span>
            <span className="absolute left-1/2 bottom-0 w-40 md:w-56 h-2 bg-gradient-to-r from-green-400 to-green-600 rounded-full transform -translate-x-1/2 opacity-30"></span>
          </h2>
        </header>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10 w-full">
          {/* Principal's Photo */}
          <div className="relative w-40 h-40 md:w-60 md:h-60 flex-shrink-0 mx-auto md:mx-0">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-green-400 to-green-200 blur-lg opacity-40"></div>
            <img
              src={phot}
              alt="Principal"
              className="relative w-full h-full object-cover rounded-full border-8 border-white shadow-lg"
            />
          </div>
          {/* Principal's Details & Message */}
          <div className="flex-1 text-center md:text-left w-full">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-1">মোঃ রাকিবুল হাসান</h3>
            <p className="text-green-700 text-lg font-medium mb-2">এম.এ. (ইংরেজি)</p>
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 mb-4 justify-center md:justify-start">
              <p className="text-gray-700 text-md flex items-center gap-1">
                <span role="img" aria-label="email">📧</span>
                <a
                  href="mailto:rakibulhasan@gmail.com"
                  className="text-blue-600 hover:underline transition"
                >
                  rakibulhasan@gmail.com
                </a>
              </p>
              <p className="text-gray-700 text-md flex items-center gap-1">
                <span role="img" aria-label="phone">📞</span>
                <a
                  href="tel:+8801532156778"
                  className="text-blue-600 hover:underline transition"
                >
                  +8801532156778
                </a>
              </p>
            </div>
            <blockquote className="relative bg-green-50 border-l-4 border-green-400 p-6 rounded-xl shadow-inner text-gray-800 text-lg leading-relaxed font-medium">
              <svg
                className="absolute -top-4 -left-4 w-10 h-10 text-green-200"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M7.17 6A5.001 5.001 0 002 11c0 2.21 1.79 4 4 4v3a1 1 0 001 1h3a1 1 0 001-1v-3a7 7 0 00-7-7zm10 0A5.001 5.001 0 0012 11c0 2.21 1.79 4 4 4v3a1 1 0 001 1h3a1 1 0 001-1v-3a7 7 0 00-7-7z" />
              </svg>
              <span className="block">
                "স্টার একাডেমিক স্কুলে আমরা বিশ্বাস করি, প্রতিটি শিশু অনন্য এবং তাদের মধ্যে অসীম সম্ভাবনা রয়েছে।
                আমাদের লক্ষ্য হল একটি সমন্বিত শিক্ষা প্রদান করা, যা বুদ্ধিবৃত্তিক কৌতূহল, সৃজনশীলতা এবং দৃঢ় নৈতিক মূল্যবোধ গড়ে তোলে।
                আমাদের নিবেদিত শিক্ষকবৃন্দের সাথে আমরা একটি নিরাপদ ও অনুপ্রেরণাদায়ক পরিবেশ তৈরি করতে প্রতিশ্রুতিবদ্ধ,
                যেখানে শিক্ষার্থীরা বড় স্বপ্ন দেখতে এবং জীবনের সকল ক্ষেত্রে উৎকর্ষ অর্জনে উৎসাহিত হয়।"
              </span>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrincipalMessage;

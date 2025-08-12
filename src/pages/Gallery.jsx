import React from "react";

// Sample image URLs of real-life Bangladeshi schools (public domain or from Wikimedia Commons)
const images = [
    {
        src: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Viqarunnisa_Noon_School_and_College_Main_Building.jpg",
        alt: "Viqarunnisa Noon School and College, Dhaka",
    },
    {
        src: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Dhaka_College_Main_Building.jpg",
        alt: "Dhaka College Main Building",
    },
    {
        src: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Ideal_School_and_College_Motijheel.jpg",
        alt: "Ideal School and College, Motijheel",
    },
    {
        src: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Notre_Dame_College_Dhaka.jpg",
        alt: "Notre Dame College, Dhaka",
    },
    {
        src: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Holy_Cross_Girls%27_High_School_Dhaka.jpg",
        alt: "Holy Cross Girls' High School, Dhaka",
    },
    {
        src: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Rajshahi_Collegiate_School.jpg",
        alt: "Rajshahi Collegiate School",
    },
    {
        src: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Chittagong_Collegiate_School.jpg",
        alt: "Chittagong Collegiate School",
    },
    {
        src: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Comilla_Zilla_School.jpg",
        alt: "Comilla Zilla School",
    },
    {
        src: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Barisal_Zilla_School.jpg",
        alt: "Barisal Zilla School",
    },
    {
        src: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Mymensingh_Zilla_School.jpg",
        alt: "Mymensingh Zilla School",
    },
    {
        src: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Jessore_Zilla_School.jpg",
        alt: "Jessore Zilla School",
    },
    {
        src: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Bogura_Zilla_School.jpg",
        alt: "Bogura Zilla School",
    },
    {
        src: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Khulna_Zilla_School.jpg",
        alt: "Khulna Zilla School",
    },
    {
        src: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Sylhet_Government_Pilot_High_School.jpg",
        alt: "Sylhet Government Pilot High School",
    },
    {
        src: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Rangpur_Zilla_School.jpg",
        alt: "Rangpur Zilla School",
    },
];

export default function Gallery() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-100 py-10 px-4">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold text-center text-green-800 mb-2">
                    School Gallery
                </h1>
                <p className="text-center text-gray-600 mb-8">
                    A glimpse of Natiapara High School, Delduar, Tangail
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {images.map((img, idx) => (
                        <div
                            key={idx}
                            className="rounded-lg overflow-hidden shadow-lg bg-white hover:scale-105 transition-transform duration-200"
                        >
                            <img
                                src={img.src}
                                alt={img.alt}
                                className="w-full h-56 object-cover"
                                loading="lazy"
                            />
                            <div className="p-3">
                                <p className="text-sm text-gray-700 font-semibold">{img.alt}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
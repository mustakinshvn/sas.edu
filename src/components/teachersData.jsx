import { useState } from "react";
const Teacher1 = "https://storage.googleapis.com/example-images/130415/teacher/40.jpeg";
const Teacher2 = "https://tfe-bd.sgp1.cdn.digitaloceanspaces.com/uploads/1664893657.jpg";
const Teacher3 = "https://hinduvoice.in/wp-content/uploads/2024/03/IMG_20240318_194312_1560_x_900_pixel.jpg";
const Teacher4 = "https://www.gaghscsyl.edu.bd/images/upload/213.jpeg";
const Teacher5 = "https://randomuser.me/api/portraits/men/67.jpg";
const Teacher6 = "https://wsup.com/wp-content/uploads/2019/03/Rokeya-Akter-teacher-1024x682.jpg";
const Teacher7 = "https://www.sau.edu.bd/uploads/teacher/img/25-S.%20M.%20Abdullah60c8ea594f9b0.jpeg";
const Teacher8 = "https://www.dcgpsc.edu.bd/media/teacher_staff/IMG_9808.JPG";
const Teacher9 = "https://randomuser.me/api/portraits/men/69.jpg";
const Teacher10 = "https://storage.googleapis.com/example-images/135228/teacher/14.jpg";
const Teacher11 = "https://www.shutterstock.com/image-photo/chapainawabganjbangladesh-november-10-2024teacher-guiding-260nw-2557371823.jpg";
const Teacher12 = "https://storage.googleapis.com/example-images/129785/teacher/27.jpg";

const teachersData = [
  { id: 1, name: "মোঃ আনোয়ার হোসেন", subject: "গণিত", contact: "০১৭১১-১২৩৪৫৬", img: Teacher1 },
  { id: 2, name: "ফারহানা আক্তার", subject: "ইংরেজি", contact: "০১৮১২-২৩৪৫৬৭", img: Teacher2 },
  { id: 3, name: "শামীম আহমেদ", subject: "পদার্থবিজ্ঞান", contact: "০১৯১৩-৩৪৫৬৭৮", img: Teacher3 },
  { id: 4, name: "নাসরিন সুলতানা", subject: "রসায়ন", contact: "০১৬১৪-৪৫৬৭৮৯", img: Teacher4 },
  { id: 5, name: "আব্দুল করিম", subject: "জীববিজ্ঞান", contact: "০১৫১৫-৫৬৭৮৯০", img: Teacher5 },
  { id: 6, name: "রোকেয়া বেগম", subject: "বাংলা", contact: "০১৭১৬-৬৭৮৯০১", img: Teacher6 },
  { id: 7, name: "জামাল উদ্দিন", subject: "আইসিটি", contact: "০১৮১৭-৭৮৯০১২", img: Teacher7 },
  { id: 8, name: "শিরিন আক্তার", subject: "ইসলাম শিক্ষা", contact: "০১৯১৮-৮৯০১২৩", img: Teacher8 },
  { id: 9, name: "মিজানুর রহমান", subject: "ভূগোল", contact: "০১৬১৯-৯০১২৩৪", img: Teacher9 },
  { id: 10, name: "সালমা খাতুন", subject: "অর্থনীতি", contact: "০১৫১০-০১২৩৪৫", img: Teacher10 },
  { id: 11, name: "হাবিবুর রহমান", subject: "ইতিহাস", contact: "০১৭১১-১১২২৩৩", img: Teacher11 },
  { id: 12, name: "শামীম উদ্দিন", subject: "পৌরনীতি", contact: "০১৮১২-২২৩৩৪৪", img: Teacher12 },
];

const INITIAL_VISIBLE = 4;

export default function TeachersList() {
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);

  const handleSeeMore = () => setVisibleCount(teachersData.length);
  const handleSeeLess = () => setVisibleCount(INITIAL_VISIBLE);

  return (
    <section className="max-w-7xl mx-auto py-14 px-4 bg-gradient-to-br from-blue-50 via-white to-blue-100 rounded-3xl shadow-2xl">
      <h2 className="text-4xl font-extrabold text-center mb-14 text-blue-800 tracking-tight drop-shadow-lg">
        শিক্ষকবৃন্দ
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {teachersData.slice(0, visibleCount).map(teacher => (
          <div
            key={teacher.id}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center p-8 border border-blue-100 relative group"
          >
            <div className="relative mb-5">
              <img
                src={teacher.img}
                alt={teacher.name}
                className="w-32 h-32 rounded-full object-cover border-4 border-blue-300 shadow-lg group-hover:scale-105 transition-transform duration-300"
              />
              <span className="absolute -bottom-2 -right-2 bg-gradient-to-r from-blue-600 to-blue-400 text-white text-xs px-3 py-1 rounded-full shadow-lg font-bold border-2 border-white">
                #{teacher.id}
              </span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1 text-center">{teacher.name}</h3>
            <p className="text-blue-700 font-semibold mb-2 text-center tracking-wide">
              <span className="inline-block bg-blue-100 px-2 py-0.5 rounded-lg">
                বিষয়: {teacher.subject}
              </span>
            </p>
            <p className="text-gray-500 text-base text-center mb-4">
              <span className="inline-flex items-center gap-1">
                <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M2 8.5C2 6.01472 4.01472 4 6.5 4H17.5C19.9853 4 22 6.01472 22 8.5V15.5C22 17.9853 19.9853 20 17.5 20H6.5C4.01472 20 2 17.9853 2 15.5V8.5Z" />
                  <path d="M6 8V8.01" />
                  <path d="M6 16V16.01" />
                </svg>
                যোগাযোগ: {teacher.contact}
              </span>
            </p>
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded shadow font-semibold">
                অভিজ্ঞ শিক্ষক
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-12">
        {visibleCount < teachersData.length ? (
          <button
            onClick={handleSeeMore}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-full font-bold shadow-lg hover:from-blue-700 hover:to-blue-500 transition-all duration-300 text-lg tracking-wide"
          >
            আরও দেখুন
          </button>
        ) : teachersData.length > INITIAL_VISIBLE ? (
          <button
            onClick={handleSeeLess}
            className="px-8 py-3 bg-gradient-to-r from-gray-200 to-gray-100 text-blue-700 rounded-full font-bold shadow-lg hover:from-gray-300 hover:to-gray-200 transition-all duration-300 text-lg tracking-wide"
          >
            কম দেখান
          </button>
        ) : null}
      </div>
    </section>
  );
}

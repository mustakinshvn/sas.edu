import React, { useState } from 'react';

const sampleNotices = [
  {
    id: 1,
    title: 'বিদ্যালয়ে বার্ষিক ক্রীড়া প্রতিযোগিতা অনুষ্ঠিত হবে',
    created_at: '2024-06-01',
    filename: 'sports_notice.pdf',
  },
  {
    id: 2,
    title: 'শিক্ষার্থীদের জন্য গ্রীষ্মকালীন ছুটির বিজ্ঞপ্তি',
    created_at: '2024-05-25',
    filename: 'summer_vacation.pdf',
  },
  {
    id: 3,
    title: 'পরীক্ষার সময়সূচি প্রকাশিত হয়েছে',
    created_at: '2024-05-20',
    filename: 'exam_schedule.pdf',
  },
  {
    id: 4,
    title: 'নতুন পাঠ্যবই বিতরণ সংক্রান্ত বিজ্ঞপ্তি',
    created_at: '2024-05-15',
    filename: 'book_distribution.pdf',
  },
  {
    id: 5,
    title: 'বিদ্যালয় পরিষ্কার-পরিচ্ছন্নতা অভিযান',
    created_at: '2024-05-10',
    filename: 'cleaning_campaign.pdf',
  },
  {
    id: 6,
    title: 'শিক্ষক-অভিভাবক সভার বিজ্ঞপ্তি',
    created_at: '2024-05-05',
    filename: 'parent_meeting.pdf',
  },
  {
    id: 7,
    title: 'বিদ্যালয়ে বিজ্ঞান মেলা অনুষ্ঠিত হবে',
    created_at: '2024-05-01',
    filename: 'science_fair.pdf',
  },
  {
    id: 8,
    title: 'বিদ্যালয়ে স্বাস্থ্য পরীক্ষা কর্মসূচি',
    created_at: '2024-04-28',
    filename: 'health_checkup.pdf',
  },
  {
    id: 9,
    title: 'নতুন শিক্ষাবর্ষের ভর্তি বিজ্ঞপ্তি',
    created_at: '2024-04-20',
    filename: 'admission_notice.pdf',
  },
  {
    id: 10,
    title: 'বিদ্যালয়ে বৃক্ষরোপণ কর্মসূচি',
    created_at: '2024-04-15',
    filename: 'tree_plantation.pdf',
  },
  {
    id: 11,
    title: 'শিক্ষার্থীদের ইউনিফর্ম সংক্রান্ত বিজ্ঞপ্তি',
    created_at: '2024-04-10',
    filename: 'uniform_notice.pdf',
  },
  {
    id: 12,
    title: 'বিদ্যালয়ে সাংস্কৃতিক অনুষ্ঠান',
    created_at: '2024-04-05',
    filename: 'cultural_program.pdf',
  },
  {
    id: 13,
    title: 'শিক্ষার্থীদের জন্য টিকা কর্মসূচি',
    created_at: '2024-04-01',
    filename: 'vaccination_program.pdf',
  },
  {
    id: 14,
    title: 'বিদ্যালয়ে নতুন কম্পিউটার ল্যাব উদ্বোধন',
    created_at: '2024-03-28',
    filename: 'computer_lab.pdf',
  },
  {
    id: 15,
    title: 'বিদ্যালয়ে বার্ষিক শিক্ষা সফর',
    created_at: '2024-03-20',
    filename: 'study_tour.pdf',
  },
];

const RecentNotices = () => {
  const [notices] = useState(sampleNotices);
  const [search, setSearch] = useState('');
  const [filteredNotices, setFilteredNotices] = useState(sampleNotices);
  const [displayedNotices, setDisplayedNotices] = useState(sampleNotices.slice(0, 5));
  const [showAll, setShowAll] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    const filtered = notices.filter((notice) =>
      notice.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredNotices(filtered);
    setDisplayedNotices(filtered.slice(0, 5));
    setShowAll(false);
  };

  const handleSeeMore = () => {
    setDisplayedNotices(filteredNotices.slice(0, 15));
    setShowAll(true);
  };

  const handleSeeLess = () => {
    setDisplayedNotices(filteredNotices.slice(0, 5));
    setShowAll(false);
  };

  // Keep displayedNotices in sync if search changes
  React.useEffect(() => {
    setFilteredNotices(notices);
    setDisplayedNotices(notices.slice(0, 5));
    setShowAll(false);
  }, [notices]);

  return (
    <div className="bg-gradient-to-br from-white via-green-50 to-green-100 p-4 sm:p-8 shadow-2xl rounded-3xl border border-green-200 w-full max-w-full mx-auto mt-6 sm:mt-10">
      <div className="flex items-center mb-6 sm:mb-8 border-b-2 border-green-200 pb-3 sm:pb-4">
        <div className="bg-green-500 rounded-full p-2 sm:p-3 shadow-lg mr-3 sm:mr-4">
          <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-green-700 tracking-tight drop-shadow-sm">নোটিশ বোর্ড</h2>
      </div>
      <form onSubmit={handleSearch} className="flex items-center mb-4 gap-2">
        <input
          type="text"
          placeholder="নোটিশ খুঁজুন..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 px-3 py-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 text-green-900"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-gradient-to-r from-green-600 to-green-400 text-white rounded-lg shadow hover:from-green-700 hover:to-green-500 transition-all font-bold"
        >
          অনুসন্ধান
        </button>
      </form>
      <div className="overflow-x-auto rounded-xl border border-green-100 shadow-md bg-white w-full">
        <table className="w-full min-w-[400px] sm:min-w-[600px]">
          <thead>
            <tr className="bg-gradient-to-r from-green-600 to-green-400 text-white">
              <th className="p-2 sm:p-4 font-bold text-base sm:text-lg border-b border-green-200 text-left">বর্ণনা</th>
              <th className="p-2 sm:p-4 font-bold text-base sm:text-lg border-b border-green-200 text-left">তারিখ</th>
              <th className="p-2 sm:p-4 font-bold text-base sm:text-lg border-b border-green-200 text-left right-0">ডাউনলোড</th>
            </tr>
          </thead>
          <tbody>
            {displayedNotices.length === 0 ? (
              <tr>
                <td colSpan={3} className="text-center py-6 text-green-700 font-semibold">
                  কোনো নোটিশ পাওয়া যায়নি
                </td>
              </tr>
            ) : (
              displayedNotices.map((notice, idx) => (
                <tr
                  key={notice.id}
                  className={`transition-all duration-200 ${
                    idx % 2 === 0 ? 'bg-green-50' : 'bg-white'
                  } hover:bg-green-100`}
                >
                  <td className="p-2 sm:p-4 text-green-900 font-semibold">{notice.title}</td>
                  <td className="p-2 sm:p-4 text-green-700 font-medium">
                    {new Date(notice.created_at).toLocaleDateString('bn-BD', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </td>
                  <td className="p-2 sm:p-4">
                    <a
                      href={`/uploads/${notice.filename}`}
                      download
                      className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-green-500 to-green-400 text-white rounded-lg shadow-md hover:from-green-600 hover:to-green-500 transition-all text-sm sm:text-base font-bold focus:outline-none focus:ring-2 focus:ring-green-400"
                    >
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
                      </svg>
                      ডাউনলোড
                    </a>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      <div className="flex justify-end mt-4 sm:mt-6">
        {!showAll && filteredNotices.length > 5 && displayedNotices.length < filteredNotices.length ? (
          <button
            onClick={handleSeeMore}
            className="px-4 py-1.5 sm:px-6 sm:py-2 bg-gradient-to-r from-green-600 to-green-400 text-white rounded-xl shadow-lg hover:from-green-700 hover:to-green-500 transition-all font-bold text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            আরও দেখুন
          </button>
        ) : null}
        {showAll && filteredNotices.length > 5 ? (
          <button
            onClick={handleSeeLess}
            className="px-4 py-1.5 sm:px-6 sm:py-2 bg-gradient-to-r from-gray-400 to-gray-200 text-gray-800 rounded-xl shadow-lg hover:from-gray-500 hover:to-gray-300 transition-all font-bold text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-gray-300"
          >
            কম দেখুন
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default RecentNotices;
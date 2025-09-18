import React, { useState } from 'react';
import Courses from '../assets/courses.png';

const Certificates = ({ category }) => {
  const [showAll, setShowAll] = useState(false);

  const certificates = [
    {
      id: 1,
      title: 'Figma UI/UX Design Essentials',
      level: 'Beginner',
      category: category || 'Courses',
      image:
        'https://via.placeholder.com/280x180/00BF63/FFFFFF?text=UI/UX+Course',
    },
    {
      id: 2,
      title: 'Web Development Fundamentals',
      level: 'Beginner',
      category: category || 'Courses',
      image:
        'https://via.placeholder.com/280x180/00BF63/FFFFFF?text=Web+Dev+Course',
    },
    {
      id: 3,
      title: 'Data Science Principles',
      level: 'Intermediate',
      category: category || 'Courses',
      image:
        'https://via.placeholder.com/280x180/00BF63/FFFFFF?text=Data+Science',
    },
    {
      id: 4,
      title: 'Digital Marketing Strategy',
      level: 'Beginner',
      category: category || 'Courses',
      image: 'https://via.placeholder.com/280x180/00BF63/FFFFFF?text=Marketing',
    },
    {
      id: 5,
      title: 'Advanced JavaScript Techniques',
      level: 'Advanced',
      category: category || 'Courses',
      image:
        'https://via.placeholder.com/280x180/00BF63/FFFFFF?text=JavaScript',
    },
    {
      id: 6,
      title: 'Mobile App Development',
      level: 'Intermediate',
      category: 'Courses',
      image:
        'https://via.placeholder.com/280x180/00BF63/FFFFFF?text=Mobile+App',
    },
    {
      id: 7,
      title: 'Cloud Computing Essentials',
      level: 'Beginner',
      category: 'Courses',
      image:
        'https://via.placeholder.com/280x180/00BF63/FFFFFF?text=Cloud+Computing',
    },
    {
      id: 8,
      title: 'Python for Data Analysis',
      level: 'Intermediate',
      category: 'Courses',
      image:
        'https://via.placeholder.com/280x180/00BF63/FFFFFF?text=Python+Data',
    },
  ];

  const displayedCertificates = showAll
    ? certificates
    : certificates.slice(0, 4);

  return (
    <section className="py-12 px-4 md:px-8 lg:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-left mb-10">
          {category
            ? 'Start Learning with Free Courses'
            : 'Most Popular Certificates'}
        </h2>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {displayedCertificates.map((certificate) => (
            <div
              key={certificate.id}
              className="bg-white rounded-[3px] overflow-hidden shadow-md transition-transform duration-300 hover:translate-y-[-5px]"
            >
              <img
                src={Courses}
                alt={certificate.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-5">
                <h3 className="font-bold text-lg mb-2 leading-tight">
                  {certificate.title}
                </h3>
                <div className="flex flex-col items-start mb-2">
                  <span className="bg-[#00BF63] bg-opacity-20 text-[#00BF63] text-xs font-medium px-2.5 py-0.5 rounded">
                    {certificate.level}
                  </span>
                  <span className="text-sm text-gray-600 mt-2">
                    {certificate.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        <div className="text-left">
          <button
            onClick={() => setShowAll(!showAll)}
            className="bg-[#00BF63] hover:bg-[#00A055] text-white font-medium py-3 px-8 rounded-lg transition duration-300"
          >
            {showAll ? 'Show Less' : 'Show More'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Certificates;

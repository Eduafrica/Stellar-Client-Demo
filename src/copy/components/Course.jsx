import React, { useState } from 'react';
import Courses from '../assets/courses.png';

const Course = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLevel, setSelectedLevel] = useState('Beginner');
  const [searchQuery, setSearchQuery] = useState('');
  const [showAllCourses, setShowAllCourses] = useState(false);

  // Categories data
  const categories = [
    'All',
    'Software Engineering & IT',
    'Business',
    'Video Editor',
    'Data Science & Analytics',
    'Healthcare',
    'UI/UX Designer',
  ];

  // Course data
  const courses = [
    {
      id: 1,
      title: 'Fundamental of early childhood education',
      level: 'Beginner',
      category: 'Software Engineering & IT',
      description:
        'A Data Analyst collects, cleans, and interprets data, using tools like Excel, SQL, and Tableau to analyze trends and provide insights for decisions.',
      rating: 4.8,
      reviews: 86,
      price: 'N5,000.00',
      image: 'https://via.placeholder.com/300x200/3B82F6/FFFFFF?text=Course+1',
    },
    {
      id: 2,
      title: 'Figma UI/UX Design Essentials',
      level: 'Beginner',
      category: 'UI/UX Designer',
      description:
        'A Data Analyst collects, cleans, and interprets data, using tools like Excel, SQL, and Tableau to analyze trends and provide insights for decisions.',
      rating: 4.9,
      reviews: 86,
      price: 'N5,000.00',
      image: 'https://via.placeholder.com/300x200/3B82F6/FFFFFF?text=Course+2',
    },
    {
      id: 3,
      title: 'Advanced Data Analysis',
      level: 'Intermediate',
      category: 'Data Science & Analytics',
      description:
        'A Data Analyst collects, cleans, and interprets data, using tools like Excel, SQL, and Tableau to analyze trends and provide insights for decisions.',
      rating: 4.7,
      reviews: 86,
      price: 'N5,000.00',
      image: 'https://via.placeholder.com/300x200/3B82F6/FFFFFF?text=Course+3',
    },
    {
      id: 4,
      title: 'Business Management Fundamentals',
      level: 'Beginner',
      category: 'Business',
      description:
        'A Data Analyst collects, cleans, and interprets data, using tools like Excel, SQL, and Tableau to analyze trends and provide insights for decisions.',
      rating: 4.8,
      reviews: 86,
      price: 'N5,000.00',
      image: 'https://via.placeholder.com/300x200/3B82F6/FFFFFF?text=Course+4',
    },
    {
      id: 5,
      title: 'Healthcare Administration',
      level: 'Advanced',
      category: 'Healthcare',
      description:
        'A Data Analyst collects, cleans, and interprets data, using tools like Excel, SQL, and Tableau to analyze trends and provide insights for decisions.',
      rating: 4.9,
      reviews: 86,
      price: 'N5,000.00',
      image: 'https://via.placeholder.com/300x200/3B82F6/FFFFFF?text=Course+5',
    },
    {
      id: 6,
      title: 'Video Editing Masterclass',
      level: 'Intermediate',
      category: 'Video Editor',
      description:
        'A Data Analyst collects, cleans, and interprets data, using tools like Excel, SQL, and Tableau to analyze trends and provide insights for decisions.',
      rating: 4.6,
      reviews: 86,
      price: 'N5,000.00',
      image: 'https://via.placeholder.com/300x200/3B82F6/FFFFFF?text=Course+6',
    },
  ];

  // Filter courses based on selected category, level, and search query
  const filteredCourses = courses.filter((course) => {
    const matchesCategory =
      selectedCategory === 'All' || course.category === selectedCategory;
    const matchesLevel =
      selectedLevel === 'All' || course.level === selectedLevel;
    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesLevel && matchesSearch;
  });

  // Only show first 3 courses initially
  const displayedCourses = showAllCourses
    ? filteredCourses
    : filteredCourses.slice(0, 3);

  // Function to render star ratings
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <span key={i} className="text-yellow-500">
          ★
        </span>
      );
    }

    if (hasHalfStar) {
      stars.push(
        <span key="half" className="text-yellow-500">
          ★
        </span>
      );
    }

    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <span key={`empty-${i}`} className="text-gray-300">
          ★
        </span>
      );
    }

    return stars;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Heading and Search Section */}
        <div className="mb-12">
          {/* Search Bar */}
          <div className="flex max-w-2xl mx-auto mb-8">
            <input
              type="text"
              placeholder="What do you want to learn?"
              className="flex-grow py-3 px-6 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-[#00BF63]"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="bg-[#00BF63] hover:bg-[#00A055] text-white font-medium py-3 px-6 rounded-r-lg transition duration-300">
              Search
            </button>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <div className="p-4 w-full">
              <div className="flex flex-wrap items-center gap-4">
                {/* Level Dropdown */}
                <div className="flex items-center">
                  {/* <span className="mr-2 font-medium">Level:</span> */}
                  <select
                    value={selectedLevel}
                    onChange={(e) => setSelectedLevel(e.target.value)}
                    className="border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-[#00BF63]"
                  >
                    <option value="All">All</option>
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                  </select>
                </div>

                {/* Separator Line */}
                <div className="h-6 w-px bg-gray-300"></div>

                {/* Category Filter */}
                <div className="flex items-center">
                  {/* <span className="mr-2 font-medium">Category:</span> */}
                  <div className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-3 py-1 rounded-full text-sm ${
                          selectedCategory === category
                            ? 'bg-[#00BF63] text-white border border-[#00BF63]'
                            : 'bg-white text-gray-700 border border-gray-300'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Courses Section */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Side - "Pick a course" section */}
          <div className="lg:w-1/4">
            <div className="p-6 rounded-lg h-fit sticky top-6">
              <h1 className="text-4xl font-semi-bold mb-2">Pick a course</h1>
              <p className="text-gray-600 mb-6">
                Develop the expertise and competencies required to drive career
                growth.
              </p>
              <button
                className="w-full bg-[#00BF63] hover:bg-[#00A055] text-white font-medium py-2 px-4 rounded-lg transition duration-300"
                onClick={() => setShowAllCourses(!showAllCourses)}
              >
                {showAllCourses ? 'Show Less Courses' : 'Explore all courses'}
              </button>
            </div>
          </div>

          {/* Right Side - Course Grid */}
          <div className="lg:w-3/4">
            {displayedCourses.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500">
                  No courses found matching your criteria.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {displayedCourses.map((course) => (
                  <div
                    key={course.id}
                    className="bg-white rounded-[3px] shadow-md overflow-hidden"
                  >
                    <img
                      src={Courses}
                      alt={course.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <span className="bg-[#00BF63] bg-opacity-20 text-[#00BF63] text-xs font-medium px-2.5 py-0.5 rounded">
                          {course.level}
                        </span>
                      </div>
                      <h4 className="font-bold text-lg mb-2">{course.title}</h4>
                      <p className="text-gray-600 text-sm mb-4">
                        {course.description}
                      </p>
                      <div className="flex items-center mb-2">
                        <div className="flex mr-2">
                          {renderStars(course.rating)}
                        </div>
                        <span className="text-sm text-gray-600">
                          {course.rating} ({course.reviews})
                        </span>
                      </div>
                      <div className="flex justify-between items-center mt-4">
                        <span className="font-bold text-gray-900">
                          {course.price}
                        </span>
                        <button className="text-[#00BF63] font-medium hover:text-[#00A055]">
                          Enroll Now
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;

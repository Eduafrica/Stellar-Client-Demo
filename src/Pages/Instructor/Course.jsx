import { useState, useEffect } from 'react';
import PageLayout from '../PageLayout';
import { useNavigate, useLocation } from 'react-router';
import { useFetchCategories, useFetchCourse } from '../../Helpers/fetch';
import CoursesCard from '../../Component/CoursesCard';
import Spinner from '../../Component/Helpers/Spinner';
import YourLearningPatner from '../../Component/YourLearningPatner';

function Courses({ setSelectedCourse }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('All');

  // Extract ?search= from URL
  const params = new URLSearchParams(location.search);
  const initialSearch = params.get('search') || '';

  const [searchTerm, setSearchTerm] = useState(initialSearch);
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Handle search navigation
  const handleSearch = () => {
    if (searchTerm.trim() !== '') {
      navigate(
        `/instructor/course?search=${encodeURIComponent(searchTerm.trim())}`
      );
    } else {
      navigate('/instructor/course');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSearch();
  };

  const { data, isFetching } = useFetchCategories();
  const categories = data?.data?.categories || [];

  // 🔑 Priority: searchTerm from query > category
  const { data: courseData, isFetching: isFetchingCourses } = useFetchCourse(
    searchTerm || selectedCategory
  );
  const courses = courseData?.data?.courses || [];

  return (
    <PageLayout>
      <div className="bg-cream padx min-h-screen">
        <div className="pt-[4rem]">
          {/* SEARCH */}
          <div className="mt-6 w-[60%]">
            <div className="flex items-center gap-2">
              <p className="text-[#0F1114] text-[35px] font-medium whitespace-nowrap">
                My Courses
              </p>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="What do you want to learn?"
                className="input font-normal"
              />
              <div onClick={handleSearch} className="btn cursor-pointer">
                Search
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-center md:justify-start gap-2 my-2">
            {['All', 'Pending', 'Successful', 'Failed'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 font-medium rounded-lg text-sm md:text-base ${
                  activeTab === tab
                    ? 'text-[#00BF63] bg-[#B0EBCF]'
                    : 'text-gray-500 bg-white hover:text-gray-700'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          {/* COURSES LIST */}
          <div className="">
            {isFetchingCourses ? (
              <div className="flex items-center justify-center h-[50vh]">
                <Spinner />
              </div>
            ) : (
              <div className="mt-[4rem] flex items-center justify-center">
                <CoursesCard
                  setSelectedCourse={setSelectedCourse}
                  data={courses}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export default Courses;

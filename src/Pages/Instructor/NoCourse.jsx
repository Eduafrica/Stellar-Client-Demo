import Footer from '../Footer';
import Navbar from './Navbar';

const NoCourses = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full text-center">
          {/* Icon */}
          <div className="flex justify-center">
            <svg
              className="h-24 w-24 text-gray-300 mb-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 14l9-5-9-5-9 5 9 5z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 14l9-5-9-5-9 5 9 5z"
                opacity="0.3"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 14v6l9-5m-9 5l-9-5m9 5v-6m0 0l-9-5m9 5l9-5"
              />
            </svg>
          </div>

          {/* Heading */}
          <h2 className="text-3xl font-bold text-gray-800 mb-2">No Courses</h2>

          {/* Description */}
          <p className="text-lg text-gray-600 mb-8">
            You have not added any courses yet. Explore courses to add course
          </p>

          {/* Button */}
          <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#00BF63] hover:bg-[#00BF63] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00BF63] transition-colors duration-200">
            Explore Course
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NoCourses;

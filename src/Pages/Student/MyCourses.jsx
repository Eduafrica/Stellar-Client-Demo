import { useState, useEffect } from 'react'
import { useNavigate, useLocation, Link } from 'react-router'
import CoursesCard from '../../Component/CoursesCard'
import Spinner from '../../Component/Helpers/Spinner'
import YourLearningPatner from '../../Component/YourLearningPatner'
import PageLayout from '../PageLayout'
import { useFetchStudentCourse,useFetchCategories } from '../../Helpers/fetch'
import useUserStore from '../../store/userStore'

function MyCourses({ setSelectedCourse }) {
  const navigate = useNavigate()
  const location = useLocation()
    const { user } = useUserStore()

  // Extract ?search= from URL
  const params = new URLSearchParams(location.search)
  const initialSearch = params.get('search') || ''

  const [searchTerm, setSearchTerm] = useState(initialSearch)
  const [selectedCategory, setSelectedCategory] = useState('all')

  const handleCategoryChange = (slug) => {
    setSelectedCategory(slug)
    // Reset search term when switching category
    setSearchTerm('')
    navigate('/my-courses') // clear search query from URL
  }

  // Handle search navigation
  const handleSearch = () => {
    if (searchTerm.trim() !== '') {
      navigate(`/my-courses?search=${encodeURIComponent(searchTerm.trim())}`)
    } else {
      navigate('/my-courses')
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSearch()
  }

  const { data, isFetching } = useFetchCategories()
  const categories = data?.data?.categories || []

  // 🔑 Priority: searchTerm from query > category
  const { data: courseData, isFetching: isFetchingCourses } = useFetchStudentCourse(
    searchTerm || selectedCategory
  )
  const courses = courseData?.data?.courses || []

  return (
    <PageLayout>
      <div className="bg-cream padx min-h-screen">
        <div className="pt-[4rem]">
          {/* SEARCH */}
          <div className="mt-6 w-[60%]">
            <div className="flex items-start gap-2 flex-col">
              <p className="text-[#0F1114] text-[48px] font-medium whitespace-nowrap">
                Hello {user?.displayName}, Your Courses <span className='text-[14px] font-medium text-gray-700'>({courses?.length} courses)</span>
              </p>
              <div className="flex items-center gap-1">
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
          </div>

          {/* CATEGORIES */}
          <div className="mt-[3rem] w-full flex items-center justify-center gap-6">
            <div className="btn2 rounded-[32px] text-[14px] font-normal px-4 py-2 whitespace-nowrap">
              {selectedCategory}
            </div>
            <span className="border-r-[1px] h-[20px] border-gray-400"></span>
            <div className="w-full overflow-x-auto scrollbar-hide">
              <div className="flex gap-4 whitespace-nowrap">
                {/* All always at the beginning */}
                <div
                  onClick={() => handleCategoryChange('all')}
                  className={`rounded-[32px] text-[14px] font-normal px-4 py-2 cursor-pointer ${
                    selectedCategory === 'all' ? 'btn' : 'btn2'
                  }`}
                >
                  All
                </div>

                {categories.map((i) => (
                  <div
                    key={i._id}
                    onClick={() => handleCategoryChange(i.name)}
                    className={`rounded-[32px] text-[14px] font-normal px-4 py-2 cursor-pointer whitespace-nowrap ${
                      i.name === selectedCategory ? 'btn' : 'btn2'
                    }`}
                  >
                    {i.name}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* COURSES LIST */}
           <div className="">
                {
                    isFetchingCourses ? (
                        <div className="flex items-center justify-center h-[50vh]">
                            <Spinner />
                        </div>
                    ) : (
                        <div className="mt-[6rem] flex items-center justify-center">
                            {
                                courses?.length < 1 ? (
                                    <div className="flex flex-col items-center justify-center">
                                        <h2 className='text-primary font-semibold text-[21px]'>No Course Found</h2>
                                        <Link to='/courses' className="btn">Explore courses</Link>
                                    </div>
                                )  : (
                                    <CoursesCard setSelectedCourse={setSelectedCourse} data={courses} />
                                )
                            }
                        </div>
                    )
                }
           </div>

        </div>
      </div>

        {/**YOUR LEARNING PATNER */}
        <div className="padx bg-white">
            <div className="py-[96px]">
                <YourLearningPatner />
            </div>
        </div>
    </PageLayout>
  )
}

export default MyCourses

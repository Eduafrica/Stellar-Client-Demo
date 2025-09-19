import { useState, useEffect } from 'react'
import { useNavigate, useLocation, Link } from 'react-router'
import CoursesCard from '../../Component/CoursesCard'
import Spinner from '../../Component/Helpers/Spinner'
import YourLearningPatner from '../../Component/YourLearningPatner'
import PageLayout from '../PageLayout'
import { useFetchCategories, useFetchInstructorCourse } from '../../Helpers/fetch'
import useUserStore from '../../store/userStore'

function InstructorCourses({ setSelectedCourse }) {
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
    navigate('/instructor-courses') // clear search query from URL
  }

  // Handle search navigation
  const handleSearch = () => {
    if (searchTerm.trim() !== '') {
      navigate(`/instructor-courses?search=${encodeURIComponent(searchTerm.trim())}`)
    } else {
      navigate('/instructor-courses')
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSearch()
  }

  const { data, isFetching } = useFetchCategories()
  const categories = data?.data?.categories || []

  // 🔑 Priority: searchTerm from query > category
  const { data: courseData, isFetching: isFetchingCourses } = useFetchInstructorCourse(
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
              <p className="text-[#0F1114] text-[32px] font-medium whitespace-nowrap">
                Hello {user?.name}, Your Courses <span className='text-[14px] font-medium text-gray-700'>({courses?.length} courses)</span>
              </p>
              <div className="flex items-center gap-1">
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="Search you course here?"
                        className="input font-normal"
                    />
                    <div onClick={handleSearch} className="btn cursor-pointer">
                        Search
                    </div>
              </div>
            </div>
          </div>

          {/**NEW COURSE BTN */}
          <div className="flex items-center justify-end w-full">
            
            <Link to='/new-course' className="btn flex items-end justify-end">Add New Course</Link>
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

export default InstructorCourses

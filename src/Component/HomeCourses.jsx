import React, { useState } from 'react'
import { courseCategories } from '../data/courseCategories'
import { Link, useNavigate } from 'react-router'
import { useFetchCategories, useFetchCourse } from '../Helpers/fetch'
import CourseSlider from './CourseSlider'
import Spinner from './Helpers/Spinner'
import CategoriesCard from './CategoriesCard'
import { truncateText } from '../Utils/utils'
import CourseInfoScreen from './Helpers/CourseInfoScreen'

function HomeCourses() {
  const { data, isFetching } = useFetchCategories() 
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate()

  const categories = data?.data?.categories || []
  const handleCategoryChange = (slug) => {
    setSelectedCategory(slug)
  }

  // Handle search
  const handleSearch = () => {
    if (searchTerm.trim() !== '') {
      navigate(`/courses?search=${encodeURIComponent(searchTerm.trim())}`)
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  //get Course
  const { data: courseData, isFetching: isFetchingCourses } = useFetchCourse(selectedCategory)
  const courses = courseData?.data?.courses || []
  const topCourse = courseData?.data?.courses[0] || {}
  
  //popular course
  const { data: popularCourseData, isFetching: isFetchingPopularCourse } = useFetchCourse()
  const popularCourses = popularCourseData?.data?.courses || []

  //popular course
  const { data: careerPathCourseData, isFetching: isFetchingCareerPathCourse } = useFetchCourse()
  const careerPathCourses = careerPathCourseData?.data?.courses || []

  //popular course
  const { data: inDemandCourseData, isFetching: isFetchingInDemandCourse } = useFetchCourse()
  const inDemandCourses = inDemandCourseData?.data?.courses || []

  //selected course
  const [ selectedCourse, setSelectedCourse ] = useState('')

  if(selectedCourse) return <CourseInfoScreen selectedCourse={selectedCourse} setSelectedCourse={setSelectedCourse} />
  return (
    <div className="padx bg-cream min-h-screen">
      <div className="flex flex-col items-center justify-center font-poppins overflow-x-hidden w-full">
        {/** SEARCH */}
        <div className="mt-6 w-[40%]">
          <div className="flex items-center gap-4">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="What do you want to learn?"
              className="input font-normal"
            />
            <div onClick={handleSearch} className="btn cursor-pointer">Search</div>
          </div>
        </div>

        <div className="mt-[3rem] w-full flex items-center justify-center gap-6">
            <div className="btn2 rounded-[32px] text-[14px] font-normal px-4 py-2 whitespace-nowrap">{selectedCategory}</div>
            <span className='border-r-[1px] h-[20px] border-gray-400'></span>
            {/** CATEGORIES SLIDER */}
            <div className=" w-full overflow-x-auto scrollbar-hide">
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

        {/**COURSE */}
        <div className="mt-[6rem] w-full flex items-start justify-start gap-[52px]">
            <div className="flex w-fit flex-col gap-5">
                <h2 className='text-[30px] font-semibold text-[#0F1114]'>Pick a course</h2>

                <p className='text-[#0F1114] text-[16px] font-normal'>
                    Develop the expertise and competencies required to drive career growth.
                </p>
                <div className="">
                    <Link to='/courses' className="btn whitespace-nowrap text-[14px] py-[12px] px-[20px]">Explore all courses</Link>
                </div>
            </div>

            <div className="flex-1 w-full flex items-center justify-center gap-[27px]">
                {
                    isFetchingCourses ? (
                        <Spinner />
                    ) : (
                        <CourseSlider data={courses} />
                    )
                }
            </div>
        </div>

        {/**POPULAR COURSE */}
        <div className="mt-[6rem] w-full flex flex-col gap-[42px]">
            <h2 className='text-[36px] font-semibold text-gray-900'>Popular Course</h2>
            <div className="w-full">
                {
                    isFetchingPopularCourse ? (
                        <div className="">
                            <Spinner />
                        </div>
                    ) : (
                        <CourseSlider data={popularCourses} />
                    )
                }
            </div>
            <div className="w-fit">
                <Link className='btn' to='/courses'>Show More</Link>
            </div>
        </div>

        {/**CARRER PATH */}
        <div className="mt-[6rem] w-full flex items-start justify-start gap-[52px]">
            <div className="flex w-fit flex-col gap-5">
                <h2 className='text-[30px] font-semibold text-[#0F1114]'>Pick a Career Path</h2>

                <p className='text-[#0F1114] text-[16px] font-normal'>
                    Develop the expertise and competencies required to drive career growth.
                </p>
                <div className="">
                    <Link to='/courses' className="btn whitespace-nowrap text-[14px] py-[12px] px-[20px]">Explore all courses</Link>
                </div>
            </div>

            <div className="flex-1 w-full flex items-center justify-center gap-[27px]">
                {
                    isFetchingCareerPathCourse ? (
                        <Spinner />
                    ) : (
                        <CourseSlider data={careerPathCourses} />
                    )
                }
            </div>
        </div>

        <div className="mt-[6rem]">
            <CategoriesCard />
        </div>

        {/**TOP COURSE */}
        <div className="w-full mt-[7rem] flex items-center justify-center">
            <div className="flex w-[90%] py-[41px] border-[1px] rounded-[12px] border-gray-300 items-center justify-center">
                <div className="w-[80%] flex items-center justify-between">
                    <div className="flex flex-col gap-[34px]">
                        <h1 className='text-[#364152] text-[20px] font-semibold'>{topCourse?.title}</h1>
                        <p className='text-[#000000] text-[14px] font-light'>{truncateText(topCourse?.about, 50)}</p>
                        <div className="w-fit">
                            <div onClick={() => setSelectedCourse(topCourse?.courseId)} className="btn bg-transparent border-primary text-primary font-semibold">Get Started</div>
                        </div>
                    </div>

                    <div className="">
                        <img className='w-[283px] rounded-[12px] border-[1px] border-gray-300' src={topCourse?.image} />
                    </div>
                </div>
            </div>
        </div>

        {/**IN demand Course */}
        <div className="mt-[6rem] w-full flex flex-col gap-[42px]">
            <h2 className='text-[36px] font-semibold text-gray-900'>Build In-Demand Design and Product Skills</h2>
            <div className="w-full">
                {
                    isFetchingInDemandCourse ? (
                        <div className="">
                            <Spinner />
                        </div>
                    ) : (
                        <CourseSlider data={inDemandCourses} />
                    )
                }
            </div>
            <div className="w-fit">
                <Link className='btn' to='/courses'>Show More</Link>
            </div>
        </div>

      </div>
    </div>
  )
}

export default HomeCourses

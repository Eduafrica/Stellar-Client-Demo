import React from 'react'
import CourseCard from './Helpers/CourseCard'

function CoursesCard({ data }) {
    const courseData = data || []
  return (
    <div className='flex flex-wrap gap-5 items-center justify-center'>
        { 
            courseData?.map((i, idx) => (
                <CourseCard key={idx} data={i} />
            ))
        }
    </div>
  )
}

export default CoursesCard

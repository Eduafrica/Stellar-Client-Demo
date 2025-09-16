import { studentAuthImgArray } from '../../data/imageArray'
import useUserStore from '../../store/userStore'
import ImageSlider from '../ImageSlider'
import BuyCourseCard from './BuyCourseCard'

function CourseInfoScreen({ selectedCourse, setSelectedCourse }) {
    const { user } = useUserStore()
    const imageArray = studentAuthImgArray

  return (
    <div className='fixed z-[99999] h-screen w-screen top-0 left-0 flex flex-col bg-[#a59b9b39] items-center justify-center'>
        <div className="bg-white w-[80vw] flex h-[85vh] items-center justify-center">
            <div className="flex flex-1 h-full w-full bg-primary relative items-center justify-center">
                <ImageSlider imageArray={imageArray} />
            </div>

            <div className="flex flex-1 h-full w-full">
                <BuyCourseCard />
            </div>
        </div>
    </div>
  )
}

export default CourseInfoScreen

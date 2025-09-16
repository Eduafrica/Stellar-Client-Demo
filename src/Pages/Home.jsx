import PageLayout from './PageLayout'
import Hero from '../Component/Hero'
import HomeCourses from '../Component/HomeCourses'
import YourLearningPatner from '../Component/YourLearningPatner'

function Home() {
  return (
    <PageLayout>
        <div className="">
            <Hero />
            <HomeCourses />
            {/**YOUR LEARNING PATNER */}
            <div className="padx bg-white">
                <div className="py-[96px]">
                    <YourLearningPatner />
                </div>
            </div>
        </div>
    </PageLayout>
  )
}

export default Home

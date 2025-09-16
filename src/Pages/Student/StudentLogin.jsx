import ImageSlider from "../../Component/ImageSlider"
import GetStarted from "../../Component/StudentAuth/GetStarted"
import LoginCard from "../../Component/StudentAuth/LoginCard"
import RegisterCard from "../../Component/StudentAuth/RegisterCard"
import { studentAuthImgArray } from "../../data/imageArray"

function StudentLogin() {
    const imageArray = studentAuthImgArray

  return (
    <div className="w-screen h-screen flex items-start">
        <div className="flex flex-1 items-center justify-center h-full bg-primary">
            <ImageSlider imageArray={imageArray} />
        </div>

        <div className="flex flex-1 items-center justify-center h-full overflow-y-auto scroll-bar">
            <LoginCard />
        </div>

    </div>
  )
}

export default StudentLogin

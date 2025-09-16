import { BrowserRouter, Route, Routes } from "react-router"
import StudentGetStarted from "./Pages/Student/StudentGetStarted"
import StudentRegister from "./Pages/Student/StudentRegister"
import StudentLogin from "./Pages/Student/StudentLogin"
import { ToastContainer } from "react-toastify"
import Home from "./Pages/Home"
import Courses from "./Pages/Courses"
import { useEffect, useState } from "react"
import CourseInfoScreen from "./Component/Helpers/CourseInfoScreen"

function App() {
  //selected course
  const [ selectedCourse, setSelectedCourse ] = useState('')

  useEffect(() => {
    if(selectedCourse){
        console.log('objectooo', selectedCourse)
    }
  }, [selectedCourse])
  
  return (
      <div className="app">
        {
            selectedCourse && <CourseInfoScreen selectedCourse={selectedCourse} setSelectedCourse={setSelectedCourse} />
        }
        <ToastContainer position='top-right' />
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home setSelectedCourse={setSelectedCourse} />} />
                <Route path="/courses" element={<Courses setSelectedCourse={setSelectedCourse} />} />
                <Route path="/student" element={<StudentGetStarted />} />
                <Route path="/student/register" element={<StudentRegister />} />
                <Route path="/student/login" element={<StudentLogin />} />


            </Routes>
        </BrowserRouter>
      
    </div>
  )
}

export default App

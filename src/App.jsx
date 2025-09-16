import { BrowserRouter, Route, Routes } from "react-router"
import StudentGetStarted from "./Pages/Student/StudentGetStarted"
import StudentRegister from "./Pages/Student/StudentRegister"
import StudentLogin from "./Pages/Student/StudentLogin"
import { ToastContainer } from "react-toastify"
import Home from "./Pages/Home"
import Courses from "./Pages/Courses"

function App() {
  return (
    <div className="app">
        <ToastContainer position='top-right' />
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/student" element={<StudentGetStarted />} />
                <Route path="/student/register" element={<StudentRegister />} />
                <Route path="/student/login" element={<StudentLogin />} />


            </Routes>
        </BrowserRouter>
      
    </div>
  )
}

export default App

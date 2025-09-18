import { BrowserRouter, Route, Routes } from 'react-router';
import StudentGetStarted from './Pages/Student/StudentGetStarted';
import InstructorGetStarted from './Pages/Instructor/InstructorGetStarted';
import StudentRegister from './Pages/Student/StudentRegister';
import StudentLogin from './Pages/Student/StudentLogin';
import InstructorHome from './Pages/Instructor/Home';
import InstructorNotifications from './Pages/Instructor/Notifications';
import InstructorNo from './Pages/Instructor/NoCourse';
import { ToastContainer } from 'react-toastify';
import Home from './Pages/Home';
import Courses from './Pages/Courses';
import Wallet from './Pages/Instructor/Wallet';
import { useEffect, useState } from 'react';
import CourseInfoScreen from './Component/Helpers/CourseInfoScreen';
import InstructorRegister from './Pages/Instructor/InstructorRegister';
import InstructorLogin from './Pages/Instructor/InstructorLogin';
import Course from './Pages/Instructor/Course';
import WalletPaymentMethod from './Pages/Wallet/WalletPaymentMethod';
import WalletOrderSummary from './Pages/Wallet/WalletOrderSummary';

function App() {
  //selected course
  const [selectedCourse, setSelectedCourse] = useState('');

  useEffect(() => {
    if (selectedCourse) {
      console.log('objectooo', selectedCourse);
    }
  }, [selectedCourse]);

  return (
    <div className="app">
      {selectedCourse && (
        <CourseInfoScreen
          selectedCourse={selectedCourse}
          setSelectedCourse={setSelectedCourse}
        />
      )}
      <ToastContainer position="top-right" />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Home setSelectedCourse={setSelectedCourse} />}
          />
          <Route path="/instructor/wallet" element={<Wallet />} />
          <Route path="/student/wallet" element={<Wallet />} />
          <Route
            path="/courses"
            element={<Courses setSelectedCourse={setSelectedCourse} />}
          />
          <Route path="/student" element={<StudentGetStarted />} />
          <Route
            path="/instructor/get-started"
            element={<InstructorGetStarted />}
          />
          <Route path="/instructor" element={<InstructorHome />} />
          <Route path="/instructor/no-course" element={<InstructorNo />} />
          <Route path="/instructor/courses" element={<Course />} />
          <Route
            path="/instructor/notifications"
            element={<InstructorNotifications />}
          />
          <Route path="/student/register" element={<StudentRegister />} />
          <Route
            path="/wallet/wallet-payment"
            element={<WalletPaymentMethod />}
          />
          <Route
            path="/wallet/order-summary"
            element={<WalletOrderSummary />}
          />
          <Route path="/instructor/register" element={<InstructorRegister />} />
          <Route path="/student/login" element={<StudentLogin />} />
          <Route path="/instructor/login" element={<InstructorLogin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

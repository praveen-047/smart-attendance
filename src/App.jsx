import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import Login from './pages/students/Login.jsx'
import './App.css'
import Nav from "./components/Nav.jsx";
import TopNav from "./components/TopNav.jsx";
import StudentHome from "./pages/students/StudentHome.jsx";
import StudentScan from "./pages/students/StudentScan.jsx";
import StudentHistory from "./pages/students/StudentHistory.jsx";


import TeacherDashboard from "./pages/teachers/TeacherDashboard.jsx";
const App = ()=>{

  return(
    <>
      <Router>
        <TopNav/>
        <div className="routes-container">
          <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/" element={<StudentHome/>}/>
          <Route path="/student/dashboard" element={<StudentHome/>}/>
          <Route path='/student/scan' element={<StudentScan/>}/>
          <Route path='/student/history' element={<StudentHistory/>}/>

          <Route path='/teacher/dashboard' element={<TeacherDashboard/>}/>
        </Routes>
        </div>
        <Nav/>
      </Router>
    </>
  )
}
export default App 
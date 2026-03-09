import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import Login from './pages/students/Login.jsx'
import './App.css'
import Nav from "./components/Nav.jsx";
import StudentHome from "./pages/students/StudentHome.jsx";
import StudentScan from "./pages/students/StudentScan.jsx";
import StudentHistory from "./pages/students/StudentHistory.jsx";
const App = ()=>{

  return(
    <>
      <Router>
        <Nav/>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/student/dashboard" element={<StudentHome/>}/>
          <Route path='/student/scan' element={<StudentScan/>}/>
          <Route path='/student/history' element={<StudentHistory/>}/>
        </Routes>
      </Router>
    </>
  )
}
export default App 
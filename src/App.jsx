import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import Login from './pages/Login.jsx'
import './App.css'
import StudentHome from "./pages/StudentHome.jsx";
const App = ()=>{

  return(
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/student-dashboard" element={<StudentHome/>}/>
        </Routes>
      </Router>
    </>
  )
}
export default App 
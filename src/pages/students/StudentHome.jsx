import { Link } from 'react-router-dom'

import { LuQrCode } from "react-icons/lu";
import { FaHistory } from "react-icons/fa";
import { HiMiniArrowTrendingUp } from "react-icons/hi2";
import { PiStudent } from "react-icons/pi";
import { FaJava } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import { PiTimerDuotone } from "react-icons/pi";
import { FaLocationDot } from "react-icons/fa6";
import "../../styles/studentHome.css"
import '../../styles/global.css'
const StudentHome = () => {

  const d = new Date();

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const formattedDate = `${days[d.getDay()]} ${months[d.getMonth()]} ${d.getDate()} ${d.getFullYear()}`;

  return (
    <>
      <div className='student-home-dashboard'>
        <h1 className="m-0">Welcome back, PRAVEEN</h1>
        <p className="m-0">{formattedDate}</p>

        {/* my dashboard container */}
        <div className='dashboard-cards row'>
         <div className='col-6'>
           <div className='dashboard-card'>
            <PiStudent className='dashboard-card-icon dash-icon-1' />
            <p className="m-0">2</p>
            <p className="m-0">Enrolled Classes</p>
          </div>
         </div>
          <div className='col-6'>
            <div className='dashboard-card'>
            <HiMiniArrowTrendingUp className='dashboard-card-icon dash-icon-2' />
            <p className="m-0">88%</p>
            <p className="m-0">Attendance Rate</p>
          </div>
          </div>
          <div className='col-12'>
            <div className='dashboard-card'>
            <FaHistory className='dashboard-card-icon dash-icon-3' />
            <p className="m-0">15</p>
            <p className="m-0">Classes Attended</p>
          </div>
          </div>

        </div>
      </div>


      {/* Quick actions container */}
      <div className='student-home-quick-actions'>
        <h1 className="m-0">Quick Actions</h1>
        <Link className='react-link' to={'/student/scan'}>
          <div className='quick-actions-item'> 
            <LuQrCode className='fs-3'/>
            <p className="m-0">Scan Attendance QR</p>
          </div>
        </Link>
        <Link className='react-link' to={'/student/history'}>
          <div className='quick-actions-item'>

            <FaHistory className='fs-3'/>
            <p className="m-0">View Attendance History</p>
          </div>
        </Link>
        <div className='quick-actions-reminder'>
          <h1 className="m-0">Reminder</h1>
          <p className="m-0">Make sudre you turn on location before scanning the QR code </p>
        </div>
      </div>


      {/* My classes container */}
      <h1 style={{ "font-size": "25px", "margin": "25px 20px 0px 20px" }}>My Classes</h1>
      <div className='my-classes-container'>
        <div className="my-class-card">
          <div className='my-class-name-logo'>
            <h1 className="m-0">JAVA</h1>
            <FaJava className='my-class-logo fs-1' />
          </div>
          <div className='my-class-trainer'>
            <FaCircleUser className='class-trainer-logo' />
            <div>
              <p className="m-0">Trainer:</p>
              <h4>Shishira A Bhat</h4>
            </div>
          </div>
          <div className='my-class-time'>
            <PiTimerDuotone className='class-time-logo' />
            <div>
              <p className="m-0">Time</p>
              <h4>2:30 PM - 4:30 PM</h4>
            </div>
          </div>

          <div className='my-class-time'>
            <FaLocationDot className='class-location-logo' />
            <div>
              <p className="m-0">Location</p>
              <h4>Main building (201)</h4>
            </div>
          </div>
          <hr />
          <div className='my-class-status-btn'>
            <p className='m-0'>Ongoing</p>
            <button className='my-class-view-btn'>View</button>
          </div>
        </div>
      </div>

    </>
  )
}

export default StudentHome

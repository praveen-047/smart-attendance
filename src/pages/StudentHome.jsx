import React from 'react'
import Nav from '../components/Nav'

import { LuQrCode } from "react-icons/lu";
import { FaHistory } from "react-icons/fa";
import { HiMiniArrowTrendingUp } from "react-icons/hi2";
import { PiStudent } from "react-icons/pi";
import { FaJava } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import { PiTimerDuotone } from "react-icons/pi";

import "../styles/studentHome.css"
const StudentHome = () => {

const d = new Date();

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const formattedDate = `${days[d.getDay()]} ${months[d.getMonth()]} ${d.getDate()} ${d.getFullYear()}`;

  return (
    <>
        <Nav/>
        <div className='student-home-dashboard'>
          <h1>My Dashboard</h1>
          <p>{formattedDate}</p>
          <div className='dashboard-cards'>
            <div className='dashboard-card'>
              <PiStudent className='dashboard-card-icon dash-icon-1'/>
              <p>2</p>
              <p>Enrolled Classes</p>
            </div>
            <div className='dashboard-card'>
              <HiMiniArrowTrendingUp className='dashboard-card-icon dash-icon-2'/>
              <p>88%</p>
              <p>Attendance Rate</p>
            </div>
            <div className='dashboard-card'>
              <FaHistory className='dashboard-card-icon dash-icon-3'/>
              <p>15</p>
              <p>Classes Attended</p>
            </div>
            
          </div>
        </div>

        <div className='student-home-quick-actions'>
           <h1>Quick Actions</h1>
           <div className='quick-actions-item'>
              <LuQrCode/>
              <p>Scan Attendance QR</p>
           </div>
           <div className='quick-actions-item'>
              <FaHistory/>
              <p>View Attendance History</p>
           </div>
           <div className='quick-actions-reminder'>
            <h1>Reminder</h1>
            <p>Make sudre you turn on location before scanning the QR code </p>
           </div>
        </div>

        <h1 style={{"font-size":"18px","margin":"20px 20px 0px 20px"}}>My Classes</h1>
        <div className='my-classes-container'>
          <div className="my-class-card">
            <div className='my-class-name-logo'>
              <h1>JAVA</h1>
              <FaJava className='my-class-logo'/>
            </div>
            <div className='my-class-trainer'>
              <FaCircleUser className='class-trainer-logo'/>
              <div>
                <p>Trainer:</p>
                <h4>Shishira A Bhat</h4>
              </div>
            </div>
            <div className='my-class-time'>
              
                <PiTimerDuotone className='class-time-logo'/>
              
              <div><p>Time</p>
              <h4>2:30 PM-4:30 PM</h4></div>
            </div>
            <hr />
            <div className='my-class-status-btn'>
              <div>
                <p>ONGOING</p>
              </div>
              <button className='my-class-view-btn'>View</button>
            </div>
          </div>
          <div className="my-class-card">
            <div className='my-class-name-logo'>
              <h1>JAVA</h1>
              <FaJava className='my-class-logo'/>
            </div>
            <div className='my-class-trainer'>
              <FaCircleUser className='class-trainer-logo'/>
              <div>
                <p>Trainer:</p>
                <h4>Shishira A Bhat</h4>
              </div>
            </div>
            <div className='my-class-time'>
              
                <PiTimerDuotone className='class-time-logo'/>
              
              <div><p>Time</p>
              <h4>2:30 PM-4:30 PM</h4></div>
            </div>
            <hr />
            <div className='my-class-status-btn'>
              <div>
                <p>ONGOING</p>
              </div>
              <button className='my-class-view-btn'>View</button>
            </div>
          </div>
        </div>
        
    </>
  )
}

export default StudentHome

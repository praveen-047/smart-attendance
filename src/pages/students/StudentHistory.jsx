import React from 'react'
import { FiArrowLeft } from "react-icons/fi";
import { FaRegCalendarAlt } from "react-icons/fa";
import { HiMiniArrowTrendingUp } from "react-icons/hi2";
import { FaCalendarXmark } from "react-icons/fa6";
import './../../styles/studentHistory.css'
import { Link } from 'react-router-dom';
const StudentHistory = () => {
  return (
    <div className='student-history-container'>

      {/* back to dashboard button container*/}
      <div className='back-to-dashboard mb-3'>
        <Link to={'/student/dashboard'}>
          <FiArrowLeft className='back-to-icon' />
          <button className='back-to-btn'>Back to dashboard</button>
        </Link>
      </div>


      {/* students attendance rate , classes attended, classes missed container */}
      <div className="attendance-history-container">
        <h1 className='m-0'>Attendance History</h1>
        <p className='m-0'>View Your Attendance Records</p>
        <div className='attendance-history-card d-flex align-items-center'>
          <HiMiniArrowTrendingUp className='history-card-icon bg-green' />
          <div>
            <p className="m-0 lh-1 fs-2 fw-medium">88%</p>
            <p className="m-0">Attendance Rate</p>
          </div>
        </div>

        <div className='attendance-history-card d-flex align-items-center'>
          <FaRegCalendarAlt className='history-card-icon bg-blue' />
          <div>
            <p className="m-0 lh-1 fs-2 fw-medium">40</p>
            <p className="m-0">Classes Attended</p>
          </div>
        </div>

        <div className='attendance-history-card d-flex align-items-center'>
          <FaCalendarXmark className='history-card-icon bg-red' />
          <div>
            <p className="m-0 lh-1 fs-2 fw-medium">4</p>
            <p className="m-0">Classes Missed</p>
          </div>
        </div>
      </div>

      {/* filter by month container */}
      <div className='filterby-month-container'>
        <p className='m-0'>Filter by month</p>
        <select name="month" id="month" className='month-select'>
          <option value="jan">Jan 2026</option>
          <option value="feb" >Feb 2026</option>
          <option value="mar">Mar 2026</option>
        </select>

        <table className="attendance-table">
          <thead>
            <tr>
              <th>Class</th>
              <th>Date</th>
              <th>Time</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Java</td>
              <td>2026-02-05</td>
              <td>09:05 AM</td>
              <td><span className="status present">Present</span></td>
            </tr>

            <tr>
              <td>SQL</td>
              <td>2026-02-04</td>
              <td>10:32 AM</td>
              <td><span className="status present">Present</span></td>
            </tr>

            <tr>
              <td>HTML/CSS</td>
              <td>2026-02-03</td>
              <td>09:00 AM</td>
              <td><span className="status absent">Absent</span></td>
            </tr>

            <tr>
              <td>Javascript</td>
              <td>2026-02-01</td>
              <td>10:30 AM</td>
              <td><span className="status present">Present</span></td>
            </tr>
          </tbody>
        </table>
      </div>


      {/* attendance policy */}
      <div className='attendance-policy'>
        <FaRegCalendarAlt className='attendance-policy-icon ' />
        <div className='attendance-policy-content'>
          <h1>Attendance Policy</h1>
          <p>Minimum 75% attendance is required to be eligible for examinations. Make sure to scan the QR code at the start of each class.</p>
        </div>
      </div>

    </div>
  )
}

export default StudentHistory
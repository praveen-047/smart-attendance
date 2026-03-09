import React from 'react'
import { IoCamera } from "react-icons/io5";
import { MdOutlineInfo } from "react-icons/md";
import { LuQrCode } from "react-icons/lu";
import '../../styles/studentScan.css'

const StudentScan = () => {
  return (
    <div className='student-scan-container'>
        <h1>Scan Attendance QR</h1>
        <p>Position the QR code within the frame to mark your attendance</p>
        <div className='camera-qr-container'>
            <div className='qr-logo-container'>
                <LuQrCode className='qr-logo'/>
            </div>
            
        </div>
        <button className='qr-camera-container fs-5'>
            <IoCamera className='camera-icon fs-2'/>
            Start Camera
        </button>
        <div className='qr-scan-instructions'>
            <div className='instruction-heading-container'>
                <MdOutlineInfo className='insruction-icon fs-1'/> 
                <h4 className='m-0  fs-5'>Instructions</h4>
            </div>
            <ul className='instructions-ul'>
                <li> Ensure the QR code is clearly visible on the smart board</li>
                <li>Hold your device steady while scanning</li>
                <li>Make sure you're within the classroom location</li>
                <li>QR code expires after 5 minutes</li>
            </ul>
        </div>
    </div>
  )
}

export default StudentScan
import { useState } from 'react';
import{NavLink } from 'react-router-dom'
import { FaHome } from "react-icons/fa";
import { LuQrCode } from "react-icons/lu";
import { FaRegCalendarAlt } from "react-icons/fa";
import '../styles/nav.css'
import '../styles/global.css'
const Nav = () => {

    const [tab, settab] = useState('home')
    
    return (
        
        <div className='nav-card-container'>
            <div className='nav-container'>
                <div className='nav-option'>
                    <NavLink  to={"student/dashboard"} className='react-link'>
                        <FaHome className='nav-icon' />
                    <p>Home</p>
                    </NavLink >
                </div>
                <div className='nav-option'>
                    <NavLink  to={'student/scan'} className='react-link'>
                        <LuQrCode className='nav-icon' />
                    <p>Scan QR</p>
                    </NavLink >

                </div>
                <div className='nav-option'>
                    <NavLink  to={"/student/history"} className='react-link'> 
                        <FaRegCalendarAlt className='nav-icon' />
                    <p>Attendance</p>
                    </NavLink >
                </div>
            </div>
        </div>
    )
}

export default Nav
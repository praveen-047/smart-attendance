import React from 'react'
import { RiAdminFill } from "react-icons/ri";
import { FaBookOpen } from "react-icons/fa";
import { LuQrCode } from "react-icons/lu";
import '../styles/login.css'
const Login = () => {
    return (

        <>
            <div className='login-container'>
                <div className='login-logo-container'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm0YaGGCYI21KkDa8EOFZJ0or0fzIBP0u-vxTVBZN0&s" alt="" />
                </div>

                <div className='login-roles-container'>
                    <div className='login-role'>
                        <RiAdminFill className='role-icon' />
                        <p>Admin</p>
                    </div>
                    <div className='login-role'>
                        <FaBookOpen className='role-icon' />
                        <p>Teacher</p>
                    </div>
                    <div className='login-role'>
                        <LuQrCode className='role-icon' />
                        <p>Student</p>
                    </div>
                </div>

                <div className='login-form-container'>
                    {/* <GiGraduateCap className='login-role'/> */}
                    <h1>SmartAtttend</h1>
                    <p>{ }</p>
                    <form className='form'>
                        <label htmlFor="email">Email</label>
                        <input type="email" id='email' placeholder='Enter your email' />

                        <label htmlFor="password">Password</label>
                        <input type="passwrod" id='password' placeholder='Enter your password' />

                        <button className='sign-in-btn'>Sign In</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login
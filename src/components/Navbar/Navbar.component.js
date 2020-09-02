import React from 'react'
import './Navbar.style.scss'

export default function Navbar() {
    return (
        <div className='navbar'>

          <div className='navbar-main'>
            <span className='navbar-link'>About</span>
            <span className='navbar-link'>Committee</span>
            <span className='navbar-link'>Education Center</span>
            <span className='navbar-link'>Activities</span>
            <span className='navbar-link'>Information</span>
          </div>

          <div class='navbar-sub'>
            <span className='navbar-link'><i class='fa fa-facebook' /></span>
            <span className='navbar-link'><i class='fa fa-linkedin' /></span>
            <span className='navbar-link'><i class='fa fa-twitter' /></span>
            <span className='navbar-link'><i class='fa fa-google' /></span>
            <button className='navbar-sub-btn'>Donate</button>
          </div>
        </div>
    )
}

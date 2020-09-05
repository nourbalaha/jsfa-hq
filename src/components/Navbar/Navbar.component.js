import React from 'react'
import './Navbar.style.scss'

export default function Navbar() {
    return (
        <div className='navbar'>

          <div className='navbar-main'>
            <a href="#about" className='navbar-link'>About</a>
            <a href="#committee" className='navbar-link'>Committee</a>
            <a href="#education" className='navbar-link'>Education Center</a>
            <a href="#activities" className='navbar-link'>Activities</a>
            <a href="#information" className='navbar-link'>Information</a>
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

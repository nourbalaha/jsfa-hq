import React from 'react'
import './Slideshow.style.scss'

import logo from "../../assets/JSFA logo.png"

export default function Slideshow() {
    return (
        <div>
            <div class="slideshow-container">
                <div class="mySlides show image">
                    <img className="logo" src={logo} alt="logo" />
                    <span className="text1">Japan Syria Friendship Association</span>
                    <span className="text2">Non-Governmental Organization</span>
                </div>
            </div>
        </div>
    )
}

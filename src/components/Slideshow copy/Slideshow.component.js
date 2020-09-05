import React, { useState, useEffect } from 'react'
import './Slideshow.style.scss'

export default function Slideshow() {
    let [index, setIndex] = useState(0);

    useEffect(()=>{
        setTimeout(()=>{
                index<2?setIndex(index+1):setIndex(0);
        },5000)
    },[index])

    return (
        <div>
        {
            index===0
            ?
                <div class="slideshow-container">
                    <div class="mySlides show image1">
                        <span className="text1">Japan Syria Friendship Association</span>
                        <span className="text2">Non-Governmental Organization</span>
                    </div>
                    <div class="mySlides hide" />
                    <div class="mySlides hide" />
                </div>
                :
                index===1
                ?
                <div class="slideshow-container">
                    <div class="mySlides hide" />
                    <div class="mySlides show image2">
                        <span className="text1">Japan Syria Friendship Association</span>
                        <span className="text2">Non-Governmental Organization</span>
                    </div>
                    <div class="mySlides hide" />
                </div>
                :
                <div class="slideshow-container">
                    <div class="mySlides hide" />
                    <div class="mySlides hide fade" />
                    <div class="mySlides show image3">
                        <span className="text1">Japan Syria Friendship Association</span>
                        <span className="text2">Non-Governmental Organization</span>
                    </div>
                </div>
                }
        </div>
    )
}

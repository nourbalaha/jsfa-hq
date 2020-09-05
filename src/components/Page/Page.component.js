import React from 'react'

import './Page.style.scss'

export default function Page({ title, id }) {
    return (
        <div id={id} className="page">
            <h2 className="page-title">{title}</h2>
            <p className="page-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum accumsan quam libero, id sollicitudin enim finibus id. Integer fermentum velit eu purus consequat, ac tincidunt mauris sodales. Pellentesque mollis gravida est, ut interdum augue pharetra sit amet. In tempor scelerisque vestibulum. Suspendisse viverra accumsan turpis, non interdum felis. Nulla dictum lacus lectus, et commodo libero iaculis nec. Suspendisse potenti. Quisque et ligula a purus hendrerit consectetur sit amet id tellus. Sed quis augue feugiat, faucibus magna sed, facilisis felis. Donec non nunc tellus. Morbi dictum quis libero sed venenatis. Phasellus laoreet sollicitudin nulla, at pharetra magna facilisis a. Aliquam fringilla sodales erat eget malesuada. In at nisl metus.</p>
        </div>
    )
}

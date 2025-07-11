import React from "react";
import './WhatsappButton.css'

const WhatsappButton = ()=>{
    const phone = '2348062762432'
    const message = encodeURIComponent('H1, i saw your Full Stack Roadmap website. i`d love to connect!')
    return(
        <a href={`https://wa.me/${phone}?text=${message}`} 
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-btn"
        >
           💬 Chat on WhatsApp

        </a>
    )
}
export default WhatsappButton
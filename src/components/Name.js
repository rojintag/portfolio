import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from "react";
import logo from '../assets/images/logo.png'
import image from '../assets/images/myImage1.jpeg'

function Name() {
  const [onCard, setOnCard] = useState(false)
  const onClick = () => {
    setOnCard(!onCard)
  }
  return (
    <div className='name'>
      <div className="title">
        <div className={!onCard ? "about-show" : "about-hide"}>
          <h2>My Name is</h2>
          <h2 className="type-writer">Rojin Taghadosi</h2>
          <div className={onCard ? "card-hide" : "about"}>
            <p className="link" onClick={onClick}>About Me</p>
          </div>
        </div>
        <div className={onCard ? "card-show" : "card-hide"}>
          <div className="x-icon">
            <FontAwesomeIcon icon={faCircleXmark} onClick={onClick} />
          </div>
          <p className="content">As a Full Stack developer, I am familiar with popular online and mobile app
            technologies and programming languages like JavaScript (ES6), React, and
            Node.js. I am committed to developing high-quality, user-friendly
            online apps, and I embrace challenges as opportunities to learn and grow
            beyond my current capabilities. Having Prior experience working in teams and
            collaborating with designers to accomplish project goals.
          </p>
        </div>
      </div>
      <div className="image-container">
        <img src={image} alt="my image" className="image" />
      </div>
      <div class='light x1'></div>
      <div class='light x2'></div>
      <div class='light x3'></div>
      <div class='light x4'></div>
      <div class='light x5'></div>
      <div class='light x6'></div>
      <div class='light x7'></div>
      <div class='light x8'></div>
      <div class='light x9'></div>
    </div>
  )
}

export default Name
